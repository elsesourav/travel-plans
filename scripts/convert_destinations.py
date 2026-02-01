import json
import re

def parse_markdown_table(table_str):
    lines = table_str.strip().split('\n')
    headers = [h.strip() for h in lines[0].strip('|').split('|')]
    rows = []
    for line in lines[2:]:
        if not line.strip(): continue
        values = [v.strip() for v in line.strip('|').split('|')]
        row = dict(zip(headers, values))
        rows.append(row)
    return headers, rows

def parse_cost(cost_str):
    # Remove ₹, commas, and whitespace
    clean = re.sub(r'[₹,]', '', cost_str).strip()
    # Handle ranges if necessary, but for now try to get a single number if it looks like one
    # If it's a range like 400-1500, maybe just keep it as string or take average?
    # The existing JSON for Varanasi has numbers for 'low' and 'typical' in budgetBreakdown items.
    # But strings for groupOf6.
    try:
        return int(clean)
    except:
        return clean

def parse_budget_breakdown(rows):
    items = []
    total = {}
    
    for row in rows:
        item_name = row.get('Item', row.get('Category', ''))
        if 'TOTAL' in item_name or 'Total' in item_name:
            low = parse_cost(row.get('Low (₹)', '0'))
            typical = parse_cost(row.get('Typical (₹)', '0'))
            notes = row.get('Notes', '')
            total = {
                "low": low,
                "typical": typical,
                "typicalRange": notes
            }
        else:
            items.append({
                "item": item_name,
                "low": parse_cost(row.get('Low (₹)', '0')),
                "typical": parse_cost(row.get('Typical (₹)', '0')),
                "notes": row.get('Notes', '')
            })
            
    return items, total

def parse_group_of_6(rows):
    breakdown = []
    total = ""
    
    for row in rows:
        category = row.get('Category', '')
        per_person = row.get('Per Person (₹)', '')
        
        if 'Total' in category or 'TOTAL' in category:
            total = per_person
        else:
            breakdown.append({
                "category": category,
                "perPerson": per_person
            })
    return breakdown, total

def main():
    with open('readme.json', 'r') as f:
        content = f.read()

    # Split the existing JSON part and the rest
    # Finding the first "## 2." to identify start of markdown
    split_match = re.search(r'\n## 2\.', content)
    if not split_match:
        print("Could not find start of second destination.")
        return

    json_part = content[:split_match.start()]
    markdown_part = content[split_match.start():]

    # Clean up JSON part
    # It has double {{ at the start sometimes?
    json_part = json_part.strip()
    if json_part.startswith('{\n{'):
        json_part = json_part[2:] # Remove first { and newline?
        json_part = '{' + json_part # Add back one {
    
    # Actually, lines 1-2 in the previous read were "{\n{"
    # So removing the first line is probably safer if it was a mistake.
    # Let's just looking for the FIRST open curly brace.
    first_brace = json_part.find('{')
    last_brace = json_part.rfind('}')
    
    # Handle the weird double brace at start:
    if json_part.startswith('{\n{'):
         json_part_clean = json_part[json_part.find('\n')+1 : last_brace+1]
    else:
         json_part_clean = json_part[first_brace : last_brace+1]
         
    try:
        varanasi = json.loads(json_part_clean)
        destinations = [varanasi]
    except json.JSONDecodeError as e:
        print(f"Error parsing existing JSON: {e}")
        # If parsing fails, we might just skip it or try to fix it more aggressively
        # For now, let's assume we can fix it manually or it works
        destinations = []

    # Parse key-value pairs at lines like "**Key:** Value"
    section_regex = re.compile(r'^## (\d+\. .*)$', re.MULTILINE)
    sections = list(section_regex.finditer(markdown_part))
    
    for i, match in enumerate(sections):
        start = match.start()
        end = sections[i+1].start() if i+1 < len(sections) else len(markdown_part)
        section_text = markdown_part[start:end]
        
        lines = section_text.split('\n')
        name_line = lines[0].replace('## ', '').strip()
        # "2. Hampi" -> "Hampi"
        dest_name = re.sub(r'^\d+\.\s*', '', name_line)
        
        dest_obj = {
            "destination": dest_name
        }
        
        # Parse Metadata
        current_context = "meta"
        meta_lines = []
        
        itinerary_lines = []
        budget_lines = []
        group_lines = []
        tips_lines = []
        
        capture_lines = None
        
        for line in lines[1:]:
            line = line.strip()
            if not line: continue
            
            if line.startswith('**') and ':' in line and current_context == "meta":
                key_part, val_part = line.split(':', 1)
                key = key_part.replace('**', '').strip().lower()
                val = val_part.strip()
                
                if key == 'coordinates':
                    # Parse lat long
                    try:
                        lat, lon = val.split(',')
                        val = {"latitude": lat.strip(), "longitude": lon.strip()}
                    except:
                        pass # keep as string
                
                dest_obj[key] = val
                
            elif "### Day-by-Day Itinerary" in line:
                current_context = "itinerary"
                capture_lines = itinerary_lines
            elif "### Budget Breakdown" in line:
                current_context = "budget"
                capture_lines = budget_lines
            elif "### Group of 6" in line:
                current_context = "group"
                capture_lines = group_lines
            elif "### Booking Tips" in line:
                current_context = "tips"
                capture_lines = tips_lines
            elif "### Getting There" in line:
                 current_context = "getting_there"
                 capture_lines = None # Skip for now or add to object
            elif "---" in line:
                pass 
            else:
                if capture_lines is not None:
                    capture_lines.append(line)

        # Process captured blocks
        
        # Itinerary
        if itinerary_lines:
            table_str = '\n'.join(itinerary_lines)
            if '|' in table_str:
                headers, itr_rows = parse_markdown_table(table_str)
                itinerary_json = []
                for row in itr_rows:
                    day_str = row.get('Day', '')
                    # Extract number from "Day 1"
                    day_num = re.sub(r'\D', '', day_str)
                    itinerary_json.append({
                        "day": int(day_num) if day_num else day_str,
                        "plan": row.get('Plan', '')
                    })
                dest_obj['itinerary'] = itinerary_json

        # Budget
        if budget_lines:
            table_str = '\n'.join(budget_lines)
            if '|' in table_str:
                headers, budget_rows = parse_markdown_table(table_str)
                items, total = parse_budget_breakdown(budget_rows)
                dest_obj['budgetBreakdown'] = {
                    "perPerson": items,
                    "total": total
                }
        
        # Group
        if group_lines:
            table_str = '\n'.join(group_lines)
            if '|' in table_str:
                headers, group_rows = parse_markdown_table(table_str)
                breakdown, total_grp = parse_group_of_6(group_rows)
                dest_obj['groupOf6'] = {
                    "breakdown": breakdown,
                    "total": total_grp
                }
                
        # Tips
        if tips_lines:
            tips = []
            for l in tips_lines:
                # Remove bullet points
                clean_l = re.sub(r'^[-*]\s+', '', l)
                if clean_l.startswith('|'): continue # Ignore table remnants if any
                tips.append(clean_l)
            dest_obj['bookingTips'] = tips
            
        destinations.append(dest_obj)

    # Output to file
    with open('readme.json', 'w') as f:
        json.dump(destinations, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    main()
