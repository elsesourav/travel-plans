import { motion } from "framer-motion";
import {
  Bag,
  Camera,
  Heart,
  MobileDevMode,
  ShieldCheck,
  Wallet,
} from "iconoir-react";

const tips = [
  {
    icon: ShieldCheck,
    title: "Book in Advance",
    description:
      "Book trains and flights 2-3 months ahead for better prices. Use IRCTC Tatkal for last-minute bookings.",
  },
  {
    icon: Wallet,
    title: "Carry Cash",
    description:
      "Many remote areas have limited ATM access. Carry sufficient cash, especially in Northeast and mountain regions.",
  },
  {
    icon: MobileDevMode,
    title: "Download Offline Maps",
    description:
      "Network connectivity is limited in mountains. Download offline maps and essential apps beforehand.",
  },
  {
    icon: Heart,
    title: "Acclimatize Properly",
    description:
      "For high-altitude destinations like Ladakh and Spiti, take 1-2 days to acclimatize to prevent altitude sickness.",
  },
  {
    icon: Camera,
    title: "Respect Local Culture",
    description:
      "Always ask before photographing locals. Dress modestly at religious sites and follow local customs.",
  },
  {
    icon: Bag,
    title: "Pack Light & Smart",
    description:
      "Layer your clothing for variable weather. Carry a good daypack, sunscreen, and basic medicines.",
  },
];

export function TipsSection() {
  return (
    <section id="tips" className="py-12 md:py-20 lg:py-32 bg-surface-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent-50 text-accent-600 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Pro Tips
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content-primary mb-3 md:mb-6">
            Travel Smart
          </h2>
          <p className="text-sm md:text-lg text-content-secondary max-w-2xl mx-auto px-4 md:px-0">
            Essential tips to make your journey smoother, safer, and more
            enjoyable.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-surface-secondary hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300">
                <tip.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-base md:text-lg text-content-primary mb-1 md:mb-2">
                {tip.title}
              </h3>
              <p className="text-content-secondary text-xs md:text-sm leading-relaxed">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
