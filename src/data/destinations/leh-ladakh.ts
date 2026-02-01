import type { Destination } from "../types";

export const leh_ladakh: Destination = {
  slug: "leh-ladakh",
  id: "leh-ladakh",
  name: "Leh Ladakh",
  images: [
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&q=80",
    "https://images.unsplash.com/photo-1572697390930-7339a01a4f6d?w=1200&q=80",
    "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=1200&q=80",
    "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=1200&q=80",
  ],
  duration: "5 Days / 4 Nights",
  destination: "Leh-Ladakh",
  state: "Ladakh",
  tagline: "Land of High Passes",
  info: {
    en: "India's adventure paradise with high-altitude lakes (Pangong, Tso Moriri), Buddhist monasteries (Thiksey, Hemis), and the world's highest motorable passes. Perfect for biking, stargazing, and spiritual exploration.",
    hi: "भारत का रोमांच स्वर्ग — उच्च ऊँचाई की झीलें (पैंगोंग, त्सो मोरीरी), बौद्ध मठ (थिकसे, हेमिस) और दुनिया के सबसे ऊँचे मोटरेबल दर्रे। बाइकिंग, तारों को देखना और आध्यात्मिक अन्वेषण के लिए उत्तम।",
    bn: "ভারতের অ্যাডভেঞ্চার স্বর্গ — উচ্চ উচ্চতার হ্রদ (প্যাংগং, সো মোরিরি), বৌদ্ধ মঠ (থিকসে, হেমিস) এবং বিশ্বের সর্বোচ্চ মোটরেবল পাস। বাইকিং, তারা দেখা এবং আধ্যাত্মিক অন্বেষণের জন্য আদর্শ।",
  },
  shortDescription:
    "High-altitude desert with ancient monasteries, pristine lakes, and dramatic landscapes",
  description:
    "Leh-Ladakh is India's ultimate adventure destination — a high-altitude desert where ancient Buddhist monasteries perch on cliffs, turquoise lakes shimmer at impossible altitudes, and some of the world's highest motorable passes test your limits. From Pangong's changing colors to Nubra's sand dunes, this is landscape on an epic scale.",
  landscape: "High-altitude Himalayan desert, lakes, passes, monasteries",
  coordinates: {
    latitude: "34.1526°N",
    longitude: "77.5771°E",
  },
  permits: "Required for Nubra, Pangong, Tso Moriri, and border areas",
  bestSeason: "May to September",
  seasonNote:
    "Roads open only in summer. June–August is peak season. Acclimatization is essential — spend 2 days in Leh first.",
  keyAttractions: [
    "Pangong Lake — Iconic high-altitude lake with changing colors",
    "Khardung La Pass — One of the world's highest motorable passes (5,359m)",
    "Nubra Valley — Sand dunes, Bactrian camels, Diskit Monastery",
    "Thiksey Monastery — 'Mini Potala Palace' with stunning architecture",
    "Magnetic Hill — Optical illusion where vehicles appear to defy gravity",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Flight: Kolkata → Delhi → Leh. Rest and acclimatize. Evening Leh market walk.",
    },
    {
      day: 2,
      title: "Acclimatization",
      plan: "Leh Palace + Shanti Stupa + local monastery visits + hydrate & rest",
    },
    {
      day: 3,
      title: "Nubra Valley",
      plan: "Leh → Nubra Valley via Khardung La Pass. Diskit Monastery + sand dunes.",
    },
    {
      day: 4,
      title: "Nubra Exploration",
      plan: "Bactrian camel ride + Hunder village + Sumur monastery + valley exploration",
    },
    {
      day: 5,
      title: "Pangong Lake",
      plan: "Nubra → Pangong Lake via Shyok route. Evening at the stunning lake.",
    },
    {
      day: 6,
      title: "Return to Leh",
      plan: "Pangong sunrise + drive back to Leh via Chang La. Hemis Monastery visit.",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Thiksey Monastery sunrise + Flight: Leh → Delhi → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Flights (Kolkata ↔ Leh via Delhi)",
        low: 12000,
        typical: 22000,
        notes: "Book early for deals",
      },
      {
        item: "Shared taxi/jeep transfers",
        low: 8000,
        typical: 15000,
        notes: "Pangong, Nubra circuit",
      },
      {
        item: "Accommodation (6 nights)",
        low: 6000,
        typical: 12000,
        notes: "Guesthouses, camps",
      },
      {
        item: "Food (7 days)",
        low: 2000,
        typical: 3500,
        notes: "₹280–500/day",
      },
      {
        item: "Permits",
        low: 300,
        typical: 600,
        notes: "Handled by taxi driver/tour",
      },
      {
        item: "Local sightseeing",
        low: 1000,
        typical: 3000,
        notes: "Entry fees, camel ride",
      },
      {
        item: "Misc (tips, shopping)",
        low: 500,
        typical: 1000,
        notes: "",
      },
    ],
    total: {
      low: 29800,
      typical: 57100,
      typicalRange: "₹35k–60k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Flight tickets",
        perPerson: "12,000–22,000",
      },
      {
        category: "Shared taxi/jeep circuit",
        perPerson: "5,000–9,000",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "3,000–6,000",
      },
      {
        category: "Food",
        perPerson: "1,800–3,000",
      },
      {
        category: "Permits",
        perPerson: "250–500",
      },
      {
        category: "Local sightseeing",
        perPerson: "600–1,800",
      },
      {
        category: "Misc",
        perPerson: "400–800",
      },
    ],
    total: "₹23,050–43,100",
  },
  bookingTips: [
    "Acclimatize for 2 days in Leh — altitude sickness is serious",
    "Carry Diamox (acetazolamide) for altitude — consult doctor before trip",
    "Book shared Innova/Scorpio for circuit — cheaper than private taxi",
    "Pangong Lake camps fill fast — book in advance during peak season",
    "Carry warm layers — temperatures drop dramatically at night",
  ],
  tags: ["Ladakh", "High Altitude", "Adventure"],
  permitRequired: true,
  totalBudget: { min: 18000, max: 35000 },
  highlights: [
    "Pangong Lake",
    "Nubra Valley",
    "Khardung La",
    "Magnetic Hill",
    "Thiksey Monastery",
  ],
  attractions: [
    "Pangong Tso",
    "Nubra Valley",
    "Khardung La Pass",
    "Hemis Monastery",
    "Shanti Stupa",
  ],
  tips: [
    "Acclimatize 2 days in Leh",
    "Best Jun-Sep",
    "Get Inner Line Permit",
    "Carry altitude medicine",
  ],
  costs: [
    { item: "Flights (round trip)", amount: 10000 },
    { item: "Accommodation (8 nights)", amount: 8000 },
    { item: "Food (9 days)", amount: 4500 },
    { item: "Vehicle rentals", amount: 8000 },
    { item: "Permits & activities", amount: 2500 },
    { item: "Miscellaneous", amount: 1500 },
  ],
};
