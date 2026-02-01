import type { Destination } from "../types";

export const bir_billing: Destination = {
  slug: "bir-billing",
  id: "bir-billing",
  name: "Bir Billing",
  images: [
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&q=80",
    "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1200&q=80",
  ],
  duration: "4 Days / 3 Nights",
  destination: "Bir Billing",
  state: "Himachal Pradesh",
  tagline: "Paragliding Capital of India",
  info: {
    en: "India's top paragliding destination with a Tibetan settlement, tea gardens, and monasteries. Billing serves as the take-off point, while Bir offers the landing zone and a relaxed café culture.",
    hi: "भारत का सर्वश्रेष्ठ पैराग्लाइडिंग गंतव्य — तिब्बती बस्ती, चाय बागान और मठ। बिलिंग उड़ान का प्रारंभ स्थल है, जबकि बीर लैंडिंग ज़ोन और शांत कैफे संस्कृति प्रदान करता है।",
    bn: "ভারতের শীর্ষ প্যারাগ্লাইডিং গন্তব্য — তিব্বতি বসতি, চা বাগান এবং মঠ। বিলিং টেক-অফ পয়েন্ট এবং বীর ল্যান্ডিং জোন ও স্বাচ্ছন্দ্যপূর্ণ ক্যাফে সংস্কৃতি সরবরাহ করে।",
  },
  shortDescription:
    "World-class paragliding site with Tibetan monasteries and tea gardens",
  description:
    "Bir Billing, host of the 2015 Paragliding World Cup, offers India's best tandem paragliding experience. Soar from Billing (2,400m) to land in Bir village while enjoying 20-30 minutes of Himalayan views. Beyond flying, explore Tibetan monasteries, trek through tea gardens, and enjoy the laid-back backpacker café culture.",
  landscape: "Paragliding capital of India, tea gardens, Tibetan settlements",
  coordinates: {
    latitude: "31.8833°N",
    longitude: "76.7167°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "March to June, September to November",
  seasonNote:
    "Best paragliding weather. Avoid monsoon (July–August) — no flying possible. October–November has clearest skies.",
  keyAttractions: [
    "Paragliding — World-class tandem flights from Billing to Bir",
    "Chokling Monastery — Beautiful Tibetan monastery with ancient murals",
    "Tea Gardens — Scenic walks through lush tea plantations",
    "Gunehar Waterfall — Hidden gem waterfall near Bir",
    "Billing Takeoff Site — Trek up for stunning valley views",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Pathankot (overnight). Or fly to Dharamshala + taxi.",
    },
    {
      day: 2,
      title: "Arrival",
      plan: "Road: Pathankot → Bir (5 hours). Evening Chokling Monastery visit.",
    },
    {
      day: 3,
      title: "Flying Day",
      plan: "Paragliding from Billing to Bir (main activity!) + video/photos + celebration",
    },
    {
      day: 4,
      title: "Monastery Circuit",
      plan: "Tibetan colony + Palpung Sherabling Monastery + tea garden walk",
    },
    {
      day: 5,
      title: "Trek Day",
      plan: "Trek to Billing takeoff site (14 km) + village exploration + sunset views",
    },
    {
      day: 6,
      title: "Waterfall & Chill",
      plan: "Gunehar waterfall + camping/relaxation + local café hopping",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Bir → Pathankot → Train/Flight to Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Pathankot round trip)",
        low: 800,
        typical: 2000,
        notes: "Or fly Dharamshala ₹5,000–10,000",
      },
      {
        item: "Road transfers (Pathankot ↔ Bir)",
        low: 800,
        typical: 2000,
        notes: "Shared taxi/bus",
      },
      {
        item: "Accommodation (6 nights)",
        low: 3000,
        typical: 6000,
        notes: "₹500–1,000/night",
      },
      {
        item: "Food (7 days)",
        low: 1800,
        typical: 3000,
        notes: "₹250–400/day",
      },
      {
        item: "Paragliding",
        low: 2500,
        typical: 4000,
        notes: "Tandem flight 15–30 min",
      },
      {
        item: "Local transport & activities",
        low: 500,
        typical: 1200,
        notes: "Trekking, camping",
      },
      {
        item: "Misc (tips, shopping)",
        low: 400,
        typical: 800,
        notes: "",
      },
    ],
    total: {
      low: 9800,
      typical: 19000,
      typicalRange: "₹12k–20k",
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
        perPerson: "500–1,200",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "2,000–4,000",
      },
      {
        category: "Food",
        perPerson: "1,500–2,500",
      },
      {
        category: "Paragliding",
        perPerson: "2,500–4,000",
      },
      {
        category: "Activities",
        perPerson: "350–800",
      },
      {
        category: "Misc",
        perPerson: "300–600",
      },
    ],
    total: "₹7,950–15,100",
  },
  bookingTips: [
    "Book paragliding with CERTIFIED operators only — safety first",
    "Early morning flights have best thermals and views",
    "Bir has excellent café culture — try June 16 Café and Zostel",
    "Trek to Billing early morning for sunrise — magical experience",
    "Combine with McLeod Ganj for complete Himachal experience",
  ],
  tags: ["Himachal Pradesh", "Paragliding", "Adventure"],
  permitRequired: false,
  totalBudget: { min: 5000, max: 10000 },
  highlights: [
    "Paragliding Capital",
    "Tibetan Colony",
    "Monasteries",
    "Rajgundha Trek",
    "Cafes",
  ],
  attractions: [
    "Paragliding",
    "Chokling Monastery",
    "Bir Tibetan Colony",
    "Rajgundha Valley",
    "Baijnath Temple",
  ],
  tips: [
    "Best Mar-Jun & Sep-Nov",
    "Book paragliding in advance",
    "Stay in Bir village",
    "Try Tibetan food",
  ],
  costs: [
    { item: "Transport (round trip)", amount: 1500 },
    { item: "Accommodation (3 nights)", amount: 2400 },
    { item: "Food (4 days)", amount: 1600 },
    { item: "Paragliding & activities", amount: 3000 },
    { item: "Miscellaneous", amount: 500 },
  ],
};
