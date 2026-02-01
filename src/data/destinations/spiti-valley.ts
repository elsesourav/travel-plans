import type { Destination } from "../types";

export const spiti_valley: Destination = {
  slug: "spiti-valley",
  id: "spiti-valley",
  name: "Spiti Valley",
  images: [
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1545378889-6d7eb2cf1020?w=1200&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
  ],
  duration: "2 Days / 1 Night",
  destination: "Spiti Valley",
  state: "Himachal Pradesh",
  tagline: "The Middle Land Between Worlds",
  info: {
    en: "A barren, high-altitude cold desert in Himachal Pradesh, known for remote monasteries (Key, Tabo, Dhankar), the world's highest ATM, and fossil-rich mountains. Ideal for adventure seekers exploring lunar-like landscapes.",
    hi: "हिमाचल प्रदेश का उजाड़, उच्च ऊँचाई वाला ठंडा रेगिस्तान — की, ताबो, धनकर जैसे दूरस्थ मठ, दुनिया का सबसे ऊँचा ATM और जीवाश्म युक्त पहाड़। चंद्रमा जैसे भूदृश्यों के रोमांचकारियों के लिए आदर्श।",
    bn: "হিমাচল প্রদেশের বিরান, উচ্চ উচ্চতার ঠান্ডা মরুভূমি — কী, তাবো, ধানকার মঠ, বিশ্বের উচ্চতম ATM এবং জীবাশ্ম-সমৃদ্ধ পাহাড়। চাঁদের মতো ভূদৃশ্য অন্বেষণকারী দুঃসাহসিকদের জন্য আদর্শ।",
  },
  shortDescription:
    "High-altitude cold desert with ancient monasteries and moonscape terrain",
  description:
    "Spiti Valley, meaning 'The Middle Land,' is a cold desert mountain valley at 4,270m that feels like another planet. Ancient monasteries perch on cliffs, fossil-rich villages dot the moonscape, and the highest post office in the world awaits your letter. This is raw, rugged Himalayan adventure for those seeking the road less traveled.",
  landscape: "High-altitude cold desert, rugged mountains, ancient monasteries",
  coordinates: {
    latitude: "32.2460°N",
    longitude: "78.0349°E",
  },
  permits:
    "Not required for most areas (Inner Line Permit for certain border areas)",
  bestSeason: "May to October",
  seasonNote:
    "Roads open only in summer. Rohtang and Kunzum passes close in winter. June–September has clear skies.",
  keyAttractions: [
    "Key Monastery — Iconic 1,000-year-old monastery on hilltop",
    "Chandratal Lake — Crescent-shaped high-altitude lake (4,300m)",
    "Komic & Langza — Highest villages with Buddha statue and fossils",
    "Hikkim — World's highest post office",
    "Pin Valley — Snow leopard habitat, Pin Valley National Park",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Flight: Kolkata → Delhi/Chandigarh. Overnight rest or start road journey.",
    },
    {
      day: 2,
      title: "Shimla Route",
      plan: "Road: Chandigarh → Shimla → Narkanda (6-7 hours). Acclimatization.",
    },
    {
      day: 3,
      title: "Kinnaur Entry",
      plan: "Road: Narkanda → Sangla → Kalpa (7 hours). Kinnaur Kailash views.",
    },
    {
      day: 4,
      title: "Into Spiti",
      plan: "Road: Kalpa → Nako → Tabo (7 hours). Tabo Monastery (1,000+ years old).",
    },
    {
      day: 5,
      title: "Kaza Exploration",
      plan: "Road: Tabo → Dhankar → Kaza. Dhankar Monastery + Key Monastery.",
    },
    {
      day: 6,
      title: "Highest Villages",
      plan: "Komic (highest village) + Langza (Buddha statue) + Hikkim (highest post office) + Pin Valley",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Return via Manali (if Rohtang open) or reverse route to Chandigarh → Flight to Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Flight (Kolkata ↔ Delhi/Chandigarh round trip)",
        low: 5000,
        typical: 10000,
        notes: "Book early for deals",
      },
      {
        item: "Road transfers (to/within Spiti)",
        low: 10000,
        typical: 18000,
        notes: "Shared cabs/local taxi",
      },
      {
        item: "Accommodation (6 nights)",
        low: 3600,
        typical: 7200,
        notes: "₹600–1,200/night homestays",
      },
      {
        item: "Food (7 days)",
        low: 2000,
        typical: 3500,
        notes: "₹280–500/day simple meals",
      },
      {
        item: "Local transport & sightseeing",
        low: 1000,
        typical: 3000,
        notes: "Shared jeeps, fuel",
      },
      {
        item: "Misc (monasteries, tips)",
        low: 500,
        typical: 1500,
        notes: "",
      },
    ],
    total: {
      low: 22100,
      typical: 43200,
      typicalRange: "₹25k–45k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Flight tickets",
        perPerson: "5,000–10,000",
      },
      {
        category: "Shared road vehicle (split)",
        perPerson: "6,000–10,000",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "2,400–4,800",
      },
      {
        category: "Food",
        perPerson: "1,800–3,000",
      },
      {
        category: "Local tours & sightseeing",
        perPerson: "600–1,800",
      },
      {
        category: "Misc",
        perPerson: "400–1,000",
      },
    ],
    total: "₹16,200–30,600",
  },
  bookingTips: [
    "Roads open only May–October — check pass status before travel",
    "Acclimatize properly — altitude sickness is real at 4,000m+",
    "Multi-day driving needs rest stops — don't rush the journey",
    "Homestays in villages offer authentic experience and support locals",
    "Carry Diamox for altitude sickness and plenty of warm layers",
  ],
  tags: ["Himachal Pradesh", "Cold Desert", "Buddhist"],
  permitRequired: true,
  totalBudget: { min: 15000, max: 28000 },
  highlights: [
    "Key Monastery",
    "Chandratal Lake",
    "Kunzum Pass",
    "Hikkim Post Office",
    "Kibber Village",
  ],
  attractions: [
    "Key Monastery",
    "Chandratal",
    "Dhankar Monastery",
    "Pin Valley",
    "Tabo Monastery",
  ],
  tips: [
    "Best Jun-Sep when roads open",
    "Carry altitude sickness medicine",
    "Book vehicles in advance",
    "Limited ATMs carry cash",
  ],
  costs: [
    { item: "Transport (round trip)", amount: 8000 },
    { item: "Accommodation (8 nights)", amount: 6400 },
    { item: "Food (9 days)", amount: 4500 },
    { item: "Permits & guide", amount: 3000 },
    { item: "Miscellaneous", amount: 1500 },
  ],
};
