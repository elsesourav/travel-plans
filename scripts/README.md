# Image Fetching Scripts

## ⭐ fetch-from-google-images.cjs (NO API KEY NEEDED)

**NEW! Fetches images directly from Google Images - No API key required!**

Scrapes Google Images search results and verifies each image's dimensions to ensure landscape orientation.

### Features

- ✅ **No API key required** - Works out of the box
- ✅ Scrapes Google Images search results
- ✅ Downloads image headers to check actual dimensions
- ✅ Only keeps verified landscape images (width > height)
- ✅ Supports JPEG, PNG, GIF, and WebP formats
- ✅ Automatic rate limiting to be respectful
- ✅ Generates both JSON and TypeScript output files

### Usage

Simply run the script - no setup needed:

```bash
node scripts/fetch-from-google-images.cjs
```

### How It Works

1. Searches Google Images for each place (e.g., "Radhanagar Beach Andaman Islands India")
2. Extracts image URLs from search results
3. Downloads first ~50KB of each image to check dimensions
4. Verifies image is landscape orientation
5. Keeps 5 landscape images per place

### Important Notes

⚠️ **Use Responsibly**

- Script includes 1-second delays between requests
- Checks up to 20 images to find 5 landscape ones
- Total runtime: ~15-30 minutes for all 150 places

📊 **Expected Results**

- 30 destinations × 5 places = 150 places
- ~5 images per place = ~750 total images
- All verified landscape orientation

### Example Output

```bash
📍 Puri (Odisha) - 5 places
────────────────────────────────────────────────────────────
  → Jagannath Temple
    Searching Google Images...
    Found 18 potential images
    Checking image 1/18...
    ✓ Landscape: 1920x1080 (1.78)
    Checking image 2/18...
    ✗ Portrait: 720x1280
    ...
  ✓ Found 5 landscape image(s)
```

---

## fetch-place-images.cjs

Automatically fetches landscape images for the top 5 places of each destination using free image APIs.

### Features

- ✅ Fetches from **Pexels** (primary source - better quality)
- ✅ Fallback to **Pixabay** (more variety)
- ✅ Only keeps landscape-oriented images (width > height)
- ✅ Generates both JSON and TypeScript output files
- ✅ Parses destination TypeScript files automatically
- ✅ Extracts place names from keyAttractions array

### Setup

#### Option 1: Pexels API (Recommended)

1. Go to https://www.pexels.com/api/
2. Sign up for a free account
3. Get your API key (Free tier: 200 requests/hour)
4. Run the script:

```bash
PEXELS_API_KEY=your_api_key_here node scripts/fetch-place-images.cjs
```

#### Option 2: Pixabay API (Alternative)

1. Go to https://pixabay.com/api/docs/
2. Sign up for a free account
3. Get your API key (Free tier: 5,000 requests/day)
4. Run the script:

```bash
PIXABAY_API_KEY=your_api_key_here node scripts/fetch-place-images.cjs
```

#### Option 3: Use Both (Best Results!)

Combine both APIs for maximum coverage:

```bash
PEXELS_API_KEY=your_pexels_key PIXABAY_API_KEY=your_pixabay_key node scripts/fetch-place-images.cjs
```

### Output Files

- **src/data/place-images.json** - JSON data with all images
- **src/data/place-images.ts** - TypeScript file with types and helper functions

### Output Structure

```typescript
{
  "destination-slug": {
    "name": "Destination Name",
    "state": "State Name",
    "places": [
      {
        "name": "Place Name",
        "fullDescription": "Full attraction description",
        "images": [
          {
            "id": 12345,
            "url": "https://...",
            "urlFull": "https://...",
            "urlSmall": "https://...",
            "width": 1920,
            "height": 1080,
            "aspectRatio": "1.78",
            "description": "Image description",
            "photographer": "Photographer Name",
            "photographerUrl": "https://...",
            "source": "pexels",
            "sourceUrl": "https://..."
          }
        ]
      }
    ]
  }
}
```

### Rate Limits

- **Pexels**: 200 requests/hour (free tier)
- **Pixabay**: 5,000 requests/day (free tier)

The script includes automatic rate limiting (300ms delay between requests) to avoid hitting API limits.

### Example Usage

```bash
# Run with Pexels only
PEXELS_API_KEY=abc123 node scripts/fetch-place-images.cjs

# Run with both APIs
PEXELS_API_KEY=abc123 PIXABAY_API_KEY=xyz789 node scripts/fetch-place-images.cjs

# Demo mode (no API key - generates placeholders)
node scripts/fetch-place-images.cjs
```

### Troubleshooting

**No images found?**

- Make sure your API key is correct
- Check that the place name exists in the destination file
- Try running with both APIs for better coverage

**Rate limit errors?**

- Wait a few minutes and try again
- Increase REQUEST_DELAY_MS in the script
- Consider using both APIs to distribute requests

**TypeScript errors?**

- Make sure the generated files are in the correct location
- Check that the PlaceImage interface matches your usage
