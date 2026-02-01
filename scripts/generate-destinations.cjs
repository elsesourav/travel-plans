const fs = require("fs");
const path = require("path");

// Load all JSON data files
const set0 = require("../src/data/data.set0.json");
const set1 = require("../src/data/data.set1.json");
const set2 = require("../src/data/data.set2.json");

// Combine all destinations
const allDestinations = [...set0, ...set1, ...set2];

// Image mappings for each destination (using Unsplash)
const imageMap = {
  Varanasi: [
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&q=80",
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    "https://images.unsplash.com/photo-1609947017136-9daf32b5971c?w=1200&q=80",
    "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=1200&q=80",
  ],
  Hampi: [
    "https://images.unsplash.com/photo-1600100397608-e19ed8d56d27?w=1920&q=80",
    "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200&q=80",
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    "https://images.unsplash.com/photo-1623684206664-0f04c43cb83c?w=1200&q=80",
  ],
  "Bodh Gaya": [
    "https://images.unsplash.com/photo-1591018653367-4e9a8be46e5e?w=1920&q=80",
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80",
    "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80",
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
  ],
  Ayodhya: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1200&q=80",
    "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80",
  ],
  Sundarbans: [
    "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&q=80",
    "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80",
    "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1200&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
  ],
  Puri: [
    "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1920&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
  ],
  Gokarna: [
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
    "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80",
  ],
  Shantiniketan: [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c036bc1d8d?w=1200&q=80",
  ],
  Mandarmani: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80",
    "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1200&q=80",
  ],
  Ujjain: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=80",
    "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1200&q=80",
    "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
  ],
  Konark: [
    "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1920&q=80",
    "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200&q=80",
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80",
  ],
  Majuli: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
  ],
  Yuksom: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80",
  ],
  "Khonoma (Nagaland)": [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
  ],
  "Ziro Valley (Arunachal Pradesh)": [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&q=80",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80",
  ],
  "Tirthan Valley": [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
  ],
  Chopta: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
  ],
  Daringbadi: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80",
  ],
  "Tawang (Arunachal Pradesh)": [
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=1200&q=80",
    "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&q=80",
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1200&q=80",
  ],
  "Spiti Valley (Himachal Pradesh)": [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80",
    "https://images.unsplash.com/photo-1608543350258-3e94cd54c1c9?w=1200&q=80",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
  ],
  "McLeod Ganj": [
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=1200&q=80",
  ],
  "Bir Billing": [
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
  ],
  Chakrata: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80",
  ],
  Pelling: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
  ],
  "Andaman Islands": [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
    "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80",
  ],
  "Leh-Ladakh": [
    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1920&q=80",
    "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&q=80",
    "https://images.unsplash.com/photo-1615060544936-c5d05b6c38e4?w=1200&q=80",
    "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&q=80",
  ],
  "Tso Moriri": [
    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1920&q=80",
    "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&q=80",
    "https://images.unsplash.com/photo-1615060544936-c5d05b6c38e4?w=1200&q=80",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
  ],
  Kinnaur: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
  ],
  "Araku Valley": [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80",
  ],
  Valparai: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
  ],
};

// Taglines for each destination
const taglineMap = {
  Varanasi: "The Spiritual Heart of India",
  Hampi: "Where Boulders Tell Ancient Stories",
  "Bodh Gaya": "Where Buddha Found Enlightenment",
  Ayodhya: "The Sacred Birthplace of Lord Ram",
  Sundarbans: "Where Tigers Roam the Mangroves",
  Puri: "Lord Jagannath's Coastal Abode",
  Gokarna: "Hidden Beach Paradise of Karnataka",
  Shantiniketan: "Tagore's Abode of Peace",
  Mandarmani: "Bengal's Longest Beach Stretch",
  Ujjain: "City of Mahakaleshwar Jyotirlinga",
  Konark: "The Sun Temple Marvel",
  Majuli: "World's Largest River Island",
  Yuksom: "Gateway to Kanchenjunga",
  "Khonoma (Nagaland)": "Asia's First Green Village",
  "Ziro Valley (Arunachal Pradesh)": "Land of the Apatani Tribe",
  "Tirthan Valley": "Himalayan Trout Paradise",
  Chopta: "Mini Switzerland of Uttarakhand",
  Daringbadi: "Kashmir of Odisha",
  "Tawang (Arunachal Pradesh)": "Monastery in the Clouds",
  "Spiti Valley (Himachal Pradesh)": "The Middle Land of Cold Desert",
  "McLeod Ganj": "Little Lhasa of India",
  "Bir Billing": "Paragliding Capital of India",
  Chakrata: "Offbeat Himalayan Retreat",
  Pelling: "Gateway to Kanchenjunga Views",
  "Andaman Islands": "Tropical Paradise of India",
  "Leh-Ladakh": "Land of High Passes",
  "Tso Moriri": "The Hidden Lake of Ladakh",
  Kinnaur: "Valley of Gods and Apples",
  "Araku Valley": "Coffee Paradise of Andhra",
  Valparai: "Tea Estates in the Clouds",
};

// Tags for each destination
const tagsMap = {
  Varanasi: ["Spiritual", "Heritage", "Cultural", "Budget-Friendly"],
  Hampi: ["Heritage", "UNESCO", "Photography", "Budget-Friendly"],
  "Bodh Gaya": ["Spiritual", "Buddhist", "Heritage", "Budget-Friendly"],
  Ayodhya: ["Spiritual", "Heritage", "Pilgrimage", "Budget-Friendly"],
  Sundarbans: ["Wildlife", "Nature", "Adventure", "Eco-Tourism"],
  Puri: ["Beach", "Spiritual", "Heritage", "Budget-Friendly"],
  Gokarna: ["Beach", "Offbeat", "Budget-Friendly", "Backpacking"],
  Shantiniketan: ["Cultural", "Art", "Heritage", "Weekend Getaway"],
  Mandarmani: ["Beach", "Weekend Getaway", "Relaxation", "Budget-Friendly"],
  Ujjain: ["Spiritual", "Pilgrimage", "Heritage", "Budget-Friendly"],
  Konark: ["Heritage", "UNESCO", "Architecture", "Budget-Friendly"],
  Majuli: ["Cultural", "Offbeat", "Nature", "Island"],
  Yuksom: ["Trekking", "Nature", "Buddhist", "Offbeat"],
  "Khonoma (Nagaland)": ["Offbeat", "Cultural", "Eco-Tourism", "Tribal"],
  "Ziro Valley (Arunachal Pradesh)": [
    "Tribal",
    "Nature",
    "Music Festival",
    "Offbeat",
  ],
  "Tirthan Valley": ["Nature", "Adventure", "Fishing", "Offbeat"],
  Chopta: ["Trekking", "Nature", "Spiritual", "Adventure"],
  Daringbadi: ["Hill Station", "Offbeat", "Nature", "Budget-Friendly"],
  "Tawang (Arunachal Pradesh)": [
    "Buddhist",
    "Mountain",
    "Adventure",
    "Monastery",
  ],
  "Spiti Valley (Himachal Pradesh)": [
    "Adventure",
    "Buddhist",
    "Mountain",
    "Stargazing",
  ],
  "McLeod Ganj": ["Buddhist", "Tibetan", "Trekking", "Cafe Culture"],
  "Bir Billing": ["Paragliding", "Adventure", "Tibetan", "Cafe Culture"],
  Chakrata: ["Offbeat", "Trekking", "Nature", "Waterfalls"],
  Pelling: ["Mountain", "Buddhist", "Scenic", "Nature"],
  "Andaman Islands": ["Beach", "Diving", "Island", "Water Sports"],
  "Leh-Ladakh": ["Adventure", "Mountain", "Buddhist", "Photography"],
  "Tso Moriri": ["Lake", "Offbeat", "Wildlife", "Remote"],
  Kinnaur: ["Scenic", "Apple Orchards", "Mountain", "Road Trip"],
  "Araku Valley": ["Coffee", "Train Journey", "Tribal", "Nature"],
  Valparai: ["Tea Estates", "Wildlife", "Waterfalls", "Nature"],
};

// Helper function to create slug
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "") // Remove parentheses content
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Helper function to extract state
function extractState(dest) {
  if (dest.state) return dest.state.trim().replace(/^\s+/, "");
  if (dest["state/ut"]) return dest["state/ut"].trim().replace(/^\s+/, "");
  const match = dest.destination.match(/\(([^)]+)\)/);
  if (match) return match[1];
  // Default states based on destination
  const stateDefaults = {
    Varanasi: "Uttar Pradesh",
    Hampi: "Karnataka",
  };
  return stateDefaults[dest.destination] || "India";
}

// Helper function to extract clean name
function extractName(destination) {
  return destination.replace(/\s*\([^)]*\)/g, "").trim();
}

// Helper function to extract attractions from groupOf6 breakdown
function extractAttractions(groupOf6) {
  if (!groupOf6 || !groupOf6.breakdown) return [];
  const attractions = [];
  let foundKeyAttractions = false;

  for (const item of groupOf6.breakdown) {
    if (item.category && item.category.includes("Key Attractions")) {
      foundKeyAttractions = true;
      continue;
    }
    if (foundKeyAttractions && item.category && item.category.startsWith("-")) {
      // Extract the attraction name and description
      const cleaned = item.category
        .replace(/^-\s*\*?\*?/, "")
        .replace(/\*?\*?$/, "")
        .trim();
      attractions.push(cleaned);
    }
  }
  return attractions;
}

// Helper function to parse budget
function parseBudget(total) {
  if (!total) return { min: 10000, max: 20000 };

  if (typeof total === "object" && total.low && total.typical) {
    const low = parseInt(String(total.low).replace(/[^0-9]/g, "")) || 10000;
    const typical =
      parseInt(String(total.typical).replace(/[^0-9]/g, "")) || 20000;
    return { min: low, max: typical };
  }

  return { min: 10000, max: 20000 };
}

// Helper function to parse group costs total
function parseGroupTotal(total) {
  if (!total) return { min: 8000, max: 15000 };

  const match = total.match(/₹?([\d,]+)\s*[–-]\s*₹?([\d,]+)/);
  if (match) {
    return {
      min: parseInt(match[1].replace(/,/g, "")),
      max: parseInt(match[2].replace(/,/g, "")),
    };
  }
  return { min: 8000, max: 15000 };
}

// Helper function to extract best season from booking tips
function extractBestSeason(tips) {
  for (const tip of tips || []) {
    const match = tip.match(/Best season[:\s]*([A-Za-z–-]+)/i);
    if (match) return match[1].trim();
  }
  return "Oct–Mar";
}

// Convert a destination to TypeScript format
function convertDestination(dest) {
  const name = extractName(dest.destination);
  const slug = createSlug(dest.destination);
  const state = extractState(dest);
  const images = imageMap[dest.destination] ||
    imageMap[name] || [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    ];

  const tagline =
    taglineMap[dest.destination] || taglineMap[name] || `Discover ${name}`;
  const tags = tagsMap[dest.destination] ||
    tagsMap[name] || ["Nature", "Adventure", "Offbeat"];

  const landscape = (dest.landscape || "").trim();
  const permits = (dest.permits || "Not required for Indian citizens").trim();
  const permitRequired =
    permits.toLowerCase().includes("required") &&
    !permits.toLowerCase().includes("not required");

  const budget = parseBudget(dest.budgetBreakdown?.total);
  const groupTotal = parseGroupTotal(dest.groupOf6?.total);
  const bestSeason = extractBestSeason(dest.bookingTips);
  const attractions = extractAttractions(dest.groupOf6);

  // Convert itinerary
  const itinerary = (dest.itinerary || []).map((day) => {
    const activities = day.plan.split(/\s*\+\s*/).map((a) => a.trim());
    return {
      day: day.day,
      title: `Day ${day.day}`,
      activities,
    };
  });

  // Convert costs
  const costs = (dest.budgetBreakdown?.perPerson || []).map((c) => ({
    item: c.item,
    amount: c.typical || c.low || 0,
  }));

  // Build group costs
  const groupCosts = {
    costs: (dest.groupOf6?.breakdown || [])
      .filter(
        (b) =>
          b.perPerson &&
          !b.category.includes("Key Attractions") &&
          !b.category.startsWith("-"),
      )
      .map((b) => {
        const match = b.perPerson.match(/([\d,]+)/);
        return {
          item: b.category,
          amount: match ? parseInt(match[0].replace(/,/g, "")) : 0,
        };
      }),
    perPerson: groupTotal,
  };

  return {
    id: slug,
    slug,
    name,
    state,
    tagline,
    shortDescription: landscape || `Experience the beauty of ${name}`,
    description: `Discover ${name}, ${state}. ${landscape}. ${attractions.slice(0, 2).join(". ")}.`,
    coordinates:
      `${dest.coordinates?.latitude || ""}${dest.coordinates?.longitude ? ", " + dest.coordinates.longitude : ""}`
        .replace(/\s+/g, " ")
        .trim(),
    landscape,
    permits,
    permitRequired,
    duration: "7 Days",
    totalBudget: budget,
    groupCosts,
    bestSeason,
    seasonNote: `Best time to visit ${name}`,
    images,
    tags,
    highlights: attractions.slice(0, 4),
    itinerary,
    costs,
    tips: dest.bookingTips || [],
    attractions,
  };
}

// Generate the TypeScript file content
function generateTypeScript(destinations) {
  const converted = destinations.map(convertDestination);

  let output = `import type { Destination } from "./types";

export const destinations: Destination[] = [\n`;

  for (const dest of converted) {
    output += `  ${JSON.stringify(dest, null, 2)
      .split("\n")
      .map((line, i) => (i === 0 ? line : "  " + line))
      .join("\n")},\n`;
  }

  output += `];\n`;

  return output;
}

// Generate and write the file
const tsContent = generateTypeScript(allDestinations);
const outputPath = path.join(__dirname, "../src/data/destinations.ts");
fs.writeFileSync(outputPath, tsContent);

console.log(
  `✅ Generated destinations.ts with ${allDestinations.length} destinations`,
);
console.log(`📁 Output: ${outputPath}`);
