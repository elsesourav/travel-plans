import { destinations } from "@/data/destinations";
import type { Destination } from "@/data/types";
import {
  formatBudgetRange,
  getBudgetRange,
  getDestinationImage,
} from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Wallet } from "iconoir-react";
import { Link } from "react-router-dom";

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-surface-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary-50 text-secondary-600 rounded-full text-sm font-medium mb-4">
            Compare Plans
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-content-primary mb-4">
            Quick Comparison
          </h2>
          <p className="text-base md:text-lg text-content-secondary max-w-2xl mx-auto">
            Compare all destinations at a glance to find the perfect trip.
          </p>
        </motion.div>

        {/* Mobile Cards View */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destinations
            .slice(0, 8)
            .map((destination: Destination, index: number) => (
              <motion.div
                key={destination.id || destination.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-surface-primary rounded-xl p-4 shadow-sm border border-border-primary"
              >
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={getDestinationImage(destination)}
                    alt={destination.name || destination.destination}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-content-primary truncate">
                      {destination.name || destination.destination}
                    </h3>
                    <p className="text-sm text-content-tertiary flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {destination.state}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                  <div className="flex items-center gap-1.5 text-content-secondary">
                    <Calendar className="w-3.5 h-3.5 text-content-tertiary" />
                    <span>{destination.duration || "7 Days"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-primary-500" />
                    <span className="font-medium text-primary-600">
                      {formatBudgetRange(getBudgetRange(destination))}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-content-tertiary">
                    {destination.bestSeason}
                  </span>
                  <Link
                    to={`/destination/${destination.slug}`}
                    className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium text-sm"
                  >
                    View <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block overflow-x-auto rounded-2xl bg-surface-primary shadow-lg"
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left p-4 lg:p-6 font-semibold text-content-primary">
                  Destination
                </th>
                <th className="text-left p-4 lg:p-6 font-semibold text-content-primary">
                  Duration
                </th>
                <th className="text-left p-4 lg:p-6 font-semibold text-content-primary">
                  Budget (Solo)
                </th>
                <th className="text-left p-4 lg:p-6 font-semibold text-content-primary">
                  Best Season
                </th>
                <th className="text-left p-4 lg:p-6 font-semibold text-content-primary">
                  Type
                </th>
                <th className="text-left p-4 lg:p-6 font-semibold text-content-primary">
                  Permit
                </th>
                <th className="text-center p-4 lg:p-6"></th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((destination: Destination, index: number) => (
                <motion.tr
                  key={destination.id || destination.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="border-b border-border-primary last:border-0 hover:bg-surface-secondary transition-colors"
                >
                  <td className="p-4 lg:p-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={getDestinationImage(destination)}
                        alt={destination.name || destination.destination}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <div className="font-semibold text-content-primary">
                          {destination.name || destination.destination}
                        </div>
                        <div className="text-sm text-content-tertiary">
                          {destination.state}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 lg:p-6 text-content-secondary">
                    {destination.duration || "7 Days"}
                  </td>
                  <td className="p-4 lg:p-6">
                    <span className="font-semibold text-primary-600">
                      {formatBudgetRange(getBudgetRange(destination))}
                    </span>
                  </td>
                  <td className="p-4 lg:p-6 text-content-secondary">
                    {destination.bestSeason}
                  </td>
                  <td className="p-4 lg:p-6">
                    <div className="flex flex-wrap gap-1">
                      {(
                        destination.tags || [
                          destination.state,
                          destination.landscape.split(",")[0].trim(),
                        ]
                      )
                        .slice(0, 2)
                        .map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-surface-tertiary rounded-full text-xs text-content-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </td>
                  <td className="p-4 lg:p-6">
                    {destination.permitRequired ||
                    destination.permits.toLowerCase().includes("required") ? (
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        Required
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Not Needed
                      </span>
                    )}
                  </td>
                  <td className="p-4 lg:p-6 text-center">
                    <Link
                      to={`/destination/${destination.slug}`}
                      className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
                    >
                      View
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
