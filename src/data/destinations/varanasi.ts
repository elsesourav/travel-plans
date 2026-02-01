import type { Destination } from "../types";

export const varanasi: Destination = {
  slug: "varanasi",
  destination: "Varanasi",
  id: "varanasi",
  name: "Varanasi",
  images: [
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80",
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200&q=80",
    "https://images.unsplash.com/photo-1564804955966-f6f41ea4d3d4?w=1200&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200&q=80",
  ],
  duration: "7 Days / 6 Nights",
  state: "Uttar Pradesh",
  tagline: "The Spiritual Heart of India",
  info: {
    en: "One of the world's oldest living cities, Varanasi is the spiritual capital of India. Located on the banks of the Ganges, it is famous for its mesmerizing evening Ganga Aarti, ancient ghats, and labyrinthine alleys filled with temples. It is believed that dying here offers moksha.",
    hi: "विश्व के सबसे पुराने जीवित शहरों में से एक, वाराणसी भारत की आध्यात्मिक राजधानी है। गंगा के तट पर स्थित, यह अपनी मंत्रमुग्ध कर देने वाली शाम की गंगा आरती, प्राचीन घाटों और मंदिरों से भरी भूलभुलैया वाली गलियों के लिए प्रसिद्ध है। यह माना जाता है कि यहां मृत्यु मोक्ष प्रदान करती है।",
    bn: "বিশ্বের প্রাচীনতম জীবন্ত শহরগুলির মধ্যে অন্যতম বারাণসী ভারতের আধ্যাত্মিক রাজধানী। গঙ্গা নদীর তীরে অবস্থিত এই শহর তার মন্ত্রমুগ্ধকর সন্ধ্যার গঙ্গা আরতি, প্রাচীন ঘাট এবং মন্দিরে ভরা গলির জন্য বিখ্যাত। বিশ্বাস করা হয় যে এখানে মৃত্যুবরণ করলে মোক্ষ লাভ হয়।",
  },
  shortDescription:
    "Ancient city on the Ganges where spirituality meets timeless traditions",
  description:
    "Varanasi, one of the world's oldest continuously inhabited cities, is the spiritual capital of India. Witness the mesmerizing Ganga Aarti, explore ancient ghats at sunrise, and experience the profound energy of this holy city where life and death dance together on the banks of the sacred Ganges.",
  landscape: "River ghats, temples, narrow old-city lanes",
  coordinates: {
    latitude: "25.3176°N",
    longitude: "82.9739°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "October to March",
  seasonNote:
    "Pleasant weather, ideal for ghat walks and boat rides. Avoid summer heat.",
  keyAttractions: [
    "Dashashwamedh Ghat — Famous for evening Ganga Aarti ceremony",
    "Kashi Vishwanath Temple — One of 12 Jyotirlingas, most sacred Shiva temple",
    "Sarnath — Buddhist pilgrimage site where Buddha gave first sermon",
    "Assi Ghat — Peaceful ghat popular with travelers and artists",
    "Manikarnika Ghat — Sacred cremation ghat, center of Hindu afterlife beliefs",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival Day",
      plan: "Train: Kolkata → Varanasi (arrive evening). Check into guesthouse near ghats, evening walk.",
    },
    {
      day: 2,
      title: "Sunrise & Aarti Experience",
      plan: "Sunrise boat ride on Ganga + Ghat walk + evening Ganga Aarti at Dashashwamedh Ghat",
    },
    {
      day: 3,
      title: "Temple & Heritage Day",
      plan: "Kashi Vishwanath Temple darshan + explore old city lanes + Vishwanath Gali markets",
    },
    {
      day: 4,
      title: "Sarnath Excursion",
      plan: "Full day trip to Sarnath — Dhamek Stupa, Ashoka Pillar, Archaeological Museum",
    },
    {
      day: 5,
      title: "Culture & Crafts",
      plan: "Heritage walk + Banarasi silk weavers + optional cooking class or music session",
    },
    {
      day: 6,
      title: "Leisure & Exploration",
      plan: "Morning yoga by ghats + Ramnagar Fort + evening photography at ghats",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Early morning ghat visit + Train: Varanasi → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Varanasi — sleeper/3A round trip)",
        low: 800,
        typical: 2000,
        notes: "Sleeper to AC 3A range",
      },
      {
        item: "Accommodation (6 nights, budget guesthouse)",
        low: 3000,
        typical: 6000,
        notes: "₹400–1,200/night",
      },
      {
        item: "Food (7 days, local meals)",
        low: 1400,
        typical: 2500,
        notes: "₹200–400/day",
      },
      {
        item: "Sunrise boat (Ganga)",
        low: 250,
        typical: 800,
        notes: "Shared boat starts ₹250",
      },
      {
        item: "Local transport & guides",
        low: 400,
        typical: 1500,
        notes: "Auto/boat/short taxis",
      },
      {
        item: "Sarnath day trip",
        low: 300,
        typical: 1000,
        notes: "Transport + entry + guide",
      },
      {
        item: "Misc (shopping, tips)",
        low: 300,
        typical: 1000,
        notes: "",
      },
    ],
    total: {
      low: 6450,
      typical: 14800,
      typicalRange: "₹9k–13k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets (3A or sleeper)",
        perPerson: "400–1,800",
      },
      {
        category: "Shared hotel rooms (3 rooms)",
        perPerson: "3,000–4,500",
      },
      {
        category: "Food (local)",
        perPerson: "2,000–2,500",
      },
      {
        category: "Ganga boat (shared)",
        perPerson: "250–600",
      },
      {
        category: "Local transport (shared autos)",
        perPerson: "200–700",
      },
      {
        category: "Sarnath trip (sharing car)",
        perPerson: "200–800",
      },
      {
        category: "Misc",
        perPerson: "300–800",
      },
    ],
    total: "₹6,350–11,700",
  },
  bookingTips: [
    "Book train tickets 60 days in advance via IRCTC for confirmed seats",
    "Ganga Aarti is free from ghats; pay only for boat view (shared starts ₹250)",
    "Stay near Assi Ghat for peaceful nights, Dashashwamedh for central location",
    "Hire a local guide for old city lanes — easy to get lost",
    "Try famous Banarasi paan and lassi at Blue Lassi Shop",
  ],
  tags: ["Uttar Pradesh", "Spiritual", "Heritage"],
  permitRequired: false,
  totalBudget: { min: 6450, max: 14800 },
  highlights: [
    "Dashashwamedh Ghat",
    "Kashi Vishwanath Temple",
    "Sarnath",
    "Assi Ghat",
    "Manikarnika Ghat",
  ],
  attractions: [
    "Dashashwamedh Ghat — Famous for evening Ganga Aarti ceremony",
    "Kashi Vishwanath Temple — One of 12 Jyotirlingas",
    "Sarnath — Buddhist pilgrimage site",
    "Assi Ghat — Peaceful ghat popular with travelers",
    "Manikarnika Ghat — Sacred cremation ghat",
  ],
  tips: [
    "Book train tickets 60 days in advance",
    "Ganga Aarti is free from ghats",
    "Stay near Assi Ghat for peaceful nights",
    "Hire a local guide for old city lanes",
    "Try famous Banarasi paan and lassi",
  ],
  costs: [
    { item: "Train (round trip)", amount: 2000 },
    { item: "Accommodation (6 nights)", amount: 6000 },
    { item: "Food (7 days)", amount: 2500 },
    { item: "Boat rides & transport", amount: 2300 },
    { item: "Sarnath day trip", amount: 1000 },
    { item: "Miscellaneous", amount: 1000 },
  ],
};
