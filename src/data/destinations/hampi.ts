import type { Destination } from "../types";

export const hampi: Destination = {
  slug: "hampi",
  id: "hampi",
  name: "Hampi",
  images: [
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=1200&q=80",
    "https://images.unsplash.com/photo-1600100397608-71b5b3c39d52?w=1200&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=80",
  ],
  duration: "5 Days / 4 Nights",
  destination: "Hampi",
  state: "Karnataka",
  tagline: "Where Boulders Tell Ancient Stories",
  info: {
    en: "A UNESCO World Heritage site, Hampi was the capital of the Vijayanagara Empire in the 14th century. It is a surreal landscape of giant boulders, palm groves, and magnificent ruins of temples, palaces, and market streets.",
    hi: "यूनेस्को विश्व धरोहर स्थल, हम्पी 14वीं शताब्दी में विजयनगर साम्राज्य की राजधानी थी। यह विशाल शिलाखंडों, ताड़ के पेड़ों और मंदिरों, महलों और बाजारों के शानदार खंडहरों का एक असली परिदृश्य है। विरुपक्ष मंदिर और विट्ठल मंदिर वास्तुकला के चमत्कार हैं।",
    bn: "ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সাইট হাম্পি ১৪শ শতাব্দীতে বিজয়নগর সাম্রাজ্যের রাজধানী ছিল। এটি বিশাল সব পাথর, পাম গাছ এবং মন্দির, রাজপ্রাসাদ ও বাজারের ধ্বংসাবশেষের এক অদ্ভুত সুন্দর দৃশ্যপট। বিরুপাক্ষ মন্দির এবং বিঠল মন্দিরের স্থাপত্যশৈলী বিস্ময়কর।",
  },
  shortDescription:
    "UNESCO World Heritage ruins amidst surreal boulder-strewn landscape",
  description:
    "Hampi, the ruined capital of the Vijayanagara Empire, is a photographer's paradise. Massive boulders, ancient temples, and intricate carvings create an otherworldly landscape. Explore on a rented bicycle, climb Matanga Hill for sunrise, and feel the grandeur of a once-magnificent kingdom.",
  landscape: "Boulder-strewn rocky hills, UNESCO ruins, temples, river islands",
  coordinates: {
    latitude: "15.3350°N",
    longitude: "76.4600°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "October to February",
  seasonNote:
    "Cool and pleasant weather. Summers (March–May) extremely hot. Monsoons have occasional access issues.",
  keyAttractions: [
    "Virupaksha Temple — Active temple, Hampi's spiritual heart since 7th century",
    "Vittala Temple Complex — Famous stone chariot and musical pillars",
    "Matanga Hill — Best sunrise/sunset viewpoint over entire Hampi",
    "Elephant Stables — Royal elephant housing with Indo-Islamic architecture",
    "Hippie Island (Virupapur Gaddi) — Laid-back area across the river",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Hospet (or fly to Hubli + bus). Arrive evening, rest.",
    },
    {
      day: 2,
      title: "Arrival & Sunset",
      plan: "Settle in Hampi Bazaar + explore Virupaksha Temple + sunset at Hemakuta Hill",
    },
    {
      day: 3,
      title: "Ruins Exploration",
      plan: "Full day: Vittala Temple, stone chariot, royal enclosure, elephant stables — bike/scooter",
    },
    {
      day: 4,
      title: "Hills & River",
      plan: "Matanga Hill sunrise + Achyutaraya Temple + coracle ride across river",
    },
    {
      day: 5,
      title: "Hippie Island",
      plan: "Cross to Virupapur Gaddi + paddy field walks + bouldering + riverside cafés",
    },
    {
      day: 6,
      title: "Slow Day",
      plan: "Anegundi village heritage + Durga Temple + sunset photography",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Morning temple visit + Train: Hospet → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Hospet round trip)",
        low: 1200,
        typical: 2500,
        notes: "Sleeper to 3A range",
      },
      {
        item: "Accommodation (6 nights)",
        low: 3000,
        typical: 6000,
        notes: "₹500–1,200/night",
      },
      {
        item: "Food (7 days, local)",
        low: 1400,
        typical: 2500,
        notes: "₹200–400/day",
      },
      {
        item: "Bike/scooter rental (3–4 days)",
        low: 800,
        typical: 1400,
        notes: "₹300–500/day",
      },
      {
        item: "Local transport & entry fees",
        low: 400,
        typical: 1000,
        notes: "Autos, guides, donations",
      },
      {
        item: "Misc (souvenirs, tips)",
        low: 300,
        typical: 800,
        notes: "",
      },
    ],
    total: {
      low: 7100,
      typical: 14200,
      typicalRange: "₹10k–14k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "1,200–2,500",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "2,000–4,000",
      },
      {
        category: "Food (local cafés)",
        perPerson: "1,500–2,500",
      },
      {
        category: "Bike rental (shared cost)",
        perPerson: "400–700",
      },
      {
        category: "Entry fees & transport",
        perPerson: "300–700",
      },
      {
        category: "Misc",
        perPerson: "300–600",
      },
    ],
    total: "₹5,700–10,500",
  },
  bookingTips: [
    "Book train early; alternative: Fly to Hubli/Bengaluru + bus to Hampi",
    "Rent bicycle (₹100/day) or scooter (₹400/day) — best way to explore",
    "Stay in Hampi Bazaar for ruins access or Hippie Island for vibe",
    "Carry water and sunscreen — ruins area has little shade",
    "Visit Mango Tree restaurant for riverside meals",
  ],
  tags: ["Karnataka", "Heritage", "UNESCO"],
  permitRequired: false,
  totalBudget: { min: 5500, max: 12000 },
  highlights: [
    "Virupaksha Temple",
    "Vittala Temple Complex",
    "Matanga Hill",
    "Elephant Stables",
    "Hippie Island",
  ],
  attractions: [
    "Virupaksha Temple",
    "Vittala Temple",
    "Matanga Hill",
    "Elephant Stables",
    "Hippie Island",
  ],
  tips: [
    "Rent a bicycle or scooter",
    "Climb Matanga Hill for sunrise",
    "Cross to Hippie Island",
    "Best time October-February",
  ],
  costs: [
    { item: "Train (round trip)", amount: 1800 },
    { item: "Accommodation (6 nights)", amount: 4800 },
    { item: "Food (7 days)", amount: 2100 },
    { item: "Transport & activities", amount: 1500 },
    { item: "Miscellaneous", amount: 800 },
  ],
};
