/**
 * Fetch Landscape Images for Top 5 Places of Each Destination
 *
 * This script:
 * 1. Reads all destination files from src/data/destinations/
 * 2. Extracts top 5 keyAttractions (places) for each destination
 * 3. Fetches landscape images from Pexels API (primary) and Pixabay API (fallback)
 * 4. Only keeps images that are landscape orientation (width > height)
 * 5. Outputs the results to a JSON file
 *
 * Usage:
 *   PEXELS_API_KEY=your_key node scripts/fetch-place-images.cjs
 *
 * Or with both sources:
 *   PEXELS_API_KEY=your_key PIXABAY_API_KEY=your_key node scripts/fetch-place-images.cjs
 *
 * Get API keys from:
 *   - Pexels: https://www.pexels.com/api/ (Free, 200 requests/hour)
 *   - Pixabay: https://pixabay.com/api/docs/ (Free, 5000 requests/day)
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// ============================================================================
// Configuration
// ============================================================================

const PEXELS_API_KEY = process.env.PEXELS_API_KEY || "";
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || "";
const DESTINATIONS_DIR = path.join(__dirname, "../src/data/destinations");
const OUTPUT_FILE = path.join(__dirname, "../src/data/place-images.json");
const MAX_PLACES_PER_DESTINATION = 5;
const IMAGES_PER_PLACE = 5; // Fetch 5 images per place
const REQUEST_DELAY_MS = 300; // Delay between API calls to avoid rate limiting

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
 * Make HTTPS GET request and return JSON response
 */
function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: "GET",
      headers: {
        "User-Agent": "TourPlan/1.0",
        ...headers,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${data.substring(0, 200)}`));
        }
      });
    });

    req.on("error", reject);
    req.end();
  });
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

  // Extract keyAttractions array - find the block between keyAttractions: [ and the closing ]
  const keyAttractionsMatch = content.match(
    /keyAttractions:\s*\[([\s\S]*?)\],/,
  );

  let keyAttractions = [];
  if (keyAttractionsMatch) {
    // Parse the array content - split by newlines and extract each attraction
    const arrayContent = keyAttractionsMatch[1];

    // Match each quoted string on its own line (handles ", ', and `)
    const lines = arrayContent.split("\n");

    for (const line of lines) {
      // Skip empty lines or lines that are just commas
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine === ",") continue;

      // Extract the content inside quotes (any type of quote)
      const quoteMatch = trimmedLine.match(/^["'`](.+)["'`],?$/);
      if (quoteMatch && quoteMatch[1]) {
        const fullText = quoteMatch[1];
        // Extract just the place name (before the em-dash, en-dash, or regular dash)
        // Be careful to not split on hyphenated place names
        let placeName = fullText;

        // Look for — or – which are typically used as separators
        const dashIndex = fullText.search(/\s+[—–]\s+/);
        if (dashIndex !== -1) {
          placeName = fullText.substring(0, dashIndex).trim();
        } else {
          // Fallback: try splitting on regular dash with spaces around it
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

/**
 * Check if image is landscape orientation
 */
function isLandscape(width, height) {
  return width > height;
}

/**
 * Search Pexels for images of a place
 */
async function searchPexelsImages(query, destinationName, state) {
  if (!PEXELS_API_KEY) return [];

  const searchQuery = `${query} ${destinationName} ${state} India landscape`;
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    searchQuery,
  )}&per_page=${IMAGES_PER_PLACE * 2}&orientation=landscape`;

  try {
    const response = await httpsGet(url, {
      Authorization: PEXELS_API_KEY,
    });

    if (!response.photos || response.photos.length === 0) {
      // Try a simpler search query
      const simpleUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query + " India landscape",
      )}&per_page=${IMAGES_PER_PLACE * 2}&orientation=landscape`;

      const simpleResponse = await httpsGet(simpleUrl, {
        Authorization: PEXELS_API_KEY,
      });

      if (simpleResponse.photos && simpleResponse.photos.length > 0) {
        return formatPexelsImages(simpleResponse.photos);
      }

      return [];
    }

    return formatPexelsImages(response.photos);
  } catch (error) {
    console.error(`  ✗ Pexels error for "${query}":`, error.message);
    return [];
  }
}

/**
 * Format Pexels images
 */
function formatPexelsImages(photos) {
  return photos
    .filter((img) => isLandscape(img.width, img.height))
    .slice(0, IMAGES_PER_PLACE)
    .map((img) => ({
      id: img.id,
      url: img.src.large,
      urlFull: img.src.original,
      urlSmall: img.src.medium,
      width: img.width,
      height: img.height,
      aspectRatio: (img.width / img.height).toFixed(2),
      description: img.alt || "",
      photographer: img.photographer,
      photographerUrl: img.photographer_url,
      source: "pexels",
      sourceUrl: img.url,
    }));
}

/**
 * Search Pixabay for images of a place
 */
async function searchPixabayImages(query, destinationName, state) {
  if (!PIXABAY_API_KEY) return [];

  const searchQuery = `${query} ${destinationName} India`;
  const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
    searchQuery,
  )}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PLACE * 2}&safesearch=true`;

  try {
    const response = await httpsGet(url);

    if (!response.hits || response.hits.length === 0) {
      // Try a simpler search query
      const simpleUrl = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
        query + " India",
      )}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PLACE * 2}&safesearch=true`;

      const simpleResponse = await httpsGet(simpleUrl);

      if (simpleResponse.hits && simpleResponse.hits.length > 0) {
        return formatPixabayImages(simpleResponse.hits);
      }

      return [];
    }

    return formatPixabayImages(response.hits);
  } catch (error) {
    console.error(`  ✗ Pixabay error for "${query}":`, error.message);
    return [];
  }
}

/**
 * Format Pixabay images
 */
function formatPixabayImages(hits) {
  return hits
    .filter((img) => isLandscape(img.imageWidth, img.imageHeight))
    .slice(0, IMAGES_PER_PLACE)
    .map((img) => ({
      id: img.id,
      url: img.largeImageURL,
      urlFull: img.largeImageURL,
      urlSmall: img.webformatURL,
      width: img.imageWidth,
      height: img.imageHeight,
      aspectRatio: (img.imageWidth / img.imageHeight).toFixed(2),
      description: img.tags,
      photographer: img.user,
      photographerUrl: `https://pixabay.com/users/${img.user}-${img.user_id}/`,
      source: "pixabay",
      sourceUrl: img.pageURL,
    }));
}

/**
 * Fetch images using multiple sources (Pexels primary, Pixabay fallback)
 */
async function fetchPlaceImages(query, destinationName, state) {
  // Try Pexels first
  let images = await searchPexelsImages(query, destinationName, state);

  if (images.length > 0) {
    console.log(`  ✓ Found ${images.length} images from Pexels`);
    return images;
  }

  // Fallback to Pixabay
  images = await searchPixabayImages(query, destinationName, state);

  if (images.length > 0) {
    console.log(`  ✓ Found ${images.length} images from Pixabay`);
    return images;
  }

  console.log(`  ⚠ No images found for "${query}"`);
  return [];
}

// ============================================================================
// Main Script
// ============================================================================

async function main() {
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║    Fetching Landscape Images for Destination Places        ║");
  console.log(
    "╚════════════════════════════════════════════════════════════╝\n",
  );

  // Check for API keys
  if (!PEXELS_API_KEY && !PIXABAY_API_KEY) {
    console.log("⚠️  No API keys found!\n");
    console.log("To use this script, you need at least one API key:\n");
    console.log("📷 Pexels (Recommended - Better quality images):");
    console.log("  1. Go to https://www.pexels.com/api/");
    console.log("  2. Sign up and get your API key (Free, 200 requests/hour)");
    console.log(
      "  3. Run: PEXELS_API_KEY=your_key node scripts/fetch-place-images.cjs\n",
    );
    console.log("📸 Pixabay (Alternative - More images):");
    console.log("  1. Go to https://pixabay.com/api/docs/");
    console.log("  2. Sign up and get your API key (Free, 5000 requests/day)");
    console.log(
      "  3. Run: PIXABAY_API_KEY=your_key node scripts/fetch-place-images.cjs\n",
    );
    console.log("💡 You can use both for best results!");
    console.log(
      "   PEXELS_API_KEY=xxx PIXABAY_API_KEY=yyy node scripts/fetch-place-images.cjs\n",
    );
    console.log("Running in DEMO mode (will generate placeholder data)...\n");
  } else {
    if (PEXELS_API_KEY) console.log("✓ Pexels API key found");
    if (PIXABAY_API_KEY) console.log("✓ Pixabay API key found");
    console.log("");
  }

  // Get all destination files
  const destinationFiles = fs
    .readdirSync(DESTINATIONS_DIR)
    .filter((file) => file.endsWith(".ts") && file !== "index.ts");

  console.log(`Found ${destinationFiles.length} destination files\n`);

  const allPlaceImages = {};
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

      let images = [];

      if (PEXELS_API_KEY || PIXABAY_API_KEY) {
        // Fetch images using the new combined function
        images = await fetchPlaceImages(
          attraction.placeName,
          destination.name,
          destination.state,
        );

        // Rate limiting
        await sleep(REQUEST_DELAY_MS);
      }

      if (images.length > 0) {
        successfulFetches++;
        console.log(`    ✓ Found ${images.length} landscape image(s)`);
      } else {
        // Generate placeholder for demo mode
        images = [
          {
            id: `placeholder-${destination.slug}-${totalPlaces}`,
            url: `https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80`,
            urlSmall: `https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80`,
            width: 1200,
            height: 800,
            aspectRatio: "1.50",
            description: `Placeholder for ${attraction.placeName}`,
            photographer: "Unknown",
            isPlaceholder: true,
          },
        ];
        console.log(`    ⚠ Using placeholder image`);
      }

      allPlaceImages[destination.slug].places.push({
        name: attraction.placeName,
        fullDescription: attraction.fullText,
        images,
      });
    }
  }

  // Summary
  console.log("\n" + "═".repeat(60));
  console.log("📊 Summary");
  console.log("═".repeat(60));
  console.log(`  Total destinations: ${Object.keys(allPlaceImages).length}`);
  console.log(`  Total places: ${totalPlaces}`);
  console.log(`  Successful image fetches: ${successfulFetches}`);
  console.log(`  Places with placeholders: ${totalPlaces - successfulFetches}`);

  // Save to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allPlaceImages, null, 2));
  console.log(`\n✓ Results saved to: ${OUTPUT_FILE}`);

  // Generate TypeScript output as well
  const tsOutput = generateTypeScriptOutput(allPlaceImages);
  const tsOutputFile = path.join(__dirname, "../src/data/place-images.ts");
  fs.writeFileSync(tsOutputFile, tsOutput);
  console.log(`✓ TypeScript file saved to: ${tsOutputFile}`);
}

/**
 * Generate TypeScript export file
 */
function generateTypeScriptOutput(data) {
  let output = `// Auto-generated by fetch-place-images.cjs
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
  source?: 'pexels' | 'pixabay';
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

  return output;
}

// Run the script
main().catch(console.error);
