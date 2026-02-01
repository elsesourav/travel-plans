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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <Link
          to={`/destination/${destination.slug}`}
          className="block bg-surface-secondary rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="relative lg:w-2/5 xl:w-1/3 aspect-16/10 lg:aspect-auto lg:min-h-80 overflow-hidden">
              <img
                src={destination.images[0]}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-black/60 via-transparent to-transparent" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Badge
                  variant="default"
                  className="bg-white/95 text-gray-900 backdrop-blur-sm shadow-lg"
                >
                  {destination.duration}
                </Badge>
                {destination.permitRequired && (
                  <Badge variant="amber" className="backdrop-blur-sm shadow-lg">
                    Permit Required
                  </Badge>
                )}
              </div>

              {/* Mobile Title Overlay */}
              <div className="lg:hidden absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{destination.state}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {destination.name}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 xl:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
              {/* Header - Desktop */}
              <div>
                <div className="hidden lg:flex items-center gap-2 text-content-tertiary text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{destination.state}</span>
                  <span className="text-border-primary">•</span>
                  <span>{destination.coordinates}</span>
                </div>

                <h3 className="hidden lg:block font-display text-3xl xl:text-4xl font-bold text-content-primary mb-3 group-hover:text-primary-600 transition-colors">
                  {destination.name}
                </h3>

                <p className="text-content-secondary text-base mb-5 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-content-primary mb-3 uppercase tracking-wider">
                    Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {destination.highlights
                      .slice(0, 4)
                      .map((highlight: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm text-content-secondary"
                        >
                          <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{highlight}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Footer Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border-primary">
                <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                  <div className="flex items-center gap-2 text-content-secondary">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-content-secondary">
                    <Wallet className="w-5 h-5 text-primary-500" />
                    <span className="font-semibold text-primary-600">
                      {formatBudgetRange(destination.totalBudget)}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-content-secondary">
                    <SunLight className="w-5 h-5 text-amber-500" />
                    <span>{destination.bestSeason}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                  <span>View Details</span>
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Grid variant (compact card)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/destination/${destination.slug}`}
        className="block relative overflow-hidden rounded-3xl bg-surface-secondary"
      >
        {/* Image */}
        <div className="aspect-4/5 overflow-hidden">
          <img
            src={destination.images[0]}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <Badge
            variant="default"
            className="bg-white/90 text-gray-900 backdrop-blur-sm"
          >
            {destination.duration}
          </Badge>
          {destination.permitRequired && (
            <Badge variant="amber" className="backdrop-blur-sm">
              Permit Required
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>{destination.state}</span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            {destination.name}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-2">
            {destination.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-white/80 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-white/80 text-sm">
                <Wallet className="w-4 h-4" />
                <span>{formatBudgetRange(destination.totalBudget)}</span>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
