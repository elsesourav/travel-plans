const fs = require("fs");

// Fix ComparisonSection.tsx
const comparisonPath = "./src/components/sections/ComparisonSection.tsx";
let comparisonContent = fs.readFileSync(comparisonPath, "utf8");

// Fix images access - get first URL from first place
// Change: (destination.images || [...])[0]
// To: use a helper to extract first image URL
comparisonContent = comparisonContent.replace(
  /src=\{\s*\(destination\.images \|\| \[\s*`\/images\/destinations\/\$\{destination\.slug\}\.jpg`,\s*\]\)\[0\]\s*\}/g,
  `src={
                      typeof (destination.images?.[0]) === 'string' 
                        ? destination.images[0] 
                        : destination.images?.[0]?.urls?.[0] || \`/images/destinations/\${destination.slug}.jpg\`
                    }`,
);

// Fix budget access
comparisonContent = comparisonContent.replace(
  /destination\.budgetBreakdown\.total\.low/g,
  "destination.budgetBreakdown.perPerson.total.low",
);
comparisonContent = comparisonContent.replace(
  /destination\.budgetBreakdown\.total\.typical/g,
  "destination.budgetBreakdown.perPerson.total.typical",
);

fs.writeFileSync(comparisonPath, comparisonContent);
console.log("Fixed ComparisonSection.tsx");

// Fix Navbar.tsx
const navbarPath = "./src/components/layout/Navbar.tsx";
let navbarContent = fs.readFileSync(navbarPath, "utf8");

// Look for patterns like destination.images[0] or destination.images?.[0]
navbarContent = navbarContent.replace(
  /destination\.images\?\.\[0\]/g,
  `(typeof destination.images?.[0] === 'string' ? destination.images[0] : destination.images?.[0]?.urls?.[0])`,
);

fs.writeFileSync(navbarPath, navbarContent);
console.log("Fixed Navbar.tsx");
