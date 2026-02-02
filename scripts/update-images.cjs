const fs = require("fs");
const path = require("path");

const placeImages = require("../src/data/place-images.json");
const destinationsDir = path.join(__dirname, "../src/data/destinations");

// Get all destination files
const files = fs
  .readdirSync(destinationsDir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts");

files.forEach((file) => {
  const slug = file.replace(".ts", "");
  const filePath = path.join(destinationsDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Get images from place-images.json
  const placeData = placeImages[slug];
  if (!placeData) {
    console.log(`No images found for ${slug}`);
    return;
  }

  // Build new images array
  const imagesArray = placeData.places.map((place) => {
    const urls = place.images.map((img) => img.url);
    return {
      placeName: place.name,
      urls: urls,
    };
  });

  // Format the images array for TypeScript
  const imagesStr = imagesArray
    .map((img) => {
      const urlsStr = img.urls.map((u) => `      "${u}"`).join(",\n");
      return `    {\n      placeName: "${img.placeName}",\n      urls: [\n${urlsStr},\n      ],\n    }`;
    })
    .join(",\n");

  const newImagesBlock = `images: [\n${imagesStr},\n  ],`;

  // Match any images array (both old string[] format and new object format)
  // This regex matches: images: [ ... ], up to the next property
  const imagesRegex =
    /images:\s*\[[\s\S]*?\],\s*(?=\n\s*(duration|destination):)/;

  if (imagesRegex.test(content)) {
    // Replace existing images
    content = content.replace(imagesRegex, newImagesBlock + "\n  ");
  } else {
    // Add images after name field
    const nameRegex = /(name:\s*"[^"]+",)/;
    if (nameRegex.test(content)) {
      content = content.replace(nameRegex, `$1\n  ${newImagesBlock}`);
    }
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated ${slug} with ${imagesArray.length} places`);
});

console.log("\nDone!");
