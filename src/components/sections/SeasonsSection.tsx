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
    <section id="seasons" className="py-20 md:py-32 bg-surface-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-4">
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
              className="group relative overflow-hidden rounded-2xl bg-surface-primary p-6"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
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
                        className="px-2 py-1 bg-surface-secondary rounded-full text-xs text-content-secondary"
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
