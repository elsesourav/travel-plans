import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all data sets
const set0 = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./src/data/data.set0.json"), "utf8"),
);
const set1 = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./src/data/data.set1.json"), "utf8"),
);
const set2 = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./src/data/data.set2.json"), "utf8"),
);

// Combine all destinations
const allDestinations = [...set0, ...set1, ...set2];

// Create destinations folder if not exists
const destFolder = path.join(__dirname, "./src/data/destinations");
if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder, { recursive: true });
}

// Generate slug from destination name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-\$)/g, "");
}

// Create individual files
const exports = [];
allDestinations.forEach((dest, index) => {
  const slug = generateSlug(dest.destination);
  const fileName = slug + ".ts";
  const varName = slug.replace(/-/g, "_");

  const content = `import type { Destination } from '../types';

export const ${varName}: Destination = ${JSON.stringify({ ...dest, slug }, null, 2)};
`;

  fs.writeFileSync(path.join(destFolder, fileName), content);
  exports.push({ slug, varName, fileName });
  console.log("Created: " + fileName);
});

// Create index.ts
const indexContent = `import type { Destination } from '../types';

${exports.map((e) => `import { ${e.varName} } from './${e.slug}';`).join("\n")}

export const destinations: Destination[] = [
  ${exports.map((e) => e.varName).join(",\n  ")}
];

export {
  ${exports.map((e) => e.varName).join(",\n  ")}
};
`;

fs.writeFileSync(path.join(destFolder, "index.ts"), indexContent);
console.log("\nCreated: index.ts");
console.log("\nTotal files created: " + (exports.length + 1));
