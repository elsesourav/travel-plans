import type { Destination } from "../types";

export const chopta: Destination = {
  slug: "chopta",
  id: "chopta",
  name: "Chopta",
  images: [
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80",
    "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
  ],
  duration: "4 Days / 3 Nights",
  destination: "Chopta",
  state: "Uttarakhand",
  tagline: "Mini Switzerland of Uttarakhand",
  info: {
    en: "A serene hamlet and gateway to the highest Shiva temple at Tungnath (3,680m). From the Chandrashila summit, enjoy 360-degree views of Himalayan giants — Nanda Devi, Trishul, and Chaukhamba. A photographer's paradise during snowfall and autumn.",
    hi: "शांत बस्ती और तुंगनाथ (3,680m) — दुनिया के सबसे ऊँचे शिव मंदिर का प्रवेश द्वार। चंद्रशिला चोटी से नंदा देवी, त्रिशूल और चौखंबा का 360° दृश्य। बर्फबारी और पतझड़ में फोटोग्राफरों का स्वर्ग।",
    bn: "শান্ত জনপদ এবং বিশ্বের সর্বোচ্চ শিব মন্দির তুঙ্গনাথের (৩,৬৮০ মি.) প্রবেশদ্বার। চন্দ্রশিলা শৃঙ্গ থেকে নন্দাদেবী, ত্রিশূল ও চৌখাম্বার ৩৬০° দৃশ্য। তুষারপাত ও শরতে ফটোগ্রাফারদের স্বর্গ।",
  },
  shortDescription:
    "Alpine meadows leading to the world's highest Shiva temple",
  description:
    "Chopta, at 2,680m, is a tiny hamlet surrounded by alpine meadows and dense rhododendron forests. It's the base for the spectacular Tungnath-Chandrashila trek — leading to the world's highest Shiva temple and 360-degree Himalayan panoramas. For trekkers seeking both spirituality and adventure, Chopta delivers magic without the crowds.",
  landscape: "Alpine meadows, Tungnath temple, Chandrashila peak",
  coordinates: {
    latitude: "30.4403°N",
    longitude: "79.2149°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "March to June, September to November",
  seasonNote:
    "Spring has rhododendron blooms. Autumn offers clear Himalayan views. Winter has heavy snow.",
  keyAttractions: [
    "Tungnath Temple — World's highest Shiva temple (3,680m)",
    "Chandrashila Peak — 360° Himalayan panorama at 4,000m",
    "Deoria Tal — Pristine high-altitude lake reflecting mountains",
    "Alpine Bugyals — Rolling meadows with wildflowers",
    "Kedarnath Wildlife Sanctuary — Rich birdlife and wildlife",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Haridwar (overnight). Or fly to Dehradun + car.",
    },
    {
      day: 2,
      title: "Road to Chopta",
      plan: "Road: Haridwar → Chopta via Rishikesh, Devprayag (8 hours). Evening meadow walk.",
    },
    {
      day: 3,
      title: "Tungnath Trek",
      plan: "Trek to Tungnath temple (3.5 km) + continue to Chandrashila summit (1.5 km) for sunrise/sunset",
    },
    {
      day: 4,
      title: "Deoria Tal",
      plan: "Trek to Deoria Tal lake from Sari village (3 km) + camping/picnic + return",
    },
    {
      day: 5,
      title: "Village Exploration",
      plan: "Explore Sari village + Rohini Bugyal meadows + local culture + birding",
    },
    {
      day: 6,
      title: "Leisure Day",
      plan: "Buffer day for weather / Kedarnath Wildlife Sanctuary birding / meadow relaxation",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Chopta → Haridwar → Train/Flight to Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Haridwar round trip)",
        low: 800,
        typical: 2000,
        notes: "Or fly Dehradun ₹5,000–10,000",
      },
      {
        item: "Road transfers (Haridwar ↔ Chopta)",
        low: 2000,
        typical: 4000,
        notes: "Shared taxi",
      },
      {
        item: "Accommodation (6 nights)",
        low: 3000,
        typical: 6000,
        notes: "₹500–1,000/night camps/homestays",
      },
      {
        item: "Food (7 days)",
        low: 1800,
        typical: 3000,
        notes: "₹250–400/day",
      },
      {
        item: "Trek guides & porters",
        low: 500,
        typical: 1500,
        notes: "Optional but recommended",
      },
      {
        item: "Misc (tips, shopping)",
        low: 400,
        typical: 800,
        notes: "",
      },
    ],
    total: {
      low: 8500,
      typical: 17300,
      typicalRange: "₹12k–18k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "800–2,000",
      },
      {
        category: "Shared vehicle",
        perPerson: "1,200–2,500",
      },
      {
        category: "Shared camps/homestays",
        perPerson: "2,000–4,000",
      },
      {
        category: "Food",
        perPerson: "1,500–2,500",
      },
      {
        category: "Trek guides",
        perPerson: "300–900",
      },
      {
        category: "Misc",
        perPerson: "300–600",
      },
    ],
    total: "₹6,100–12,500",
  },
  bookingTips: [
    "Winter (December–February) has heavy snow — trek routes may be closed",
    "Carry warm clothes even in summer — temperatures drop at night",
    "Start Chandrashila trek early (4-5 AM) for sunrise at summit",
    "Camping gear available for rent locally at Chopta",
    "Carry your own snacks — limited shops along trek routes",
  ],
  tags: ["Uttarakhand", "Trekking", "Mini Switzerland"],
  permitRequired: false,
  totalBudget: { min: 5000, max: 10000 },
  highlights: [
    "Tungnath Temple",
    "Chandrashila Peak",
    "Deoriatal Lake",
    "Bugyals",
    "Himalayan Views",
  ],
  attractions: [
    "Tungnath Trek",
    "Chandrashila Summit",
    "Deoriatal",
    "Sari Village",
    "Rohini Bugyal",
  ],
  tips: [
    "Start trek early morning",
    "Carry warm layers",
    "Best Apr-Jun & Sep-Nov",
    "Acclimatize properly",
  ],
  costs: [
    { item: "Transport (round trip)", amount: 1800 },
    { item: "Accommodation (3 nights)", amount: 2400 },
    { item: "Food (4 days)", amount: 1600 },
    { item: "Trek guide & gear", amount: 1200 },
    { item: "Miscellaneous", amount: 500 },
  ],
};
