import type { Destination } from "../types";

export const valparai: Destination = {
  slug: "valparai",
  id: "valparai",
  name: "Valparai",
  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1200&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1200&q=80",
    "https://images.unsplash.com/photo-1432889490240-84df33d47091?w=1200&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
  ],
  duration: "4 Days / 3 Nights",
  destination: "Valparai",
  state: "Tamil Nadu",
  tagline: "Where Tea Meets the Rainforest",
  info: {
    en: "A serene hill station in the Anamalai Hills surrounded by tea and coffee estates. Famous for lion-tailed macaques, Athirapally Falls (nearby), and scenic 40-hairpin-bend drive. A perfect offbeat alternative to Munnar.",
    hi: "अनामलाई पहाड़ियों में चाय और कॉफी बागानों से घिरा शांत हिल स्टेशन। शेर-पूंछ वाले मकाक, अथिरापिल्ली झरना (पास में) और 40 हेयरपिन बेंड ड्राइव के लिए प्रसिद्ध। मुन्नार का शांत विकल्प।",
    bn: "আনামালাই পাহাড়ে চা ও কফি বাগান দ্বারা বেষ্টিত শান্ত হিল স্টেশন। সিংহ-লেজযুক্ত ম্যাকাক, আথিরাপিল্লি জলপ্রপাত (কাছে) এবং ৪০ হেয়ারপিন বেন্ড ড্রাইভের জন্য বিখ্যাত। মুন্নারের শান্ত বিকল্প।",
  },
  shortDescription:
    "Endless tea estates, rare wildlife, and South India's largest waterfall nearby",
  description:
    "Valparai, perched at 1,100m in the Anamalai Hills, is a tea lover's paradise. Drive through 40 hairpin bends to reach endless carpets of tea gardens, spot rare lion-tailed macaques, and day-trip to Athirapally Falls (South India's Niagara). This offbeat Western Ghats gem offers the beauty of Munnar without the crowds.",
  landscape: "Tea estates, Western Ghats, rainforest, wildlife",
  coordinates: {
    latitude: "10.3271°N",
    longitude: "76.9499°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "September to May",
  seasonNote:
    "Monsoon (June–August) has very heavy rainfall. Winter mornings are misty and magical. Wildlife spotting best October–March.",
  keyAttractions: [
    "Tea Estates — Endless green carpets of premium tea gardens",
    "Athirapally Falls — South India's largest waterfall (day trip)",
    "Lion-tailed Macaques — Rare endemic primate sightings",
    "Sholayar Dam — Scenic reservoir surrounded by forests",
    "40 Hairpin Bends — Thrilling drive up from Pollachi",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Flight: Kolkata → Coimbatore. Rest or explore Coimbatore.",
    },
    {
      day: 2,
      title: "Hill Climb",
      plan: "Road: Coimbatore → Valparai via 40 hairpin bends (3 hours). Evening estate walk.",
    },
    {
      day: 3,
      title: "Waterfalls & Dams",
      plan: "Sholayar Dam + Monkey Falls + Balaji Temple + wildlife spotting",
    },
    {
      day: 4,
      title: "Tea Experience",
      plan: "Nallamudi viewpoint + tea factory visit + tea tasting + sunset at estate",
    },
    {
      day: 5,
      title: "Athirapally Day",
      plan: "Day trip to Athirapally Falls (Kerala border) — South India's Niagara!",
    },
    {
      day: 6,
      title: "Wildlife & Nature",
      plan: "Grass Hills wildlife spotting + local village visit + relaxation",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Valparai → Coimbatore → Flight to Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Flight (Kolkata ↔ Coimbatore round trip)",
        low: 5000,
        typical: 10000,
        notes: "Book early for deals",
      },
      {
        item: "Road transfers (Coimbatore ↔ Valparai)",
        low: 800,
        typical: 2000,
        notes: "Shared taxi/bus",
      },
      {
        item: "Accommodation (6 nights)",
        low: 4800,
        typical: 9000,
        notes: "₹800–1,500/night estate bungalows",
      },
      {
        item: "Food (7 days)",
        low: 2100,
        typical: 3500,
        notes: "₹300–500/day",
      },
      {
        item: "Athirapally day trip",
        low: 800,
        typical: 2000,
        notes: "Taxi + entry",
      },
      {
        item: "Local transport & activities",
        low: 500,
        typical: 1500,
        notes: "Tea tours, jeep safaris",
      },
      {
        item: "Misc (tea, tips)",
        low: 500,
        typical: 1000,
        notes: "",
      },
    ],
    total: {
      low: 14500,
      typical: 29000,
      typicalRange: "₹18k–32k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Flight tickets",
        perPerson: "5,000–10,000",
      },
      {
        category: "Shared vehicle",
        perPerson: "500–1,200",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "3,200–6,000",
      },
      {
        category: "Food",
        perPerson: "1,800–3,000",
      },
      {
        category: "Athirapally trip (shared)",
        perPerson: "500–1,200",
      },
      {
        category: "Activities",
        perPerson: "350–1,000",
      },
      {
        category: "Misc",
        perPerson: "400–800",
      },
    ],
    total: "₹11,750–23,200",
  },
  bookingTips: [
    "Stay in colonial tea estate bungalows for authentic experience",
    "The 40 hairpin bends drive is an adventure — enjoy the views!",
    "Look for lion-tailed macaques along forest roads — endemic to Western Ghats",
    "Buy fresh tea directly from estates — much cheaper than shops",
    "Athirapally is stunning after monsoon (September–November)",
  ],
  tags: ["Tamil Nadu", "Tea Estates", "Wildlife"],
  permitRequired: false,
  totalBudget: { min: 5000, max: 10000 },
  highlights: [
    "Tea Plantations",
    "Sholayar Dam",
    "Monkey Falls",
    "Nallamudi Viewpoint",
    "Athirapally Falls",
  ],
  attractions: [
    "Sholayar Dam",
    "Monkey Falls",
    "Nallamudi Poonjolai",
    "Balaji Temple",
    "Athirapally Falls",
  ],
  tips: [
    "Best Sep-May",
    "Drive through 40 hairpin bends",
    "Visit Athirapally en route",
    "Carry light woolens",
  ],
  costs: [
    { item: "Transport (round trip)", amount: 1800 },
    { item: "Accommodation (3 nights)", amount: 3000 },
    { item: "Food (4 days)", amount: 1600 },
    { item: "Activities", amount: 800 },
    { item: "Miscellaneous", amount: 500 },
  ],
};
