import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all destination files
const destFolder = path.join(__dirname, "./src/data/destinations");
const files = fs
  .readdirSync(destFolder)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts");

let allDestinations = [];

files.forEach((file) => {
  const content = fs.readFileSync(path.join(destFolder, file), "utf8");
  // Extract the object from 'export const xyz: Destination = {...};'
  const match = content.match(/export const \w+: Destination = (\{[\s\S]*\});/);
  if (match) {
    const objStr = match[1];
    allDestinations.push(objStr);
    console.log("Extracted:", file);
  }
});

const output = `import type { Destination } from './types';

export const destinations: Destination[] = [
${allDestinations.join(",\n")}
];
`;

fs.writeFileSync(path.join(__dirname, "./src/data/destinations.ts"), output);
console.log(
  "\\nCreated destinations.ts with",
  allDestinations.length,
  "destinations",
);
