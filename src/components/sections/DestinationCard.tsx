import { Badge } from "@/components/ui";
import type { Destination } from "@/data/types";
import { formatBudgetRange } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  MapPin,
  SunLight,
  Wallet,
} from "iconoir-react";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  destination: Destination;
  index: number;
  variant?: "grid" | "row";
}

export function DestinationCard({
  destination,
  index,
  variant = "grid",
}: DestinationCardProps) {
  if (variant === "row") {
    return (
      <div className="group w-full">
        <Link
          to={`/destination/${destination.slug}`}
          className="block w-full bg-surface-secondary rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-border-primary/50"
        >
          <div className="flex flex-col lg:flex-row min-h-[400px] lg:h-[450px]">
            {/* Image Section - Increased size to 50% */}
            <div className="relative lg:w-1/2 h-64 lg:h-full overflow-hidden">
              <img
                src={
                  (destination.images || [
                    `/images/destinations/${destination.slug}.jpg`,
                  ])[0]
                }
                alt={destination.name || destination.destination}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-black/50 via-transparent to-transparent opacity-60" />

              {/* Badges on Image */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                <Badge
                  variant="default"
                  className="bg-white/95 text-gray-900 backdrop-blur-md shadow-lg px-4 py-1.5 text-sm font-medium"
                >
                  {destination.duration || "7 Days"}
                </Badge>
                {destination.permitRequired && (
                  <Badge
                    variant="amber"
                    className="backdrop-blur-md shadow-lg px-4 py-1.5 text-sm font-medium"
                  >
                    Permit Required
                  </Badge>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 text-content-tertiary text-sm lg:text-base mb-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary-500" />
                    <span className="font-medium text-content-secondary">
                      {destination.state}
                    </span>
                  </div>
                  <span className="text-border-primary">•</span>
                  <span>{`${destination.coordinates.latitude}, ${destination.coordinates.longitude}`}</span>
                </div>

                <h3 className="font-display text-3xl lg:text-4xl font-bold text-content-primary mb-4 group-hover:text-primary-600 transition-colors">
                  {destination.name || destination.destination}
                </h3>

                <p className="text-content-secondary text-base lg:text-lg mb-8 line-clamp-2 leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-content-tertiary mb-4 uppercase tracking-widest">
                    Trip Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {(
                      destination.highlights ||
                      destination.keyAttractions
                        .slice(0, 5)
                        .map((attr) => attr.split("—")[0].trim())
                    )
                      .slice(0, 4)
                      .map((highlight: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-sm lg:text-base text-content-secondary"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{highlight}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Footer Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border-primary">
                <div className="flex items-center gap-6 lg:gap-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-content-tertiary font-medium uppercase tracking-wider">
                      Budget
                    </span>
                    <div className="flex items-center gap-2 text-primary-600">
                      <Wallet className="w-5 h-5" />
                      <span className="font-bold text-lg">
                        {formatBudgetRange(
                          destination.totalBudget || {
                            min: destination.budgetBreakdown.total.low,
                            max: destination.budgetBreakdown.total.typical,
                          },
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-content-tertiary">
                    <SunLight className="w-4 h-4 text-amber-500" />
                    <span>{destination.bestSeason}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-6 border-l border-border-primary">
                  <span className="text-primary-600 font-bold group-hover:mr-2 transition-all">
                    Explore
                  </span>
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Grid variant (compact card)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link
        to={`/destination/${destination.slug}`}
        className="block relative overflow-hidden rounded-3xl bg-surface-secondary h-130 w-full"
      >
        {/* Image - Full card coverage */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={
              (destination.images || [
                `/images/destinations/${destination.slug}.jpg`,
              ])[0]
            }
            alt={destination.name || destination.destination}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          <Badge
            variant="default"
            className="bg-white/90 text-gray-900 backdrop-blur-sm shadow-md"
          >
            {destination.duration || "7 Days"}
          </Badge>
          {destination.permitRequired && (
            <Badge variant="amber" className="backdrop-blur-sm shadow-md">
              Permit Required
            </Badge>
          )}
        </div>

        {/* Content - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{destination.state}</span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1">
            {destination.name || destination.destination}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-2 h-10">
            {destination.shortDescription}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-white/90 text-sm">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">
                  {destination.duration || "7 Days"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-white/90 text-sm">
                <Wallet className="w-4 h-4 flex-shrink-0" />
                <span className="truncate font-medium">
                  {formatBudgetRange(
                    destination.totalBudget || {
                      min: destination.budgetBreakdown.total.low,
                      max: destination.budgetBreakdown.total.typical,
                    },
                  )}
                </span>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-500 flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
