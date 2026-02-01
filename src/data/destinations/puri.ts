import type { Destination } from "../types";

export const puri: Destination = {
  slug: "puri",
  id: "puri",
  name: "Puri",
  images: [
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80",
    "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1200&q=80",
  ],
  duration: "5 Days / 4 Nights",
  destination: "Puri",
  state: "Odisha",
  tagline: "Sacred Shores of the Bay of Bengal",
  info: {
    en: "One of the Char Dham pilgrimage sites for Hindus, famous for the Jagannath Temple and its annual Rath Yatra. It also boasts golden beaches on the Bay of Bengal, making it a popular spiritual and leisure destination.",
    hi: "हिंदुओं के चार धाम तीर्थ स्थलों में से एक, जगन्नाथ मंदिर और इसकी वार्षिक रथ यात्रा के लिए प्रसिद्ध है। यह बंगाल की खाड़ी के सुनहरे समुद्र तटों का भी दावा करता है, जो इसे एक लोकप्रिय आध्यात्मिक और अवकाश गंतव्य बनाता है।",
    bn: "হিন্দুদের চার ধাম তীর্থস্থানের অন্যতম পুরী তার জগন্নাথ মন্দির এবং বার্ষিক রথযাত্রার জন্য বিখ্যাত। বঙ্গোপসাগরের বুকে থাকা এর সোনালী সৈকত এটিকে একটি জনপ্রিয় পর্যটন এবং আধ্যাত্মিক গন্তব্যে পরিণত করেছে।",
  },
  shortDescription:
    "Legendary Jagannath Temple town with golden beaches and rich culture",
  description:
    "Puri, one of the four sacred Char Dhams, blends spirituality with seaside relaxation. The ancient Jagannath Temple, famous for the Rath Yatra, stands as one of India's most revered pilgrimage sites. Combine temple darshan with beach sunrises, day trips to the magnificent Konark Sun Temple, and experiences of Odisha's rich art traditions.",
  landscape: "Beach town, Jagannath Temple, coastal Odisha",
  coordinates: {
    latitude: "19.8135°N",
    longitude: "85.8312°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "October to March",
  seasonNote:
    "Pleasant beach weather. Rath Yatra (June/July) is spectacular but extremely crowded.",
  keyAttractions: [
    "Jagannath Temple — One of Char Dham, 12th century masterpiece",
    "Puri Beach — Golden sand, sunrise views, fishing boats",
    "Konark Sun Temple — UNESCO site, 13th century chariot-shaped marvel",
    "Chilika Lake — Asia's largest brackish water lagoon, dolphins",
    "Raghurajpur — Traditional Pattachitra painting village",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Puri. Evening beach walk + seafood dinner.",
    },
    {
      day: 2,
      title: "Temple & Beach",
      plan: "Early morning Jagannath Temple darshan + Puri beach + evening at sea face",
    },
    {
      day: 3,
      title: "Konark Excursion",
      plan: "Day trip to Konark Sun Temple (35 km) + Chandrabhaga Beach + ASI museum",
    },
    {
      day: 4,
      title: "Chilika Lake",
      plan: "Chilika Lake boat ride + Kalijai Temple + dolphin spotting + Nalabana Bird Sanctuary",
    },
    {
      day: 5,
      title: "Art Villages",
      plan: "Raghurajpur artist village + Pipili appliqué craft village + Pattachitra workshop",
    },
    {
      day: 6,
      title: "Beach Day",
      plan: "Beach relaxation + Gundicha Temple + Sudarshan Crafts Museum + sunset",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Morning beach walk + Train: Puri → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Puri round trip)",
        low: 600,
        typical: 1500,
        notes: "Howrah-Puri Express",
      },
      {
        item: "Accommodation (6 nights)",
        low: 3000,
        typical: 5400,
        notes: "₹500–900/night sea-facing",
      },
      {
        item: "Food (7 days)",
        low: 1400,
        typical: 2500,
        notes: "₹200–350/day, fresh seafood",
      },
      {
        item: "Konark day trip",
        low: 300,
        typical: 800,
        notes: "Shared auto/bus + entry",
      },
      {
        item: "Chilika Lake trip",
        low: 500,
        typical: 1200,
        notes: "Boat + transport",
      },
      {
        item: "Local transport",
        low: 300,
        typical: 800,
        notes: "Beach auto, e-rickshaw",
      },
      {
        item: "Misc (crafts, tips)",
        low: 300,
        typical: 700,
        notes: "",
      },
    ],
    total: {
      low: 6400,
      typical: 12900,
      typicalRange: "₹8k–12k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "600–1,500",
      },
      {
        category: "Shared rooms (3 rooms)",
        perPerson: "2,000–3,600",
      },
      {
        category: "Food",
        perPerson: "1,200–2,000",
      },
      {
        category: "Konark trip (shared)",
        perPerson: "150–400",
      },
      {
        category: "Chilika trip (shared boat)",
        perPerson: "300–700",
      },
      {
        category: "Local transport",
        perPerson: "150–500",
      },
      {
        category: "Misc",
        perPerson: "200–500",
      },
    ],
    total: "₹4,600–9,200",
  },
  bookingTips: [
    "Book Howrah-Puri Express early — very popular route",
    "Sea-facing hotels cost more but worth the sunrise views",
    "Jagannath Temple open only to Hindus — carry ID if asked",
    "Visit Konark early morning to avoid heat and crowds",
    "Buy Pattachitra paintings directly from Raghurajpur artists",
  ],
  tags: ["Odisha", "Beach", "Spiritual"],
  permitRequired: false,
  totalBudget: { min: 4500, max: 10000 },
  highlights: [
    "Jagannath Temple",
    "Puri Beach",
    "Konark Sun Temple",
    "Chilika Lake",
    "Rath Yatra",
  ],
  attractions: [
    "Jagannath Temple",
    "Puri Beach",
    "Konark Temple",
    "Chilika Lake",
    "Raghurajpur Art Village",
  ],
  tips: [
    "Visit during Rath Yatra",
    "Non-Hindus cannot enter Jagannath Temple",
    "Try Mahaprasad",
    "Day trip to Konark",
  ],
  costs: [
    { item: "Train (round trip)", amount: 1400 },
    { item: "Accommodation (4 nights)", amount: 3200 },
    { item: "Food (5 days)", amount: 1500 },
    { item: "Transport & activities", amount: 1800 },
    { item: "Miscellaneous", amount: 600 },
  ],
};
