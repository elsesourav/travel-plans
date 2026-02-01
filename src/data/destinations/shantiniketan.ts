import type { Destination } from "../types";

export const shantiniketan: Destination = {
  slug: "shantiniketan",
  id: "shantiniketan",
  name: "Shantiniketan",
  images: [
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?w=1200&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80",
  ],
  duration: "5 Days / 4 Nights",
  destination: "Shantiniketan",
  state: "West Bengal",
  tagline: "Tagore's Abode of Peace",
  info: {
    en: "Established by Nobel laureate Rabindranath Tagore, this university town is a UNESCO World Heritage site. It is famous for its open-air classrooms, the Poush Mela festival, and a unique culture that celebrates art and nature.",
    hi: "नोबेल पुरस्कार विजेता रवींद्रनाथ टैगोर द्वारा स्थापित, यह विश्वविद्यालय शहर एक यूनेस्को विश्व धरोहर स्थल है। यह अपनी खुली कक्षाओं, पौष मेला उत्सव और कला, संगीत और प्रकृति का जश्न मनाने वाली एक अनूठी संस्कृति के लिए प्रसिद्ध है।",
    bn: "নোবেল বিজয়ী রবীন্দ্রনাথ ঠাকুর প্রতিষ্ঠিত এই বিশ্ববিদ্যালয় শহরটি একটি ইউনেস্কো হেরিটেজ সাইট। এটি তার খোলা আকাশের নিচের শ্রেণীকক্ষ, পৌষ মেলা এবং এমন এক অনন্য সংস্কৃতির জন্য বিখ্যাত যা শিল্প, সঙ্গীত এবং প্রকৃতিকে উদযাপন করে।",
  },
  shortDescription:
    "Cultural haven where art, nature, and Tagore's legacy come alive",
  description:
    "Shantiniketan, founded by Rabindranath Tagore, is Bengal's cultural heart. This university town celebrates art, music, and open-air education. Cycle through rural landscapes, experience Baul music under sal trees, shop for tribal crafts at Sonajhuri haat, and immerse yourself in the creative spirit that Tagore envisioned.",
  landscape: "Cultural town, Tagore's university, rural Bengal",
  coordinates: {
    latitude: "23.6814°N",
    longitude: "87.6855°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "October to March",
  seasonNote:
    "Pleasant weather. Poush Mela (December) and Basanta Utsav (March/Holi) are must-visit festivals.",
  keyAttractions: [
    "Visva-Bharati University — Tagore's open-air school, unique architecture",
    "Uttarayan — Tagore's residence, now museum with personal artifacts",
    "Kala Bhavana — Art college with stunning murals and sculptures",
    "Sonajhuri — Saturday handicraft haat (market) under sal trees",
    "Amar Kutir — Handloom and handicraft cooperative",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Bolpur (2.5 hours). Auto to guesthouse. Evening walk.",
    },
    {
      day: 2,
      title: "Tagore Heritage",
      plan: "Uttarayan (Tagore museum) + Kala Bhavana art gallery + campus walk",
    },
    {
      day: 3,
      title: "Crafts & Forest",
      plan: "Amar Kutir handicrafts + Sonajhuri forest walk + Saturday haat (if Saturday)",
    },
    {
      day: 4,
      title: "Day Trip",
      plan: "Kenduli mela site / Bakreswar hot springs + pottery villages",
    },
    {
      day: 5,
      title: "Village Cycling",
      plan: "Cycle through villages + Khoai red soil terrain + Ballavpur Wildlife Sanctuary",
    },
    {
      day: 6,
      title: "Culture & Music",
      plan: "Kopai river bank + evening Baul music performance + local crafts shopping",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Morning university grounds + Train: Bolpur → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Bolpur round trip)",
        low: 200,
        typical: 500,
        notes: "Short 2.5 hour journey",
      },
      {
        item: "Accommodation (6 nights)",
        low: 2400,
        typical: 4800,
        notes: "₹400–800/night guesthouses",
      },
      {
        item: "Food (7 days)",
        low: 1200,
        typical: 2100,
        notes: "₹170–300/day Bengali food",
      },
      {
        item: "Cycle rental",
        low: 300,
        typical: 600,
        notes: "₹50–100/day",
      },
      {
        item: "Entry fees & guides",
        low: 200,
        typical: 500,
        notes: "Visva-Bharati, museums",
      },
      {
        item: "Misc (handicrafts, tips)",
        low: 300,
        typical: 700,
        notes: "",
      },
    ],
    total: {
      low: 4600,
      typical: 9200,
      typicalRange: "₹6k–10k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "200–500",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "1,800–3,200",
      },
      {
        category: "Food",
        perPerson: "1,000–1,800",
      },
      {
        category: "Cycle rental",
        perPerson: "250–500",
      },
      {
        category: "Entry fees",
        perPerson: "150–400",
      },
      {
        category: "Misc",
        perPerson: "200–500",
      },
    ],
    total: "₹3,600–6,900",
  },
  bookingTips: [
    "Visit during Poush Mela (December) or Basanta Utsav (March) for festivals",
    "Book guesthouses near university campus for easy access",
    "Bicycle is the best way to explore — rent from town center",
    "Saturday Sonajhuri haat is must-visit for authentic tribal crafts",
    "Try shorshe ilish (hilsa in mustard) and local Bengali sweets",
  ],
  tags: ["West Bengal", "Culture", "Art"],
  permitRequired: false,
  totalBudget: { min: 3000, max: 7000 },
  highlights: [
    "Visva Bharati University",
    "Kala Bhavana",
    "Sonajhuri Forest",
    "Amar Kutir",
    "Poush Mela",
  ],
  attractions: [
    "Visva Bharati",
    "Rabindra Museum",
    "Kala Bhavana",
    "Sonajhuri Haat",
    "Amar Kutir",
  ],
  tips: [
    "Visit during Poush Mela",
    "Explore by cycle rickshaw",
    "Buy Batik and leather crafts",
    "Visit on weekends for haat",
  ],
  costs: [
    { item: "Train (round trip)", amount: 400 },
    { item: "Accommodation (2 nights)", amount: 2000 },
    { item: "Food (3 days)", amount: 900 },
    { item: "Transport & activities", amount: 800 },
    { item: "Miscellaneous", amount: 400 },
  ],
};
