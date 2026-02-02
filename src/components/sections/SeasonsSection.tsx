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
    <section
      id="seasons"
      className="py-16 md:py-24 relative overflow-hidden bg-linear-to-b from-emerald-50/30 to-transparent"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-3 py-1.5 bg-emerald-50 text-emerald-600  rounded-full text-sm font-medium mb-3">
            Best Seasons
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-content-primary mb-4">
            When to Travel
          </h2>
          <p className="text-base md:text-lg text-content-secondary max-w-xl mx-auto">
            Plan your trip during the perfect season.
          </p>
        </motion.div>

        {/* Seasons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {seasons.map((season, index) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-gray-200/50 p-4 md:p-5 hover:shadow-lg transition-all"
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl opacity-50" />

              {/* Content */}
              <div className="relative">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${season.color} flex items-center justify-center mb-3`}
                >
                  <season.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                <h3 className="font-display text-lg md:text-xl font-bold text-content-primary mb-0.5">
                  {season.name}
                </h3>
                <p className="text-content-tertiary text-xs mb-2">
                  {season.months}
                </p>

                <p className="text-content-secondary text-xs md:text-sm mb-3 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {season.description}
                </p>

                <div className="space-y-1.5">
                  <div className="text-[10px] md:text-xs font-semibold text-content-tertiary uppercase tracking-wider">
                    Best for:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {season.destinations.slice(0, 2).map((dest) => (
                      <span
                        key={dest}
                        className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px] md:text-xs text-content-secondary"
                      >
                        {dest}
                      </span>
                    ))}
                    {season.destinations.length > 2 && (
                      <span className="text-[10px] md:text-xs text-content-tertiary">
                        +{season.destinations.length - 2}
                      </span>
                    )}
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
