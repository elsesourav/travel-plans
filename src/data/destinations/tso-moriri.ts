import type { Destination } from "../types";

export const tso_moriri: Destination = {
  slug: "tso-moriri",
  id: "tso-moriri",
  name: "Tso Moriri",
  images: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
    "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1200&q=80",
  ],
  duration: "6 Days / 5 Nights",
  destination: "Tso Moriri",
  state: "Ladakh",
  tagline: "The Untouched Jewel of Ladakh",
  info: {
    en: "A pristine high-altitude lake (4,500m) on the remote Changthang Plateau. Less touristy than Pangong, it offers sightings of Tibetan wild donkeys (Kiang) and Changpa nomads. Ideal for stargazing and photography.",
    hi: "दूरस्थ चांगथांग पठार पर एक प्राचीन उच्च ऊँचाई वाली झील (4,500m)। पैंगोंग से कम पर्यटक — तिब्बती जंगली गधे (कियांग) और चांगपा घुमंतू देखने को मिलते हैं। तारों को देखने और फोटोग्राफी के लिए आदर्श।",
    bn: "প্রত্যন্ত চাংথাং মালভূমিতে একটি প্রাচীন উচ্চ উচ্চতার হ্রদ (৪,৫০০ মি.)। প্যাংগং-এর চেয়ে কম পর্যটক — তিব্বতি বন্য গাধা (কিয়াং) এবং চাংপা যাযাবরদের দেখা যায়। তারা দেখা এবং ফটোগ্রাফির জন্য আদর্শ।",
  },
  shortDescription:
    "Pristine high-altitude lake far from the crowds of Pangong",
  description:
    "Tso Moriri, at 4,522m, is Ladakh's hidden gem — a pristine alpine lake surrounded by the Changthang plateau's stark beauty. Less crowded than Pangong, it offers authentic encounters with Changpa nomads, rare wildlife (including Tibetan wild ass), and a tranquility that commercial Ladakh has lost. For true adventurers seeking solitude.",
  landscape: "High-altitude alpine lake, remote Changthang plateau",
  coordinates: {
    latitude: "32.9167°N",
    longitude: "78.3167°E",
  },
  permits: "Inner Line Permit (ILP) required",
  bestSeason: "May to September",
  seasonNote:
    "Roads open only in summer. Very remote — prepare for basic facilities. Wildlife spotting best in early summer.",
  keyAttractions: [
    "Tso Moriri Lake — Pristine high-altitude lake, less crowded than Pangong",
    "Korzok Monastery — Ancient monastery on the lake shore",
    "Tso Kar Lake — White salt lake with flamingos and wildlife",
    "Changthang Plateau — Nomadic Changpa settlements, yaks",
    "Wildlife — Tibetan wild ass (Kiang), marmots, migratory birds",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Flight: Kolkata → Delhi → Leh. Rest and acclimatize in Leh.",
    },
    {
      day: 2,
      title: "Acclimatization",
      plan: "Shanti Stupa + Leh Palace + local market + hydrate and rest",
    },
    {
      day: 3,
      title: "Journey to Lake",
      plan: "Leh → Korzok (Tso Moriri) via Chumathang hot springs (7-8 hours). Evening at lake.",
    },
    {
      day: 4,
      title: "Lake Exploration",
      plan: "Tso Moriri lake circuit + Korzok monastery + wildlife spotting + Changpa village",
    },
    {
      day: 5,
      title: "Salt Lake Return",
      plan: "Return via Tso Kar (white salt lake) + wildlife spotting + arrive Leh evening.",
    },
    {
      day: 6,
      title: "Monastery Day",
      plan: "Hemis Monastery + Thiksey Monastery + Shey Palace + Leh market",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Early monastery visit + Flight: Leh → Delhi → Kolkata",
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
        item: "Shared taxi/jeep (Leh circuits)",
        low: 10000,
        typical: 18000,
        notes: "Tso Moriri + local sightseeing",
      },
      {
        item: "Accommodation (6 nights)",
        low: 6000,
        typical: 10000,
        notes: "Guesthouses + Korzok homestay",
      },
      {
        item: "Food (7 days)",
        low: 2000,
        typical: 3500,
        notes: "Simple meals",
      },
      {
        item: "Permits",
        low: 500,
        typical: 800,
        notes: "ILP for Changthang",
      },
      {
        item: "Local sightseeing",
        low: 500,
        typical: 1500,
        notes: "Entry fees, guides",
      },
      {
        item: "Misc (tips, shopping)",
        low: 500,
        typical: 1200,
        notes: "",
      },
    ],
    total: {
      low: 31500,
      typical: 57000,
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
        category: "Shared taxi (chartered)",
        perPerson: "6,000–10,000",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "3,000–5,500",
      },
      {
        category: "Food",
        perPerson: "1,800–3,000",
      },
      {
        category: "Permits",
        perPerson: "400–700",
      },
      {
        category: "Local sightseeing",
        perPerson: "350–1,000",
      },
      {
        category: "Misc",
        perPerson: "400–800",
      },
    ],
    total: "₹23,950–43,000",
  },
  bookingTips: [
    "Much less touristy than Pangong — true wilderness experience",
    "Korzok has basic homestays — carry sleeping bag for extra warmth",
    "Combine with Pangong for extended 9–10 day Ladakh trip",
    "Carry snacks and water — very limited shops en route",
    "Best for wildlife enthusiasts and photography lovers",
  ],
  tags: ["Ladakh", "Lake", "Remote"],
  permitRequired: true,
  totalBudget: { min: 15000, max: 28000 },
  highlights: [
    "High Altitude Lake",
    "Korzok Village",
    "Changthang Wildlife",
    "Stargazing",
    "Nomadic Culture",
  ],
  attractions: [
    "Tso Moriri Lake",
    "Korzok Monastery",
    "Karzok Village",
    "Changthang Plateau",
    "Wildlife Spotting",
  ],
  tips: [
    "Best Jun-Sep",
    "Acclimatize properly",
    "Carry all essentials",
    "Limited facilities - basic only",
  ],
  costs: [
    { item: "Transport (from Leh)", amount: 6000 },
    { item: "Accommodation (5 nights)", amount: 4000 },
    { item: "Food (6 days)", amount: 3000 },
    { item: "Permits", amount: 1500 },
    { item: "Miscellaneous", amount: 1000 },
  ],
};
