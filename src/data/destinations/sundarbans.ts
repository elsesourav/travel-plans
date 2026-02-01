import type { Destination } from "../types";

export const sundarbans: Destination = {
  slug: "sundarbans",
  id: "sundarbans",
  name: "Sundarbans",
  images: [
    "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80",
    "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1200&q=80",
    "https://images.unsplash.com/photo-1534759926787-89fa60520495?w=1200&q=80",
    "https://images.unsplash.com/photo-1544735716-ea9ef790f501?w=1200&q=80",
    "https://images.unsplash.com/photo-1585063560546-28db14a0a7d5?w=1200&q=80",
    "https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=1200&q=80",
  ],
  duration: "5 Days / 4 Nights",
  destination: "Sundarbans",
  state: "West Bengal",
  tagline: "Where Tigers Roam the Mangroves",
  info: {
    en: "The largest mangrove forest in the world and a UNESCO World Heritage site, famous for the Royal Bengal Tiger. It is a unique ecosystem where tigers are known to swim in saline water.",
    hi: "दुनिया का सबसे बड़ा मैंग्रोव जंगल और यूनेस्को विश्व धरोहर स्थल, जो रॉयल बंगाल टाइगर के लिए प्रसिद्ध है। यह एक अनूठा पारिस्थितिकी तंत्र है जहां बाघ खारे पानी में तैरने के लिए जाने जाते हैं।",
    bn: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন এবং ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সাইট, যা রয়্যাল বেঙ্গল টাইগারের জন্য বিখ্যাত। এটি একটি অনন্য ইকোসিস্টেম যেখানে বাঘেরা নোনা জলে সাঁতার কাটার জন্য পরিচিত। এখানকার নদীপথের জটাজাল বন্যপ্রাণী প্রেমীদের জন্য রোমাঞ্চকর।",
  },
  shortDescription:
    "World's largest mangrove forest, home to the Royal Bengal Tiger",
  description:
    "The Sundarbans, a UNESCO World Heritage Site, is the world's largest tidal mangrove forest and the only mangrove habitat of tigers. Navigate through mysterious waterways, spot crocodiles and exotic birds, and experience life in fishing villages. The forest's ethereal beauty and wilderness create an unforgettable adventure.",
  landscape: "Mangrove forest, river delta, Royal Bengal Tigers",
  coordinates: {
    latitude: "21.9497°N",
    longitude: "88.8965°E",
  },
  permits: "Forest entry permit required (usually included in tour packages)",
  bestSeason: "October to March",
  seasonNote:
    "Dry season with best wildlife sightings. Avoid monsoon (June–September) due to heavy rains.",
  keyAttractions: [
    "Sajnekhali Tiger Reserve — Watchtower, bird sanctuary, crocodile enclosure",
    "Sudhanyakhali Watchtower — Prime tiger and deer spotting area",
    "Dobanki Watchtower — Famous canopy walk through mangroves",
    "Netidhopani — 400-year-old temple ruins in the forest",
    "Pakhiralay — Bird island with migratory species",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Kolkata → Godkhali (3 hours) → Boat to eco-lodge. Evening nature walk.",
    },
    {
      day: 2,
      title: "Tiger Reserve",
      plan: "Sajnekhali Tiger Reserve + watchtower + bird sanctuary + crocodile pond",
    },
    {
      day: 3,
      title: "Deep Forest Safari",
      plan: "Sudhanyakhali watchtower + deep forest boat safari through narrow creeks",
    },
    {
      day: 4,
      title: "Canopy Walk",
      plan: "Dobanki watchtower (canopy walk) + Netidhopani temple ruins + wildlife spotting",
    },
    {
      day: 5,
      title: "Village Life",
      plan: "Local fishing village visit + honey collector community + handicrafts + fish market",
    },
    {
      day: 6,
      title: "Bird Watching",
      plan: "Pakhiralay (bird island) + mangrove exploration + sunset cruise",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Morning boat ride + return boat to Godkhali → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Transport (Kolkata ↔ Godkhali)",
        low: 400,
        typical: 800,
        notes: "Bus/train + local transport",
      },
      {
        item: "Boat + forest permits",
        low: 1500,
        typical: 3000,
        notes: "Usually in package",
      },
      {
        item: "Accommodation (6 nights, eco-lodge)",
        low: 3000,
        typical: 5400,
        notes: "₹500–900/night",
      },
      {
        item: "Food (7 days)",
        low: 1400,
        typical: 2500,
        notes: "₹200–350/day, fresh fish",
      },
      {
        item: "Safari & activities",
        low: 800,
        typical: 1500,
        notes: "Watchtower fees, guides",
      },
      {
        item: "Misc (tips, shopping)",
        low: 300,
        typical: 600,
        notes: "",
      },
    ],
    total: {
      low: 7400,
      typical: 13800,
      typicalRange: "₹7k–12k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Transport (shared vehicle)",
        perPerson: "250–500",
      },
      {
        category: "Shared boat (charter split)",
        perPerson: "1,000–2,000",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "2,000–3,600",
      },
      {
        category: "Food",
        perPerson: "1,200–2,000",
      },
      {
        category: "Safari & permits",
        perPerson: "500–1,000",
      },
      {
        category: "Misc",
        perPerson: "200–400",
      },
    ],
    total: "₹5,150–9,500",
  },
  bookingTips: [
    "Book tour packages from Kolkata for hassle-free experience",
    "2N/3D packages start ~₹4,500; 3N/4D from ₹6,500 per person",
    "Carry binoculars for wildlife spotting — essential",
    "Pack insect repellent, sunscreen, and light clothes",
    "Tiger sightings are rare but deer, crocodiles, birds are common",
  ],
  tags: ["West Bengal", "Wildlife", "Mangroves"],
  permitRequired: true,
  totalBudget: { min: 5000, max: 12000 },
  highlights: [
    "Royal Bengal Tiger",
    "Mangrove Forest",
    "Sajnekhali Watch Tower",
    "Sudhanyakhali",
    "Boat Safari",
  ],
  attractions: [
    "Tiger Reserve",
    "Mangrove Forests",
    "Sajnekhali Bird Sanctuary",
    "Crocodile Park",
    "Bonobibi Temple",
  ],
  tips: [
    "Book forest permit in advance",
    "Best time Nov-Feb",
    "Join group boat safari",
    "Carry binoculars",
  ],
  costs: [
    { item: "Transport to Sundarbans", amount: 800 },
    { item: "Boat safari package", amount: 6000 },
    { item: "Accommodation (3 nights)", amount: 3000 },
    { item: "Food (4 days)", amount: 1200 },
    { item: "Permits & entry", amount: 500 },
  ],
};
