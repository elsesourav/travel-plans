/**
 * Fetch Landscape Images from Multiple Sources for Top 5 Places
 *
 * This script:
 * 1. Reads all destination files from src/data/destinations/
 * 2. Extracts top 5 keyAttractions (places) for each destination
 * 3. Searches for images using DuckDuckGo (no API key required)
 * 4. Downloads image metadata to check dimensions
 * 5. Only keeps images that are landscape orientation (width > height)
 * 6. Outputs the results to a JSON file
 *
 * NO API KEY REQUIRED - Uses DuckDuckGo image search
 *
 * Usage:
 *   node scripts/fetch-from-google-images.cjs
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const { URL } = require("url");

// ============================================================================
// Configuration
// ============================================================================

const DESTINATIONS_DIR = path.join(__dirname, "../src/data/destinations");
const OUTPUT_FILE = path.join(__dirname, "../src/data/place-images.json");
const PROGRESS_FILE = path.join(
  __dirname,
  "../src/data/place-images-progress.json",
);
const MAX_PLACES_PER_DESTINATION = 5;
const IMAGES_PER_PLACE = 5; // Target number of landscape images per place
const MAX_IMAGES_TO_CHECK = 20; // Check up to 20 images to find 5 landscape ones
const REQUEST_DELAY_MS = 1000; // 1 second delay between requests to be respectful
const IMAGE_CHECK_TIMEOUT = 5000; // 5 seconds timeout for image checks

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Sleep for specified milliseconds
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Make HTTPS/HTTP GET request
 */
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === "https:" ? https : http;

    const requestOptions = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: options.method || "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        ...options.headers,
      },
      timeout: options.timeout || 10000,
    };

    const req = protocol.request(requestOptions, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });

    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });

    req.end();
  });
}

/**
 * Get image dimensions from URL
 */
async function getImageDimensions(imageUrl) {
  try {
    const urlObj = new URL(imageUrl);
    const protocol = urlObj.protocol === "https:" ? https : http;

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        req.destroy();
        reject(new Error("Timeout"));
      }, IMAGE_CHECK_TIMEOUT);

      const req = protocol.get(
        imageUrl,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          },
        },
        (res) => {
          if (res.statusCode !== 200) {
            clearTimeout(timeout);
            req.destroy();
            reject(new Error(`HTTP ${res.statusCode}`));
            return;
          }

          let chunks = [];
          let totalLength = 0;
          const maxBytes = 50000; // Only download first 50KB to check dimensions

          res.on("data", (chunk) => {
            chunks.push(chunk);
            totalLength += chunk.length;

            // Try to get dimensions from what we have so far
            const buffer = Buffer.concat(chunks);
            const dimensions = getImageDimensionsFromBuffer(buffer);

            if (dimensions) {
              clearTimeout(timeout);
              req.destroy();
              resolve(dimensions);
            } else if (totalLength > maxBytes) {
              // Downloaded enough, give up
              clearTimeout(timeout);
              req.destroy();
              reject(new Error("Could not determine dimensions"));
            }
          });

          res.on("end", () => {
            clearTimeout(timeout);
            const buffer = Buffer.concat(chunks);
            const dimensions = getImageDimensionsFromBuffer(buffer);

            if (dimensions) {
              resolve(dimensions);
            } else {
              reject(new Error("Could not determine dimensions"));
            }
          });

          res.on("error", (err) => {
            clearTimeout(timeout);
            reject(err);
          });
        },
      );

      req.on("error", (err) => {
        clearTimeout(timeout);
        reject(err);
      });
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Extract image dimensions from buffer (supports JPEG, PNG, GIF, WebP)
 */
function getImageDimensionsFromBuffer(buffer) {
  if (buffer.length < 24) return null;

  try {
    // JPEG
    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      let offset = 2;
      while (offset < buffer.length - 10) {
        // Safety margin
        if (offset + 1 >= buffer.length || buffer[offset] !== 0xff) break;

        const marker = buffer[offset + 1];
        if (marker === 0xc0 || marker === 0xc2) {
          if (offset + 9 <= buffer.length) {
            const height = buffer.readUInt16BE(offset + 5);
            const width = buffer.readUInt16BE(offset + 7);
            return { width, height };
          }
        }

        // Check if we have enough bytes to read segment length
        if (offset + 4 > buffer.length) break;

        const segmentLength = buffer.readUInt16BE(offset + 2);
        if (
          segmentLength <= 0 ||
          offset + segmentLength + 2 > buffer.length + 100
        ) {
          // Invalid segment length or would go beyond reasonable bounds
          break;
        }
        offset += segmentLength + 2;
      }
    }

    // PNG
    if (
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47
    ) {
      if (buffer.length >= 24) {
        const width = buffer.readUInt32BE(16);
        const height = buffer.readUInt32BE(20);
        return { width, height };
      }
    }

    // GIF
    if (buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46) {
      if (buffer.length >= 10) {
        const width = buffer.readUInt16LE(6);
        const height = buffer.readUInt16LE(8);
        return { width, height };
      }
    }

    // WebP
    if (
      buffer.length >= 30 &&
      buffer[0] === 0x52 &&
      buffer[1] === 0x49 &&
      buffer[2] === 0x46 &&
      buffer[3] === 0x46
    ) {
      if (
        buffer[8] === 0x57 &&
        buffer[9] === 0x45 &&
        buffer[10] === 0x42 &&
        buffer[11] === 0x50
      ) {
        if (buffer[12] === 0x56 && buffer[13] === 0x50 && buffer[14] === 0x38) {
          const width = buffer.readUInt16LE(26) & 0x3fff;
          const height = buffer.readUInt16LE(28) & 0x3fff;
          return { width: width + 1, height: height + 1 };
        }
      }
    }

    return null;
  } catch (error) {
    // Return null if any parsing error occurs
    return null;
  }
}

/**
 * Check if image is landscape orientation
 */
function isLandscape(width, height) {
  return width > height;
}

/**
 * Search DuckDuckGo Images and extract image URLs
 */
async function searchDuckDuckGoImages(query, destinationName, state) {
  const searchQuery = `${query} ${destinationName} ${state} India landscape`;

  try {
    console.log(`    Searching DuckDuckGo Images...`);

    // Step 1: Get the VQD token
    const vqdUrl = `https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}&iax=images&ia=images`;
    const vqdResponse = await makeRequest(vqdUrl);

    // Extract vqd token from response
    const vqdMatch = vqdResponse.body.match(/vqd=['"]([^'"]+)['"]/);
    if (!vqdMatch) {
      console.log(`    ⚠ Could not get search token`);
      return [];
    }

    const vqd = vqdMatch[1];

    // Step 2: Get image results
    const imagesUrl = `https://duckduckgo.com/i.js?q=${encodeURIComponent(searchQuery)}&o=json&vqd=${vqd}&f=,,,,,&p=1&v7=1`;

    await sleep(500); // Small delay between requests

    const imagesResponse = await makeRequest(imagesUrl, {
      headers: {
        Referer: "https://duckduckgo.com/",
      },
    });

    if (imagesResponse.statusCode !== 200) {
      console.log(`    ⚠ HTTP ${imagesResponse.statusCode}`);
      return [];
    }

    // Parse JSON response
    let data;
    try {
      data = JSON.parse(imagesResponse.body);
    } catch (e) {
      console.log(`    ⚠ Failed to parse response`);
      return [];
    }

    if (!data.results || data.results.length === 0) {
      console.log(`    ⚠ No images found`);
      return [];
    }

    // Extract image URLs
    const imageUrls = data.results
      .filter((result) => result.image)
      .map((result) => result.image)
      .filter((url) => {
        // Filter out small icons and thumbnails
        return (
          !url.includes("icon") &&
          !url.includes("logo") &&
          !url.includes("avatar") &&
          !url.includes("thumb")
        );
      });

    console.log(`    Found ${imageUrls.length} potential images`);
    return imageUrls.slice(0, MAX_IMAGES_TO_CHECK);
  } catch (error) {
    console.error(`    ✗ Error searching DuckDuckGo:`, error.message);
    return [];
  }
}

/**
 * Fetch and verify landscape images for a place with retry logic
 */
async function fetchPlaceImages(
  placeName,
  destinationName,
  state,
  retryCount = 0,
) {
  try {
    const imageUrls = await searchDuckDuckGoImages(
      placeName,
      destinationName,
      state,
    );

    if (imageUrls.length === 0) {
      if (retryCount < 2) {
        console.log(`    ⚠ No images found, retrying (${retryCount + 1}/2)...`);
        await sleep(1000);
        return fetchPlaceImages(
          placeName,
          destinationName,
          state,
          retryCount + 1,
        );
      }
      return [];
    }

    const landscapeImages = [];
    let checkedCount = 0;
    let consecutiveErrors = 0;

    for (const imageUrl of imageUrls) {
      if (landscapeImages.length >= IMAGES_PER_PLACE) {
        break;
      }

      // Stop if too many consecutive errors (might indicate a bad batch)
      if (consecutiveErrors >= 5) {
        console.log(`    ⚠ Too many errors, skipping remaining images...`);
        break;
      }

      checkedCount++;
      console.log(
        `    Checking image ${checkedCount}/${Math.min(imageUrls.length, MAX_IMAGES_TO_CHECK)}...`,
      );

      try {
        const dimensions = await getImageDimensions(imageUrl);

        if (isLandscape(dimensions.width, dimensions.height)) {
          const aspectRatio = (dimensions.width / dimensions.height).toFixed(2);
          console.log(
            `    ✓ Landscape: ${dimensions.width}x${dimensions.height} (${aspectRatio})`,
          );

          landscapeImages.push({
            id: `ddg-${Date.now()}-${landscapeImages.length}`,
            url: imageUrl,
            urlFull: imageUrl,
            urlSmall: imageUrl,
            width: dimensions.width,
            height: dimensions.height,
            aspectRatio,
            description: `${placeName}, ${destinationName}`,
            photographer: "DuckDuckGo Images",
            source: "duckduckgo",
            sourceUrl: imageUrl,
          });
          consecutiveErrors = 0; // Reset error counter on success
        } else {
          console.log(
            `    ✗ Portrait: ${dimensions.width}x${dimensions.height}`,
          );
          consecutiveErrors = 0; // Not an error, just wrong orientation
        }

        // Rate limiting
        await sleep(300);
      } catch (error) {
        consecutiveErrors++;
        console.log(`    ✗ Failed: ${error.message}`);
        // Shorter delay on error
        await sleep(100);
      }
    }

    // If we didn't find enough images and haven't retried yet, try again
    if (landscapeImages.length < IMAGES_PER_PLACE && retryCount === 0) {
      console.log(
        `    ⚠ Only found ${landscapeImages.length} images, retrying...`,
      );
      await sleep(1000);
      const retryImages = await fetchPlaceImages(
        placeName,
        destinationName,
        state,
        retryCount + 1,
      );
      // Combine results and remove duplicates
      const allImages = [...landscapeImages, ...retryImages];
      const uniqueImages = allImages.filter(
        (img, index, self) =>
          index === self.findIndex((i) => i.url === img.url),
      );
      return uniqueImages.slice(0, IMAGES_PER_PLACE);
    }

    return landscapeImages;
  } catch (error) {
    console.log(`    ✗ Error fetching images: ${error.message}`);
    if (retryCount < 2) {
      console.log(`    ⚠ Retrying (${retryCount + 1}/2)...`);
      await sleep(2000);
      return fetchPlaceImages(
        placeName,
        destinationName,
        state,
        retryCount + 1,
      );
    }
    return [];
  }
}

/**
 * Parse a TypeScript destination file and extract destination data
 */
function parseDestinationFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract destination name
  const nameMatch = content.match(/name:\s*["'`]([^"'`]+)["'`]/);
  const name = nameMatch ? nameMatch[1] : null;

  // Extract slug
  const slugMatch = content.match(/slug:\s*["'`]([^"'`]+)["'`]/);
  const slug = slugMatch ? slugMatch[1] : null;

  // Extract state
  const stateMatch = content.match(/state:\s*["'`]([^"'`]+)["'`]/);
  const state = stateMatch ? stateMatch[1] : null;

  // Extract keyAttractions array
  const keyAttractionsMatch = content.match(
    /keyAttractions:\s*\[([\s\S]*?)\],/,
  );

  let keyAttractions = [];
  if (keyAttractionsMatch) {
    const arrayContent = keyAttractionsMatch[1];
    const lines = arrayContent.split("\n");

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine === ",") continue;

      const quoteMatch = trimmedLine.match(/^["'`](.+)["'`],?$/);
      if (quoteMatch && quoteMatch[1]) {
        const fullText = quoteMatch[1];
        let placeName = fullText;

        const dashIndex = fullText.search(/\s+[—–]\s+/);
        if (dashIndex !== -1) {
          placeName = fullText.substring(0, dashIndex).trim();
        } else {
          const regularDashIndex = fullText.search(/\s+-\s+/);
          if (regularDashIndex !== -1) {
            placeName = fullText.substring(0, regularDashIndex).trim();
          }
        }

        keyAttractions.push({
          fullText,
          placeName,
        });
      }
    }
  }

  return {
    name,
    slug,
    state,
    keyAttractions: keyAttractions.slice(0, MAX_PLACES_PER_DESTINATION),
  };
}

// ============================================================================
// Main Script
// ============================================================================

async function main() {
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║   Fetching Landscape Images from DuckDuckGo               ║");
  console.log(
    "╚════════════════════════════════════════════════════════════╝\n",
  );
  console.log("✅ No API key required!");
  console.log("⚠️  Please use responsibly and respect rate limits.\n");

  // Load progress if exists
  let allPlaceImages = {};
  let processedDestinations = new Set();

  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8"));
      allPlaceImages = progress.data || {};
      processedDestinations = new Set(progress.processed || []);
      console.log(
        `📁 Resuming from previous progress (${processedDestinations.size} destinations already processed)\n`,
      );
    } catch (e) {
      console.log("⚠️  Could not load progress file, starting fresh\n");
    }
  }

  // Get all destination files
  const destinationFiles = fs
    .readdirSync(DESTINATIONS_DIR)
    .filter((file) => file.endsWith(".ts") && file !== "index.ts");

  console.log(`Found ${destinationFiles.length} destination files\n`);

  let totalPlaces = 0;
  let successfulFetches = 0;

  // Process each destination
  for (const file of destinationFiles) {
    const filePath = path.join(DESTINATIONS_DIR, file);
    const destination = parseDestinationFile(filePath);

    if (!destination.name || destination.keyAttractions.length === 0) {
      console.log(`⚠ Skipping ${file} - missing data`);
      continue;
    }

    // Skip if already processed
    if (processedDestinations.has(destination.slug)) {
      console.log(`⏭️  Skipping ${destination.name} (already processed)`);
      continue;
    }

    console.log(
      `\n📍 ${destination.name} (${destination.state}) - ${destination.keyAttractions.length} places`,
    );
    console.log("─".repeat(60));

    allPlaceImages[destination.slug] = {
      name: destination.name,
      state: destination.state,
      places: [],
    };

    // Process each key attraction
    for (const attraction of destination.keyAttractions) {
      totalPlaces++;
      console.log(`  → ${attraction.placeName}`);

      const images = await fetchPlaceImages(
        attraction.placeName,
        destination.name,
        destination.state,
      );

      if (images.length > 0) {
        successfulFetches++;
        console.log(`  ✓ Found ${images.length} landscape image(s)\n`);
      } else {
        console.log(`  ⚠ No landscape images found\n`);
      }

      allPlaceImages[destination.slug].places.push({
        name: attraction.placeName,
        fullDescription: attraction.fullText,
        images,
      });

      // Rate limiting between places
      await sleep(REQUEST_DELAY_MS);
    }

    // Mark destination as processed and save progress
    processedDestinations.add(destination.slug);
    fs.writeFileSync(
      PROGRESS_FILE,
      JSON.stringify(
        {
          data: allPlaceImages,
          processed: Array.from(processedDestinations),
          lastUpdated: new Date().toISOString(),
        },
        null,
        2,
      ),
    );
    console.log(
      `  💾 Progress saved (${processedDestinations.size}/${destinationFiles.length} destinations)`,
    );

    // Extra delay between destinations
    await sleep(REQUEST_DELAY_MS * 2);
  }

  // Summary
  console.log("\n" + "═".repeat(60));
  console.log("📊 Summary");
  console.log("═".repeat(60));
  console.log(`  Total destinations: ${Object.keys(allPlaceImages).length}`);
  console.log(`  Total places: ${totalPlaces}`);
  console.log(`  Places with images: ${successfulFetches}`);
  console.log(`  Places without images: ${totalPlaces - successfulFetches}`);

  // Calculate total images
  let totalImages = 0;
  Object.values(allPlaceImages).forEach((dest) => {
    dest.places.forEach((place) => {
      totalImages += place.images.length;
    });
  });
  console.log(`  Total images collected: ${totalImages}`);

  // Save to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allPlaceImages, null, 2));
  console.log(`\n✓ Results saved to: ${OUTPUT_FILE}`);

  // Generate TypeScript output as well
  const tsOutput = generateTypeScriptOutput(allPlaceImages);
  const tsOutputFile = path.join(__dirname, "../src/data/place-images.ts");
  fs.writeFileSync(tsOutputFile, tsOutput);
  console.log(`✓ TypeScript file saved to: ${tsOutputFile}`);

  // Clean up progress file on successful completion
  if (fs.existsSync(PROGRESS_FILE)) {
    fs.unlinkSync(PROGRESS_FILE);
    console.log(`✓ Progress file cleaned up`);
  }
}

/**
 * Generate TypeScript export file
 */
function generateTypeScriptOutput(data) {
  return `// Auto-generated by fetch-from-google-images.cjs
// Generated on: ${new Date().toISOString()}

export interface PlaceImage {
  id: string | number;
  url: string;
  urlFull?: string;
  urlSmall?: string;
  width: number;
  height: number;
  aspectRatio: string;
  description: string | null;
  photographer: string;
  photographerUrl?: string;
  source?: 'google' | 'pexels' | 'pixabay';
  sourceUrl?: string;
  isPlaceholder?: boolean;
}

export interface Place {
  name: string;
  fullDescription: string;
  images: PlaceImage[];
}

export interface DestinationPlaces {
  name: string;
  state: string;
  places: Place[];
}

export interface PlaceImagesData {
  [destinationSlug: string]: DestinationPlaces;
}

export const placeImages: PlaceImagesData = ${JSON.stringify(data, null, 2)};

/**
 * Get images for a specific place in a destination
 */
export function getPlaceImages(destinationSlug: string, placeName: string): PlaceImage[] {
  const destination = placeImages[destinationSlug];
  if (!destination) return [];
  
  const place = destination.places.find(
    p => p.name.toLowerCase() === placeName.toLowerCase()
  );
  
  return place?.images || [];
}

/**
 * Get all places for a destination
 */
export function getDestinationPlaces(destinationSlug: string): Place[] {
  return placeImages[destinationSlug]?.places || [];
}

/**
 * Get the first landscape image for a place
 */
export function getPlaceHeroImage(destinationSlug: string, placeName: string): string | null {
  const images = getPlaceImages(destinationSlug, placeName);
  return images.length > 0 ? images[0].url : null;
}
`;
}

// Run the script
main().catch(console.error);
