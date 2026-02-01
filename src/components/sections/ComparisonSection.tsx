import { destinations } from "@/data/destinations";
import type { Destination } from "@/data/types";
import { formatBudgetRange } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "iconoir-react";
import { Link } from "react-router-dom";

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-surface-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary-50 text-secondary-600 rounded-full text-sm font-medium mb-4">
            Compare Plans
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6">
            Quick Comparison
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            Compare all destinations at a glance to find the perfect trip that
            fits your budget and interests.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl bg-surface-primary shadow-lg"
        >
          <table className="w-full min-w-200">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left p-4 md:p-6 font-semibold text-content-primary">
                  Destination
                </th>
                <th className="text-left p-4 md:p-6 font-semibold text-content-primary">
                  Duration
                </th>
                <th className="text-left p-4 md:p-6 font-semibold text-content-primary">
                  Budget (Solo)
                </th>
                <th className="text-left p-4 md:p-6 font-semibold text-content-primary">
                  Best Season
                </th>
                <th className="text-left p-4 md:p-6 font-semibold text-content-primary">
                  Type
                </th>
                <th className="text-left p-4 md:p-6 font-semibold text-content-primary">
                  Permit
                </th>
                <th className="text-center p-4 md:p-6"></th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((destination: Destination, index: number) => (
                <motion.tr
                  key={destination.id || destination.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-border-primary last:border-0 hover:bg-surface-secondary transition-colors"
                >
                  <td className="p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          (destination.images || [
                            `/images/destinations/${destination.slug}.jpg`,
                          ])[0]
                        }
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
                  <td className="p-4 md:p-6 text-content-secondary">
                    {destination.duration || "7 Days"}
                  </td>
                  <td className="p-4 md:p-6">
                    <span className="font-semibold text-primary-600">
                      {formatBudgetRange(
                        destination.totalBudget || {
                          min: destination.budgetBreakdown.total.low,
                          max: destination.budgetBreakdown.total.typical,
                        },
                      )}
                    </span>
                  </td>
                  <td className="p-4 md:p-6 text-content-secondary">
                    {destination.bestSeason}
                  </td>
                  <td className="p-4 md:p-6">
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
                  <td className="p-4 md:p-6">
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
                  <td className="p-4 md:p-6 text-center">
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
