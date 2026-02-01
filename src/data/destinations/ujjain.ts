import type { Destination } from "../types";

export const ujjain: Destination = {
  slug: "ujjain",
  id: "ujjain",
  name: "Ujjain",
  images: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    "https://images.unsplash.com/photo-1574863959826-8f4cd9c69c9b?w=1200&q=80",
    "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200&q=80",
  ],
  duration: "4 Days / 3 Nights",
  destination: "Ujjain",
  state: "Madhya Pradesh",
  tagline: "City of Mahakal and Eternal Faith",
  info: {
    en: "An ancient city situated on the banks of the Shipra River, Ujjain is home to the Mahakaleshwar Jyotirlinga. It is also one of the four sites for the massive Kumbh Mela held every 12 years.",
    hi: "शिप्रा नदी के तट पर स्थित एक प्राचीन शहर, उज्जैन महाकालेश्वर ज्योतिर्लिंग का घर है। यह हर 12 साल में आयोजित होने वाले विशाल कुंभ मेले के चार स्थलों में से एक है और हिंदू भूगोलवेत्ताओं के लिए एक प्रमुख मध्याह्न रेखा थी।",
    bn: "শিপ্রা নদীর তীরে অবস্থিত প্রাচীন শহর উজ্জয়িনী মহাকালেশ্বর জ্যোতির্লিঙ্গের জন্য বিখ্যাত। এটি কুম্ভ মেলার চারটি স্থানের একটি এবং হিন্দু জ্যোতির্বিদ্যার ইতিহাসে এর বিশেষ গুরুত্ব রয়েছে।",
  },
  shortDescription:
    "One of seven sacred cities, home to the famous Mahakaleshwar Jyotirlinga",
  description:
    "Ujjain, one of Hinduism's seven sacred cities, is home to the Mahakaleshwar Jyotirlinga — one of twelve revered Shiva lingams. Experience the mystical Bhasma Aarti at dawn, explore the ancient Shipra River ghats, and feel the spiritual energy of a city that has been a center of learning and faith for millennia.",
  landscape: "Temple town, Shipra river, Mahakaleshwar Jyotirlinga",
  coordinates: {
    latitude: "23.1765°N",
    longitude: "75.7885°E",
  },
  permits: "Not required for Indian citizens",
  bestSeason: "October to March",
  seasonNote:
    "Pleasant weather for temple visits. Simhastha Kumbh (every 12 years) is grand but very crowded.",
  keyAttractions: [
    "Mahakaleshwar Temple — One of 12 Jyotirlingas, famous Bhasma Aarti",
    "Ram Ghat — Sacred ghat on Shipra river, evening aarti",
    "Kal Bhairav Temple — Unique temple where liquor is offered to deity",
    "Ved Shala (Jantar Mantar) — 18th century astronomical observatory",
    "Omkareshwar — Another Jyotirlinga, day trip (140 km)",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Ujjain. Arrive evening, rest for early morning aarti.",
    },
    {
      day: 2,
      title: "Bhasma Aarti",
      plan: "Pre-dawn Mahakaleshwar Temple Bhasma Aarti (pre-book) + rest + Ram Ghat evening",
    },
    {
      day: 3,
      title: "Temple Circuit",
      plan: "Kal Bhairav Temple + Harsiddhi Temple + Gopal Mandir + Ved Shala observatory",
    },
    {
      day: 4,
      title: "Omkareshwar Trip",
      plan: "Day trip to Omkareshwar Jyotirlinga (140 km) — temple, Narmada views, return evening",
    },
    {
      day: 5,
      title: "River & Heritage",
      plan: "Shipra river boat ride + Sandipani Ashram (Krishna's school) + Chintaman Ganesh",
    },
    {
      day: 6,
      title: "Culture Day",
      plan: "ISKCON temple + Bhartrihari Caves + local markets + evening aarti at Ram Ghat",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Morning temple darshan + Train: Ujjain → Kolkata",
    },
  ],
  budgetBreakdown: {
    perPerson: [
      {
        item: "Train (Kolkata ↔ Ujjain round trip)",
        low: 1000,
        typical: 2500,
        notes: "Long journey, book early",
      },
      {
        item: "Accommodation (6 nights)",
        low: 2400,
        typical: 4800,
        notes: "₹400–800/night dharamshalas",
      },
      {
        item: "Food (7 days)",
        low: 1200,
        typical: 2100,
        notes: "₹170–300/day",
      },
      {
        item: "Omkareshwar day trip",
        low: 500,
        typical: 1200,
        notes: "Shared vehicle",
      },
      {
        item: "Local transport",
        low: 300,
        typical: 800,
        notes: "Auto, e-rickshaw",
      },
      {
        item: "Misc (prasad, donations)",
        low: 200,
        typical: 600,
        notes: "",
      },
    ],
    total: {
      low: 5600,
      typical: 12000,
      typicalRange: "₹8k–12k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "1,000–2,500",
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
        category: "Omkareshwar trip (shared car)",
        perPerson: "350–800",
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
    total: "₹4,300–9,300",
  },
  bookingTips: [
    "Book Bhasma Aarti online 1-2 weeks in advance — limited daily slots",
    "Dharamshalas near Mahakaleshwar offer very affordable stays",
    "Omkareshwar trip needs full day — start early",
    "Kal Bhairav temple is unique experience — don't miss it",
    "Carry modest clothing for all temple visits",
  ],
  tags: ["Madhya Pradesh", "Spiritual", "Heritage"],
  permitRequired: false,
  totalBudget: { min: 4000, max: 9000 },
  highlights: [
    "Mahakaleshwar Temple",
    "Kumbh Mela",
    "Ram Ghat",
    "Kal Bhairav Temple",
    "Ved Shala",
  ],
  attractions: [
    "Mahakaleshwar Jyotirlinga",
    "Ram Ghat Aarti",
    "Kal Bhairav Temple",
    "Harsiddhi Temple",
    "Jantar Mantar",
  ],
  tips: [
    "Witness Bhasma Aarti (book online)",
    "Visit during Kumbh",
    "Evening aarti at Ram Ghat",
    "Try local street food",
  ],
  costs: [
    { item: "Train (round trip)", amount: 1200 },
    { item: "Accommodation (3 nights)", amount: 2700 },
    { item: "Food (4 days)", amount: 1200 },
    { item: "Transport & activities", amount: 1000 },
    { item: "Miscellaneous", amount: 400 },
  ],
};
