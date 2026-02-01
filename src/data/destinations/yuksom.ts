import type { Destination } from "../types";

export const yuksom: Destination = {
  slug: "yuksom",
  id: "yuksom",
  name: "Yuksom",
  images: [
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    "https://images.unsplash.com/photo-1585136917228-d0a0426b2030?w=1200&q=80",
    "https://images.unsplash.com/photo-1545562083-c583d014b4f2?w=1200&q=80",
  ],
  duration: "5 Days / 4 Nights",
  destination: "Yuksom",
  state: "Sikkim",
  tagline: "Gateway to the Kanchenjunga",
  info: {
    en: "Sikkim's first capital and gateway to the legendary Goecha La trek. Yuksom offers a glimpse of Buddhist heritage with its coronation throne of the first Chogyal. The village is surrounded by cardamom forests and offers pristine views of Kanchenjunga.",
    hi: "सिक्किम की पहली राजधानी और गोएचा ला ट्रेक का प्रवेश द्वार। युकसोम में पहले चोग्याल के राज्याभिषेक सिंहासन और बौद्ध विरासत मिलती है। गाँव इलायची के जंगलों और कंचनजंगा के मनोरम दृश्यों से घिरा है।",
    bn: "সিকিমের প্রথম রাজধানী এবং গোয়েচা লা ট্রেকের প্রবেশদ্বার। ইউকসমে প্রথম চোগ্যালের রাজ্যাভিষেক সিংহাসন ও বৌদ্ধ ঐতিহ্যের নিদর্শন রয়েছে। এলাচ বন এবং কাঞ্চনজঙ্ঘার দৃশ্য এই গ্রামকে ঘিরে রেখেছে।",
  },
  shortDescription:
    "Historic coronation site and trekking base for Sikkim's highest peaks",
  description:
    "Yuksom, Sikkim's first capital, is where the first Chogyal was crowned in 1642. This peaceful village serves as the gateway to the legendary Goecha La trek offering Kanchenjunga views. Explore Sikkim's oldest monastery, trek through rhododendron forests, and experience the authentic Sikkimese culture in this offbeat Himalayan gem.",
  landscape: "Gateway to Kanchenjunga, forest trails, Buddhist heritage",
  coordinates: {
    latitude: "27.3706°N",
    longitude: "88.2217°E",
  },
  permits: "ILP required for certain areas (apply at Rangpo/Gangtok)",
  bestSeason: "March to May, October to November",
  seasonNote:
    "Spring has rhododendron blooms. Autumn offers clear mountain views. Monsoon has heavy rains.",
  keyAttractions: [
    "Dubdi Monastery — Sikkim's oldest monastery (1701), hilltop trek",
    "Norbugang Coronation Throne — Where first Sikkimese king was crowned",
    "Goecha La Trek — Gateway to spectacular Kanchenjunga views",
    "Khecheopalri Lake — Sacred wish-fulfilling lake",
    "Tashiding Monastery — One of Sikkim's holiest monasteries",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → NJP. Shared taxi to Pelling/Yuksom (6-7 hours). Evening rest.",
    },
    {
      day: 2,
      title: "Pelling Sights",
      plan: "Pemayangtse Monastery + Rabdentse ruins + Kanchenjunga viewpoint → drive to Yuksom",
    },
    {
      day: 3,
      title: "Yuksom Heritage",
      plan: "Dubdi Monastery trek + Norbugang Coronation Throne + Kathok Lake + village walk",
    },
    {
      day: 4,
      title: "Forest Trek",
      plan: "Day trek toward Sachen (Dzongri trail start) + forest exploration + wildlife spotting",
    },
    {
      day: 5,
      title: "Monastery Day",
      plan: "Day trip to Tashiding Monastery + prayer wheels + local culture immersion",
    },
    {
      day: 6,
      title: "Sacred Lake",
      plan: "Khecheopalri Lake visit + Rimbi Waterfalls + return to Pelling",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Pelling/Geyzing → NJP → Train to Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ NJP round trip)",
        low: 600,
        typical: 1500,
        notes: "8-10 hours journey",
      },
      {
        item: "Shared taxi (NJP ↔ Yuksom circuit)",
        low: 2000,
        typical: 4000,
        notes: "Via Pelling route",
      },
      {
        item: "Accommodation (6 nights)",
        low: 3600,
        typical: 6000,
        notes: "₹600–1,000/night homestays",
      },
      {
        item: "Food (7 days)",
        low: 1800,
        typical: 3000,
        notes: "₹250–400/day",
      },
      {
        item: "Permits (if trekking beyond)",
        low: 0,
        typical: 500,
        notes: "Dzongri trek needs permit",
      },
      {
        item: "Local guides & activities",
        low: 500,
        typical: 1500,
        notes: "Trek guides, monastery fees",
      },
      {
        item: "Misc (tips, shopping)",
        low: 400,
        typical: 800,
        notes: "",
      },
    ],
    total: {
      low: 8900,
      typical: 17300,
      typicalRange: "₹12k–18k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "600–1,500",
      },
      {
        category: "Shared vehicle (chartered)",
        perPerson: "1,200–2,500",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "2,400–4,000",
      },
      {
        category: "Food",
        perPerson: "1,500–2,500",
      },
      {
        category: "Permits & guides",
        perPerson: "300–1,000",
      },
      {
        category: "Misc",
        perPerson: "300–600",
      },
    ],
    total: "₹6,300–12,100",
  },
  bookingTips: [
    "Perfect base for Goecha La trek (needs 8-10 extra days with permits)",
    "Homestays offer authentic Sikkimese experience and warm hospitality",
    "Carry warm clothes — temperatures drop significantly even in summer",
    "Book shared taxis from NJP in advance during peak season",
    "Try local Sikkimese thukpa, momos, and chang (millet beer)",
  ],
  tags: ["Sikkim", "Trekking", "Heritage"],
  permitRequired: true,
  totalBudget: { min: 6000, max: 12000 },
  highlights: [
    "Goecha La Trek",
    "Dubdi Monastery",
    "Coronation Throne",
    "Khangchendzonga View",
    "Norbugang Park",
  ],
  attractions: [
    "Goecha La Base",
    "Dubdi Monastery",
    "Coronation Throne",
    "Tashiding Monastery",
    "Khecheopalri Lake",
  ],
  tips: [
    "Base for Goecha La trek",
    "Acclimatize properly",
    "Visit Dubdi early morning",
    "Carry warm clothes",
  ],
  costs: [
    { item: "Transport (round trip)", amount: 2500 },
    { item: "Accommodation (4 nights)", amount: 3200 },
    { item: "Food (5 days)", amount: 2000 },
    { item: "Permits & guide", amount: 1500 },
    { item: "Miscellaneous", amount: 500 },
  ],
};
