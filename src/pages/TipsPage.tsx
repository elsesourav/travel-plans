import { motion } from "framer-motion";
import {
  Bag,
  Calendar,
  Camera,
  Check,
  Cloud,
  Flower,
  Heart,
  Hospital,
  InfoCircle,
  Leaf,
  Map,
  MobileDevMode,
  ShieldCheck,
  Snow,
  Wallet,
  WarningTriangle,
} from "iconoir-react";

const essentialTips = [
  {
    icon: ShieldCheck,
    title: "Book in Advance",
    description:
      "Book trains and flights 2-3 months ahead for better prices. Use IRCTC Tatkal for last-minute bookings.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wallet,
    title: "Carry Cash",
    description:
      "Many remote areas have limited ATM access. Carry sufficient cash, especially in Northeast and mountain regions.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: MobileDevMode,
    title: "Download Offline Maps",
    description:
      "Network connectivity is limited in mountains. Download offline maps and essential apps beforehand.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Acclimatize Properly",
    description:
      "For high-altitude destinations like Ladakh and Spiti, take 1-2 days to acclimatize to prevent altitude sickness.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Camera,
    title: "Respect Local Culture",
    description:
      "Always ask before photographing locals. Dress modestly at religious sites and follow local customs.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Bag,
    title: "Pack Light & Smart",
    description:
      "Layer your clothing for variable weather. Carry a good daypack, sunscreen, and basic medicines.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const packingCategories = [
  {
    title: "Documents",
    items: [
      "ID Proof (Aadhar/Passport)",
      "Permits (if required)",
      "Hotel bookings",
      "Travel insurance",
      "Emergency contacts list",
    ],
  },
  {
    title: "Clothing",
    items: [
      "Layered clothing",
      "Rain jacket/poncho",
      "Comfortable walking shoes",
      "Warm fleece/jacket",
      "Sun hat & sunglasses",
    ],
  },
  {
    title: "Essentials",
    items: [
      "Medicines & first aid",
      "Sunscreen SPF 50+",
      "Power bank",
      "Reusable water bottle",
      "Snacks for travel",
    ],
  },
  {
    title: "Tech",
    items: [
      "Phone & charger",
      "Camera with spare battery",
      "Offline maps downloaded",
      "Portable WiFi (optional)",
      "Universal adapter",
    ],
  },
];

const safetyTips = [
  {
    icon: Hospital,
    title: "Health Precautions",
    tips: [
      "Carry altitude sickness medicine (Diamox) for high-altitude trips",
      "Stay hydrated and avoid alcohol at altitude",
      "Pack basic medicines: paracetamol, ORS, band-aids, antiseptic",
      "Get travel insurance covering adventure activities",
    ],
  },
  {
    icon: WarningTriangle,
    title: "Road Safety",
    tips: [
      "Hire experienced local drivers for mountain roads",
      "Avoid night driving in remote areas",
      "Check weather forecasts before starting",
      "Keep emergency numbers handy",
    ],
  },
  {
    icon: Map,
    title: "Navigation Tips",
    tips: [
      "Download offline maps (Google Maps/Maps.me)",
      "Carry a physical map as backup",
      "Note landmarks near your accommodation",
      "Share live location with family",
    ],
  },
];

const bestTimeData = [
  {
    region: "Ladakh & Spiti",
    best: "June - September",
    avoid: "Oct - May (snow)",
  },
  {
    region: "Northeast",
    best: "March - May, Oct - Nov",
    avoid: "June - Sept (monsoon)",
  },
  {
    region: "Rajasthan",
    best: "October - March",
    avoid: "April - June (extreme heat)",
  },
  { region: "Kerala", best: "September - March", avoid: "April - May (hot)" },
  {
    region: "Himachal",
    best: "March - June, Sept - Nov",
    avoid: "July - Aug (monsoon)",
  },
];

const seasons = [
  {
    name: "Winter",
    months: "December - February",
    icon: Snow,
    color: "from-blue-500 to-cyan-400",
    destinations: ["Varanasi", "Hampi", "Andaman"],
    description:
      "Pleasant weather for South & Central India. Beach destinations at their best.",
  },
  {
    name: "Spring",
    months: "March - April",
    icon: Flower,
    color: "from-pink-500 to-rose-400",
    destinations: ["Ziro Valley", "Khonoma"],
    description:
      "Blooming flowers and comfortable temperatures. Perfect for Northeast hills.",
  },
  {
    name: "Summer",
    months: "May - June",
    icon: Cloud,
    color: "from-amber-500 to-orange-400",
    destinations: ["Leh-Ladakh", "Spiti Valley", "Tawang"],
    description:
      "Ideal for high-altitude adventures when mountain passes open up.",
  },
  {
    name: "Autumn",
    months: "September - November",
    icon: Leaf,
    color: "from-orange-500 to-yellow-400",
    destinations: ["Leh-Ladakh", "Spiti Valley", "Ziro Valley"],
    description:
      "Clear skies and golden landscapes. Ziro Music Festival happens in September.",
  },
];

export function TipsPage() {
  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Travel Guide
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Travel Smart in India
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              Essential tips, packing lists, and safety advice for an
              unforgettable journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-xl border-b border-border-primary py-3">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
            <a
              href="#essential"
              className="text-sm font-medium text-content-secondary hover:text-primary-600 whitespace-nowrap"
            >
              Essential Tips
            </a>
            <a
              href="#packing"
              className="text-sm font-medium text-content-secondary hover:text-primary-600 whitespace-nowrap"
            >
              Packing List
            </a>
            <a
              href="#safety"
              className="text-sm font-medium text-content-secondary hover:text-primary-600 whitespace-nowrap"
            >
              Safety
            </a>
            <a
              href="#timing"
              className="text-sm font-medium text-content-secondary hover:text-primary-600 whitespace-nowrap"
            >
              Best Time
            </a>
            <a
              href="#seasons"
              className="text-sm font-medium text-content-secondary hover:text-primary-600 whitespace-nowrap"
            >
              Seasons
            </a>
          </div>
        </div>
      </div>

      {/* Essential Tips */}
      <section id="essential" className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-content-primary mb-2">
              Essential Tips
            </h2>
            <p className="text-content-secondary">
              Key advice for a smooth travel experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {essentialTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-5 rounded-xl bg-white border border-border-primary hover:shadow-md transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tip.color} flex items-center justify-center mb-3`}
                >
                  <tip.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-content-primary mb-1.5">
                  {tip.title}
                </h3>
                <p className="text-content-secondary text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section id="packing" className="py-12 md:py-16 bg-surface-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-content-primary mb-2">
              Packing Checklist
            </h2>
            <p className="text-content-secondary">
              Don't forget these essentials for your trip.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {packingCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-white border border-border-primary"
              >
                <h3 className="font-semibold text-content-primary mb-3 flex items-center gap-2">
                  <Bag className="w-4 h-4 text-primary-500" />
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-content-secondary"
                    >
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section id="safety" className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-content-primary mb-2">
              Safety & Health
            </h2>
            <p className="text-content-secondary">
              Stay safe and healthy during your adventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {safetyTips.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-white border border-border-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-content-primary">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-sm text-content-secondary"
                    >
                      <InfoCircle className="w-4 h-4 text-content-tertiary flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section id="timing" className="py-12 md:py-16 bg-surface-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-content-primary mb-2">
              Best Time by Region
            </h2>
            <p className="text-content-secondary">
              Plan your trip during the ideal season.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-xl bg-white border border-border-primary">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-primary bg-surface-secondary">
                  <th className="text-left p-4 font-semibold text-content-primary">
                    Region
                  </th>
                  <th className="text-left p-4 font-semibold text-content-primary">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" /> Best Time
                    </span>
                  </th>
                  <th className="text-left p-4 font-semibold text-content-primary">
                    <span className="flex items-center gap-2">
                      <WarningTriangle className="w-4 h-4 text-amber-500" />{" "}
                      Avoid
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {bestTimeData.map((row, index) => (
                  <motion.tr
                    key={row.region}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border-primary last:border-0"
                  >
                    <td className="p-4 font-medium text-content-primary">
                      {row.region}
                    </td>
                    <td className="p-4 text-emerald-600">{row.best}</td>
                    <td className="p-4 text-content-tertiary">{row.avoid}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-4 rounded-xl bg-primary-50 border border-primary-100 flex items-start gap-3"
          >
            <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-primary-800 mb-1">Pro Tip</p>
              <p className="text-sm text-primary-700">
                Book your accommodation 2-3 weeks in advance during peak
                seasons. For popular destinations like Ladakh and Goa, book even
                earlier.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasons Section */}
      <section id="seasons" className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-content-primary mb-2">
              When to Travel
            </h2>
            <p className="text-content-secondary">
              Plan your trip during the perfect season.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((season, index) => (
              <motion.div
                key={season.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-border-primary p-5 hover:shadow-md transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${season.color} flex items-center justify-center mb-3`}
                >
                  <season.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-display text-lg font-bold text-content-primary mb-0.5">
                  {season.name}
                </h3>
                <p className="text-content-tertiary text-xs mb-2">
                  {season.months}
                </p>

                <p className="text-content-secondary text-sm mb-3 leading-relaxed">
                  {season.description}
                </p>

                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-content-tertiary uppercase tracking-wider">
                    Best for:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {season.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="px-1.5 py-0.5 bg-gray-100 rounded text-xs text-content-secondary"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
