import type { Destination } from "../types";

export const tirthan_valley: Destination = {
  destination: "Tirthan Valley",
  state: "Himachal Pradesh",
  tagline: "Himachal's Best-Kept Secret",
  info: {
    en: "A quiet alternative to crowded hill stations, Tirthan offers trout fishing, serene river campsites, and GHNP treks through pristine forests. It's Himachal's hidden paradise for nature seekers and offbeat travelers.",
    hi: "भीड़भाड़ वाले हिल स्टेशनों का शांत विकल्प — ट्राउट फिशिंग, नदी किनारे कैम्पसाइट और GHNP ट्रेक। तीर्थन घाटी प्रकृति प्रेमियों और ऑफबीट यात्रियों के लिए हिमाचल का छिपा स्वर्ग है।",
    bn: "ভিড়ভাট্টা হিল স্টেশনের শান্ত বিকল্প — ট্রাউট ফিশিং, নদীর ধারে ক্যাম্পসাইট এবং GHNP ট্রেক। তীর্থন উপত্যকা প্রকৃতি প্রেমী ও অফবিট ভ্রমণার্থীদের জন্য হিমাচলের লুকানো স্বর্গ।",
  },
  shortDescription:
    "Crystal-clear trout streams flowing through pristine Himalayan wilderness",
  description:
    "Tirthan Valley, gateway to the Great Himalayan National Park (UNESCO World Heritage), offers the serenity that Manali once had. Crystal-clear rivers teeming with trout, forested trails, and charming riverside homestays create the perfect mountain escape. Trek to Serolsar Lake, cross Jalori Pass, or simply sit by the river with a book.",
  landscape: "River valley, trout streams, Great Himalayan National Park",
  coordinates: {
    latitude: "31.6079°N",
    longitude: "77.4523°E",
  },
  permits: "GHNP entry permit required for treks inside park",
  bestSeason: "March to June, September to November",
  seasonNote:
    "Spring and autumn are ideal. Monsoons have leeches on trails. Winters are cold but beautiful.",
  keyAttractions: [
    "Tirthan River — Crystal clear trout streams, fishing paradise",
    "Great Himalayan National Park — UNESCO World Heritage, diverse wildlife",
    "Jalori Pass — High altitude pass (3,120m) with panoramic views",
    "Serolsar Lake — Sacred lake trek through oak and rhododendron forests",
    "Jibhi — Charming hamlet with waterfalls and cafés",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Chandigarh (overnight). Or fly to Delhi + bus.",
    },
    {
      day: 2,
      title: "Valley Arrival",
      plan: "Road: Chandigarh → Tirthan Valley (7 hours). Evening riverside walk.",
    },
    {
      day: 3,
      title: "Lake Trek",
      plan: "Jalori Pass + Serolsar Lake trek (12 km round trip) + mountain views",
    },
    {
      day: 4,
      title: "Park Exploration",
      plan: "Great Himalayan National Park entrance trek + Tirthan river fishing",
    },
    {
      day: 5,
      title: "Fort Trek",
      plan: "Raghupur Fort trek from Jalori Pass + village exploration + local culture",
    },
    {
      day: 6,
      title: "River Day",
      plan: "Riverside relaxation + Jibhi waterfalls + trout fishing + local craft shopping",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Tirthan → Chandigarh → Train/Flight to Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Chandigarh round trip)",
        low: 1200,
        typical: 3000,
        notes: "Or fly Delhi ₹5,000–10,000",
      },
      {
        item: "Road transfers (Chandigarh ↔ Tirthan)",
        low: 2000,
        typical: 4000,
        notes: "Shared taxi/bus",
      },
      {
        item: "Accommodation (6 nights)",
        low: 3600,
        typical: 7200,
        notes: "₹600–1,200/night riverside",
      },
      {
        item: "Food (7 days)",
        low: 1800,
        typical: 3000,
        notes: "₹250–400/day",
      },
      {
        item: "GHNP permit & guides",
        low: 500,
        typical: 1500,
        notes: "Park entry + trek guide",
      },
      {
        item: "Fishing & activities",
        low: 400,
        typical: 1000,
        notes: "Trout fishing ₹200–500",
      },
      {
        item: "Misc (tips, shopping)",
        low: 400,
        typical: 800,
        notes: "",
      },
    ],
    total: {
      low: 9900,
      typical: 20500,
      typicalRange: "₹12k–20k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "1,200–3,000",
      },
      {
        category: "Shared vehicle",
        perPerson: "1,200–2,500",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "2,400–4,800",
      },
      {
        category: "Food",
        perPerson: "1,500–2,500",
      },
      {
        category: "GHNP & guides",
        perPerson: "350–1,000",
      },
      {
        category: "Activities",
        perPerson: "300–700",
      },
      {
        category: "Misc",
        perPerson: "300–600",
      },
    ],
    total: "₹7,250–15,100",
  },
  bookingTips: [
    "Riverside homestays offer the best experience — book directly",
    "Book GHNP permits in advance for deep forest treks (3+ days)",
    "Trout fishing requires permit (₹200–500) — catch and release encouraged",
    "Carry warm layers — valley temperatures drop quickly in evenings",
    "Try fresh river trout at local dhabas — a Tirthan specialty",
  ],
  slug: "tirthan-valley",
};
