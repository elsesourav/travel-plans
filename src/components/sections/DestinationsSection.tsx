import { destinations } from "@/data/destinations";
import type { Destination } from "@/data/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cloud,
  Flower,
  Leaf,
  NavArrowLeft,
  NavArrowRight,
  Rain,
  SeaWaves,
  Snow,
  SunLight,
  Wallet,
  Xmark,
} from "iconoir-react";
import { useMemo, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DestinationCard } from "./DestinationCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ITEMS_PER_PAGE = 10;

// Filter options with icons
const SEASON_OPTIONS = [
  { value: "winter", label: "Winter", icon: Snow },
  { value: "summer", label: "Summer", icon: SunLight },
  { value: "monsoon", label: "Monsoon", icon: Rain },
];

const PRICE_OPTIONS = [
  { value: "5000", label: "₹5K" },
  { value: "10000", label: "₹10K" },
  { value: "15000", label: "₹15K" },
  { value: "20000", label: "₹20K" },
  { value: "above", label: "₹20K+" },
];

const LANDSCAPE_OPTIONS = [
  { value: "mountain", label: "Mountains", icon: Leaf },
  { value: "beach", label: "Coastal", icon: SeaWaves },
  { value: "spiritual", label: "Spiritual", icon: Flower },
  { value: "nature", label: "Nature", icon: Cloud },
  { value: "desert", label: "Desert", icon: SunLight },
];

// Helper function to check if destination matches season filter
const matchesSeason = (destination: Destination, season: string): boolean => {
  if (season === "all") return true;
  const bestSeason = destination.bestSeason.toLowerCase();
  if (season === "winter") {
    return (
      bestSeason.includes("october") ||
      bestSeason.includes("november") ||
      bestSeason.includes("december") ||
      bestSeason.includes("january") ||
      bestSeason.includes("february") ||
      bestSeason.includes("march")
    );
  }
  if (season === "summer") {
    return (
      bestSeason.includes("april") ||
      bestSeason.includes("may") ||
      bestSeason.includes("june")
    );
  }
  if (season === "monsoon") {
    return (
      bestSeason.includes("july") ||
      bestSeason.includes("august") ||
      bestSeason.includes("september")
    );
  }
  return true;
};

// Helper function to check if destination matches price filter
const matchesPrice = (destination: Destination, price: string): boolean => {
  if (price === "all") return true;
  const minBudget = destination.totalBudget?.min || 0;
  if (price === "above") return minBudget >= 20000;
  const maxPrice = parseInt(price);
  return minBudget < maxPrice;
};

// Helper function to check if destination matches landscape filter
const matchesLandscape = (
  destination: Destination,
  landscape: string,
): boolean => {
  if (landscape === "all") return true;
  const desc =
    `${destination.landscape} ${destination.description} ${destination.tags?.join(" ")}`.toLowerCase();
  if (landscape === "mountain") {
    return (
      desc.includes("mountain") ||
      desc.includes("himalaya") ||
      desc.includes("hill") ||
      desc.includes("peak") ||
      desc.includes("pass") ||
      desc.includes("alpine") ||
      desc.includes("trek")
    );
  }
  if (landscape === "beach") {
    return (
      desc.includes("beach") ||
      desc.includes("coastal") ||
      desc.includes("sea") ||
      desc.includes("island") ||
      desc.includes("ocean")
    );
  }
  if (landscape === "spiritual") {
    return (
      desc.includes("temple") ||
      desc.includes("spiritual") ||
      desc.includes("pilgrimage") ||
      desc.includes("monastery") ||
      desc.includes("religious") ||
      desc.includes("sacred")
    );
  }
  if (landscape === "nature") {
    return (
      desc.includes("forest") ||
      desc.includes("wildlife") ||
      desc.includes("nature") ||
      desc.includes("mangrove") ||
      desc.includes("valley") ||
      desc.includes("meadow")
    );
  }
  if (landscape === "desert") {
    return (
      desc.includes("desert") || desc.includes("sand") || desc.includes("dune")
    );
  }
  return true;
};

export function DestinationsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [seasonFilters, setSeasonFilters] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState("all");
  const [landscapeFilters, setLandscapeFilters] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Toggle season filter
  const toggleSeason = (value: string) => {
    setSeasonFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
    setCurrentPage(1);
  };

  // Toggle landscape filter
  const toggleLandscape = (value: string) => {
    setLandscapeFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
    setCurrentPage(1);
  };

  // Handle price filter
  const handlePriceChange = (value: string) => {
    setPriceFilter(priceFilter === value ? "all" : value);
    setCurrentPage(1);
  };

  // Filter destinations with multiple selections
  const matchesSeasonFilters = (dest: Destination) => {
    if (seasonFilters.length === 0) return true;
    return seasonFilters.some((season) => matchesSeason(dest, season));
  };

  const matchesLandscapeFilters = (dest: Destination) => {
    if (landscapeFilters.length === 0) return true;
    return landscapeFilters.some((landscape) =>
      matchesLandscape(dest, landscape),
    );
  };

  // Filter destinations
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      return (
        matchesSeasonFilters(dest) &&
        matchesPrice(dest, priceFilter) &&
        matchesLandscapeFilters(dest)
      );
    });
  }, [seasonFilters, priceFilter, landscapeFilters]);

  // Pagination
  const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const activeFiltersCount =
    seasonFilters.length +
    landscapeFilters.length +
    (priceFilter !== "all" ? 1 : 0);

  const clearFilters = () => {
    setSeasonFilters([]);
    setPriceFilter("all");
    setLandscapeFilters([]);
    setCurrentPage(1);
  };

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="py-20 md:py-32 bg-surface-primary"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
            Explore Destinations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6">
            {filteredDestinations.length} Incredible Places
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            From spiritual Varanasi to adventurous Ladakh, each destination
            offers a unique experience with detailed plans and budgets.
          </p>
        </motion.div>

        {/* Glassmorphism Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 relative"
        >
          {/* Glass background with blur */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-white/20 to-white/10 dark:from-gray-800/40 dark:via-gray-800/20 dark:to-gray-800/10 backdrop-blur-2xl"
            style={{
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.3)",
            }}
          />

          <div className="relative z-10 p-6 md:p-8">
            {/* Filter Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold text-content-primary/70 uppercase tracking-wider">
                Filter by
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 text-sm text-content-tertiary hover:text-primary-600 transition-colors"
                >
                  <Xmark className="w-4 h-4" />
                  Clear all ({activeFiltersCount})
                </button>
              )}
            </div>

            {/* Season & Budget Row - Same line on desktop */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-5">
              {/* Season Toggle Buttons */}
              <div className="mb-5 md:mb-0">
                <p className="text-xs font-medium text-content-tertiary mb-2.5 uppercase tracking-wide">
                  Season
                </p>
                <div className="flex flex-wrap gap-2">
                  {SEASON_OPTIONS.map((option) => {
                    const Icon = option.icon;
                    const isActive = seasonFilters.includes(option.value);
                    return (
                      <button
                        key={option.value}
                        onClick={() => toggleSeason(option.value)}
                        className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-500 text-white shadow-md shadow-primary-500/25"
                            : "bg-white/60 dark:bg-white/10 text-content-secondary hover:bg-white/80 dark:hover:bg-white/20 border border-black/5 dark:border-white/10"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Pills */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Wallet className="w-3.5 h-3.5 text-content-tertiary" />
                  <p className="text-xs font-medium text-content-tertiary uppercase tracking-wide">
                    Max Budget
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRICE_OPTIONS.map((option) => {
                    const isActive = priceFilter === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handlePriceChange(option.value)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/25"
                            : "bg-white/60 dark:bg-white/10 text-content-secondary hover:bg-white/80 dark:hover:bg-white/20 border border-black/5 dark:border-white/10"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Landscape Toggle Chips */}
            <div>
              <p className="text-xs font-medium text-content-tertiary mb-2.5 uppercase tracking-wide">
                Landscape
              </p>
              <div className="flex flex-wrap gap-2">
                {LANDSCAPE_OPTIONS.map((option) => {
                  const Icon = option.icon;
                  const isActive = landscapeFilters.includes(option.value);
                  return (
                    <button
                      key={option.value}
                      onClick={() => toggleLandscape(option.value)}
                      className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-violet-500 text-white shadow-md shadow-violet-500/25"
                          : "bg-white/60 dark:bg-white/10 text-content-secondary hover:bg-white/80 dark:hover:bg-white/20 border border-black/5 dark:border-white/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Filters Summary */}
            {activeFiltersCount > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-5 pt-4 border-t border-black/5 dark:border-white/10"
              >
                <p className="text-sm text-content-secondary">
                  Showing{" "}
                  <span className="font-bold text-primary-600">
                    {filteredDestinations.length}
                  </span>{" "}
                  destinations
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-content-secondary mb-4">
              No destinations match your filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Destinations List Layout - Tablet/Desktop */}
        <div className="hidden md:flex flex-col gap-8 md:gap-12">
          <AnimatePresence mode="sync">
            {paginatedDestinations.map(
              (destination: Destination, index: number) => (
                <motion.div
                  key={destination.id || destination.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DestinationCard
                    destination={destination}
                    index={index}
                    variant="row"
                  />
                </motion.div>
              ),
            )}
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center gap-2 mt-8"
            >
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-xl bg-surface-secondary border border-border-primary disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-tertiary transition-colors"
              >
                <NavArrowLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-xl font-medium transition-all ${
                        currentPage === page
                          ? "bg-primary-500 text-white"
                          : "bg-surface-secondary border border-border-primary hover:bg-surface-tertiary text-content-primary"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl bg-surface-secondary border border-border-primary disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-tertiary transition-colors"
              >
                <NavArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Results info */}
          <p className="text-center text-sm text-content-tertiary">
            Showing {startIndex + 1}-
            {Math.min(startIndex + ITEMS_PER_PAGE, filteredDestinations.length)}{" "}
            of {filteredDestinations.length} destinations
          </p>
        </div>

        {/* Destinations Slider - Mobile Only */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {filteredDestinations.map(
              (destination: Destination, index: number) => (
                <SwiperSlide key={destination.id || destination.slug}>
                  <DestinationCard destination={destination} index={index} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
