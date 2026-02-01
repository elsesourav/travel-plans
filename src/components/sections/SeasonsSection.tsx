import { motion } from "framer-motion";
import { Cloud, Flower, Leaf, Snow } from "iconoir-react";

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

export function SeasonsSection() {
  return (
    <section id="seasons" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Texture Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/30" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
            Best Seasons
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6">
            When to Travel
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            Plan your trip during the perfect season for each destination.
          </p>
        </motion.div>

        {/* Seasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-white/50 dark:border-white/10 p-6 shadow-lg shadow-black/5"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${season.color} flex items-center justify-center mb-4`}
                >
                  <season.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display text-2xl font-bold text-content-primary mb-1">
                  {season.name}
                </h3>
                <p className="text-content-tertiary text-sm mb-4">
                  {season.months}
                </p>

                <p className="text-content-secondary text-sm mb-4 leading-relaxed">
                  {season.description}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-content-tertiary uppercase tracking-wider">
                    Best for:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {season.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="px-2 py-1 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-full text-xs text-content-secondary"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
