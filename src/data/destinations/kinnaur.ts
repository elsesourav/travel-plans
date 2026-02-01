import type { Destination } from "../types";

export const kinnaur: Destination = {
  slug: "kinnaur",
  id: "kinnaur",
  name: "Kinnaur",
  images: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    "https://images.unsplash.com/photo-1477768663691-75454fd8e870?w=1200&q=80",
    "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80",
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
  ],
  duration: "4 Days / 3 Nights",
  destination: "Kinnaur",
  state: "Himachal Pradesh",
  tagline: "Land of Gods and Apples",
  info: {
    en: "A Himalayan valley known for apple orchards, the Kinnaur Kailash sacred peak, and the last village of India — Chitkul. Scenic drives along the Sutlej River and unique tribal culture await.",
    hi: "हिमालयी घाटी — सेब के बागान, पवित्र किन्नर कैलाश शिखर और भारत का अंतिम गाँव चितकुल के लिए प्रसिद्ध। सतलज नदी के किनारे सुंदर ड्राइव और अनूठी जनजातीय संस्कृति यहाँ मिलती है।",
    bn: "আপেল বাগান, পবিত্র কিন্নর কৈলাস শৃঙ্গ এবং ভারতের শেষ গ্রাম চিটকুলের জন্য পরিচিত হিমালয়ের উপত্যকা। সুতলজ নদীর ধারে সুন্দর ড্রাইভ এবং অনন্য আদিবাসী সংস্কৃতি অপেক্ষা করছে।",
  },
  shortDescription:
    "Apple orchards, dramatic gorges, and the mystical Kinnaur Kailash",
  description:
    "Kinnaur Valley, where the Sutlej River carves through dramatic gorges, is a land of apple orchards, ancient temples, and the sacred Kinnaur Kailash peak. From the last Indian village of Chitkul to the stunning views of Kalpa, this is Himachal's most beautiful circuit. Visit during apple season for orchards laden with red and green treasures.",
  landscape: "Apple orchards, Kinnaur Kailash, Sutlej river valley",
  coordinates: {
    latitude: "31.5836°N",
    longitude: "78.4712°E",
  },
  permits: "Inner Line Permit for areas near Tibet border",
  bestSeason: "April to June, September to November",
  seasonNote:
    "Apple season (August–October) is spectacular. Winter has heavy snow, roads may close. Spring has wildflowers.",
  keyAttractions: [
    "Chitkul — Last Indian village on Tibet border, stunning valley",
    "Kalpa — Kinnaur Kailash sunrise views, apple orchards",
    "Sangla Valley — Picturesque valley with Kamru Fort",
    "Bhimakali Temple — Ancient temple at Sarahan",
    "Sutlej River — Dramatic gorges and river views",
  ],
  itinerary: [
    {
      day: 1,
      title: "Travel Day",
      plan: "Train: Kolkata → Chandigarh (overnight). Or fly to Delhi + bus/taxi.",
    },
    {
      day: 2,
      title: "Sarahan Arrival",
      plan: "Road: Chandigarh → Sarahan (9 hours). Bhimakali Temple evening darshan.",
    },
    {
      day: 3,
      title: "Sangla Valley",
      plan: "Sarahan → Sangla Valley. Apple orchards + Kamru Fort + village walk.",
    },
    {
      day: 4,
      title: "Last Village",
      plan: "Sangla → Chitkul (last Indian village). Tibet border views + local culture.",
    },
    {
      day: 5,
      title: "Kalpa Views",
      plan: "Chitkul → Kalpa via Reckong Peo. Kinnaur Kailash sunset views.",
    },
    {
      day: 6,
      title: "Kalpa Exploration",
      plan: "Kinnaur Kailash sunrise + Suicide Point + monastery + apple orchard walk",
    },
    {
      day: 7,
      title: "Departure",
      plan: "Kalpa → Shimla → Train/Flight to Kolkata",
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
        item: "Road transfers (circuit)",
        low: 4000,
        typical: 8000,
        notes: "Shared taxi/bus",
      },
      {
        item: "Accommodation (6 nights)",
        low: 4800,
        typical: 9000,
        notes: "₹800–1,500/night homestays",
      },
      {
        item: "Food (7 days)",
        low: 2100,
        typical: 3500,
        notes: "₹300–500/day",
      },
      {
        item: "Permits (if restricted areas)",
        low: 0,
        typical: 500,
        notes: "Some areas need ILP",
      },
      {
        item: "Local transport & activities",
        low: 600,
        typical: 1500,
        notes: "Local taxi, entry fees",
      },
      {
        item: "Misc (apples, crafts)",
        low: 500,
        typical: 1000,
        notes: "",
      },
    ],
    total: {
      low: 13200,
      typical: 26500,
      typicalRange: "₹16k–28k",
    },
  },
  groupOf6: {
    breakdown: [
      {
        category: "Train tickets",
        perPerson: "1,200–3,000",
      },
      {
        category: "Shared vehicle (chartered)",
        perPerson: "2,500–5,000",
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
        category: "Permits",
        perPerson: "0–400",
      },
      {
        category: "Local transport",
        perPerson: "400–1,000",
      },
      {
        category: "Misc",
        perPerson: "400–800",
      },
    ],
    total: "₹9,500–19,200",
  },
  bookingTips: [
    "Apple season (August–October) is magical — buy fresh from orchards",
    "Combine with Spiti Valley for ultimate Himachal circuit",
    "Chitkul homestays offer authentic Kinnauri experience",
    "Inner Line Permit needed for Chitkul — available at Reckong Peo",
    "Carry warm layers — temperatures drop significantly at night",
  ],
  tags: ["Himachal Pradesh", "Apple Orchards", "Tribal"],
  permitRequired: true,
  totalBudget: { min: 12000, max: 22000 },
  highlights: [
    "Kinnaur Kailash",
    "Kalpa",
    "Sangla Valley",
    "Chitkul",
    "Apple Orchards",
  ],
  attractions: [
    "Kalpa",
    "Chitkul Village",
    "Sangla Valley",
    "Reckong Peo",
    "Kinnaur Kailash",
  ],
  tips: [
    "Best May-Oct",
    "Inner Line Permit needed",
    "Try Kinnauri apples",
    "Carry warm clothes",
  ],
  costs: [
    { item: "Transport (round trip)", amount: 4000 },
    { item: "Accommodation (6 nights)", amount: 5400 },
    { item: "Food (7 days)", amount: 3500 },
    { item: "Permits & activities", amount: 1500 },
    { item: "Miscellaneous", amount: 1000 },
  ],
};
