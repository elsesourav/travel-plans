import type { Destination } from "../types";

export const konark: Destination = {
  slug: "konark",
  id: "konark",
  name: "Konark",
  images: [
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
  ],
  duration: "2 Days / 1 Night",
  destination: "Konark",
  state: "Odisha",
  tagline: "Where the Sun God Rides His Chariot",
  info: {
    en: "Home to the 13th-century Sun Temple, a UNESCO World Heritage Site designed as a massive chariot with 12 stone wheels. The intricate carvings and architectural brilliance tell the story of Odisha's rich heritage. Nearby Chandrabhaga Beach is known for its serene shores and Konark Dance Festival.",
    hi: "सूर्य मंदिर — 13वीं सदी का यूनेस्को विश्व धरोहर, 12 विशाल पत्थर के पहियों से बना रथ के आकार का मंदिर। इसकी जटिल नक्काशी ओडिशा की समृद्ध विरासत दर्शाती है। पास का चंद्रभागा बीच और कोणार्क नृत्य महोत्सव भी दर्शनीय है।",
    bn: "১৩শ শতাব্দীর সূর্য মন্দির — ১২টি পাথরের চাকা সমন্বিত বিশাল রথ-আকৃতির ইউনেস্কো বিশ্ব ঐতিহ্যবাহী স্থান। এর জটিল ভাস্কর্য ওড়িশার সমৃদ্ধ ঐতিহ্য বহন করে। নিকটবর্তী চন্দ্রভাগা সমুদ্রসৈকত এবং কোণার্ক নৃত্য উৎসব দেখার মতো।",
  },
  shortDescription:
    "UNESCO World Heritage Sun Temple, an architectural marvel of 13th century India",
  description:
    "Konark's Sun Temple, designed as a colossal chariot of the Sun God, is one of India's most stunning architectural achievements. The intricately carved wheels, horses, and erotic sculptures tell stories of ancient Odisha. Combine with nearby Chandrabhaga Beach and the artistic villages of Raghurajpur and Pipili for a complete cultural experience.",
  landscape: "Heritage site, Sun Temple, coastal Odisha",
  coordinates: {
    latitude: "19.8876°N",
    longitude: "86.0945°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "October to March",
  seasonNote:
    "Pleasant weather for temple exploration. Konark Dance Festival (December) is spectacular.",
  keyAttractions: [
    "Konark Sun Temple — UNESCO World Heritage, 13th century chariot temple",
    "Chandrabhaga Beach — Pristine beach near temple, sunrise views",
    "Archaeological Museum — Houses temple sculptures and artifacts",
    "Raghurajpur — Traditional Pattachitra painting village",
    "Pipili — Famous for colorful appliqué craft work",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Bhubaneswar. Transfer to Konark/Puri. Evening beach walk.",
    },
    {
      day: 2,
      title: "Sun Temple Day",
      plan: "Konark Sun Temple exploration + Archaeological Museum + Chandrabhaga Beach sunset",
    },
    {
      day: 3,
      title: "Coastal Morning",
      plan: "Ramachandi Temple + Beleswar Beach + sunrise photography + local seafood",
    },
    {
      day: 4,
      title: "Puri Excursion",
      plan: "Day trip to Puri — Jagannath Temple darshan + Puri beach + evening aarti",
    },
    {
      day: 5,
      title: "Art Villages",
      plan: "Pipili appliqué craft village + Raghurajpur Pattachitra artists + Dhauli Peace Pagoda",
    },
    {
      day: 6,
      title: "Bhubaneswar Temples",
      plan: "Lingaraj Temple + Rajarani Temple + Udayagiri-Khandagiri caves + local markets",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Morning temple visit + Train: Bhubaneswar → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Bhubaneswar round trip)",
        low: 500,
        typical: 1200,
        notes: "6-7 hours journey",
      },
      {
        item: "Road transfers (local)",
        low: 500,
        typical: 1200,
        notes: "Bus/shared taxi",
      },
      {
        item: "Accommodation (6 nights)",
        low: 2400,
        typical: 4800,
        notes: "₹400–800/night",
      },
      {
        item: "Food (7 days)",
        low: 1200,
        typical: 2100,
        notes: "₹170–300/day",
      },
      {
        item: "Entry fees",
        low: 200,
        typical: 500,
        notes: "Sun Temple, museums, caves",
      },
      {
        item: "Misc (crafts, tips)",
        low: 300,
        typical: 700,
        notes: "",
      },
    ],
    total: {
      low: 5100,
      typical: 10500,
      typicalRange: "₹7k–11k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "500–1,200",
      },
      {
        category: "Shared vehicle",
        perPerson: "300–700",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "1,600–3,200",
      },
      {
        category: "Food",
        perPerson: "1,000–1,800",
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
    total: "₹3,750–7,800",
  },
  bookingTips: [
    "Stay in Puri (more options) and day-trip to Konark (35 km)",
    "Konark Dance Festival (December) features classical dance performances",
    "Visit Sun Temple early morning for best light and fewer crowds",
    "Buy Pattachitra art directly from Raghurajpur artists for authenticity",
    "Combine with Puri trip for complete Odisha coastal experience",
  ],
  tags: ["Odisha", "Heritage", "UNESCO"],
  permitRequired: false,
  totalBudget: { min: 2500, max: 5500 },
  highlights: [
    "Sun Temple",
    "Chandrabhaga Beach",
    "ASI Museum",
    "Konark Dance Festival",
    "Stone Chariot",
  ],
  attractions: [
    "Sun Temple UNESCO",
    "Chandrabhaga Beach",
    "Archaeological Museum",
    "Ramachandi Temple",
    "Light & Sound Show",
  ],
  tips: [
    "Best visited from Puri",
    "Visit at sunrise",
    "Attend Konark Festival in Dec",
    "Hire a guide for history",
  ],
  costs: [
    { item: "Transport from Puri", amount: 400 },
    { item: "Entry & guide", amount: 300 },
    { item: "Accommodation (1 night)", amount: 1500 },
    { item: "Food (2 days)", amount: 600 },
    { item: "Miscellaneous", amount: 200 },
  ],
};
