const fs = require("fs");
const path = require("path");

// Read the destinations.ts file
const filePath = path.join(__dirname, "../src/data/destinations.ts");
const content = fs.readFileSync(filePath, "utf-8");

// Extract the array content (everything between the first [ and last ])
const arrayMatch = content.match(
  /export const destinations: Destination\[\] = \[([\s\S]*)\];/,
);
if (!arrayMatch) {
  console.error("Could not find destinations array");
  process.exit(1);
}

const arrayContent = arrayMatch[1];

// Split by destination objects - each starts with "  {"
const destinationBlocks = [];
let depth = 0;
let currentBlock = "";
let inString = false;
let escapeNext = false;

for (let i = 0; i < arrayContent.length; i++) {
  const char = arrayContent[i];

  if (escapeNext) {
    currentBlock += char;
    escapeNext = false;
    continue;
  }

  if (char === "\\") {
    currentBlock += char;
    escapeNext = true;
    continue;
  }

  if (char === '"' && !escapeNext) {
    inString = !inString;
    currentBlock += char;
    continue;
  }

  if (!inString) {
    if (char === "{") {
      if (depth === 0 && currentBlock.trim() === "") {
        currentBlock = "{";
      } else {
        currentBlock += char;
      }
      depth++;
      continue;
    }

    if (char === "}") {
      depth--;
      currentBlock += char;
      if (depth === 0) {
        destinationBlocks.push(currentBlock.trim());
        currentBlock = "";
      }
      continue;
    }
  }

  if (depth > 0) {
    currentBlock += char;
  }
}

console.log(`Found ${destinationBlocks.length} destinations`);

// Create output directory
const outputDir = path.join(__dirname, "../src/data/destinations");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Extract id from each block and create individual files
const destinationIds = [];

destinationBlocks.forEach((block, index) => {
  // Extract the id
  const idMatch = block.match(/id:\s*"([^"]+)"/);
  if (!idMatch) {
    console.error(`Could not find id in block ${index}`);
    return;
  }

  const id = idMatch[1];
  destinationIds.push(id);

  // Create the file content
  const fileContent = `import type { Destination } from "../types";

export const ${id.replace(/-/g, "_")}: Destination = ${block};
`;

  // Write the file
  const fileName = `${id}.ts`;
  fs.writeFileSync(path.join(outputDir, fileName), fileContent);
  console.log(`Created ${fileName}`);
});

// Create index.ts that exports all destinations
const indexContent = `import type { Destination } from "../types";

${destinationIds.map((id) => `import { ${id.replace(/-/g, "_")} } from "./${id}";`).join("\n")}

export const destinations: Destination[] = [
${destinationIds.map((id) => `  ${id.replace(/-/g, "_")},`).join("\n")}
];

// Re-export individual destinations
export {
${destinationIds.map((id) => `  ${id.replace(/-/g, "_")},`).join("\n")}
};
`;

fs.writeFileSync(path.join(outputDir, "index.ts"), indexContent);
console.log("Created index.ts");

console.log("\nDone! All destinations have been split into individual files.");
console.log(`\nUpdate your imports from:`);
console.log(`  import { destinations } from "./data/destinations";`);
console.log(`to:`);
console.log(`  import { destinations } from "./data/destinations/index";`);
