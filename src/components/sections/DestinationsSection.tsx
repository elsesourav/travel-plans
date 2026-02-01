import { destinations } from "@/data/destinations";
import type { Destination } from "@/data/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cloud,
  Filter,
  Flower,
  Leaf,
  NavArrowLeft,
  NavArrowRight,
  SeaWaves,
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

// Filter options
const SEASON_OPTIONS = [
  { value: "all", label: "All Seasons" },
  { value: "winter", label: "Winter (Oct-Mar)" },
  { value: "summer", label: "Summer (Apr-Jun)" },
  { value: "monsoon", label: "Monsoon (Jul-Sep)" },
];

const PRICE_OPTIONS = [
  { value: "all", label: "All Budgets" },
  { value: "5000", label: "Under ₹5,000" },
  { value: "10000", label: "Under ₹10,000" },
  { value: "15000", label: "Under ₹15,000" },
  { value: "20000", label: "Under ₹20,000" },
  { value: "above", label: "₹20,000+" },
];

const LANDSCAPE_OPTIONS = [
  { value: "all", label: "All Types", icon: Filter },
  { value: "mountain", label: "Mountains", icon: Leaf },
  { value: "beach", label: "Beach & Coastal", icon: SeaWaves },
  { value: "spiritual", label: "Spiritual", icon: Flower },
  { value: "nature", label: "Nature & Forest", icon: Cloud },
  { value: "desert", label: "Desert", icon: Leaf },
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
  const [seasonFilter, setSeasonFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [landscapeFilter, setLandscapeFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Filter destinations
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      return (
        matchesSeason(dest, seasonFilter) &&
        matchesPrice(dest, priceFilter) &&
        matchesLandscape(dest, landscapeFilter)
      );
    });
  }, [seasonFilter, priceFilter, landscapeFilter]);

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

  const activeFiltersCount = [
    seasonFilter,
    priceFilter,
    landscapeFilter,
  ].filter((f) => f !== "all").length;

  const clearFilters = () => {
    setSeasonFilter("all");
    setPriceFilter("all");
    setLandscapeFilter("all");
    setCurrentPage(1);
  };

  // Reset page when filters change
  const handleFilterChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string,
  ) => {
    setter(value);
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-surface-secondary rounded-xl border border-border-primary"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-content-secondary hover:text-primary-600"
              >
                <Xmark className="w-4 h-4" />
                Clear all
              </button>
            )}
          </div>

          {/* Filter Controls */}
          <div
            className={`${showFilters ? "block" : "hidden"} md:block bg-surface-secondary rounded-2xl p-4 md:p-6 border border-border-primary`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-end">
              {/* Season Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-content-secondary mb-2">
                  Best Season
                </label>
                <select
                  value={seasonFilter}
                  onChange={(e) =>
                    handleFilterChange(setSeasonFilter, e.target.value)
                  }
                  className="w-full px-4 py-3 bg-surface-primary border border-border-primary rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {SEASON_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-content-secondary mb-2">
                  Budget Range
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) =>
                    handleFilterChange(setPriceFilter, e.target.value)
                  }
                  className="w-full px-4 py-3 bg-surface-primary border border-border-primary rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {PRICE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Landscape Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-content-secondary mb-2">
                  Landscape Type
                </label>
                <select
                  value={landscapeFilter}
                  onChange={(e) =>
                    handleFilterChange(setLandscapeFilter, e.target.value)
                  }
                  className="w-full px-4 py-3 bg-surface-primary border border-border-primary rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {LANDSCAPE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters - Desktop */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="hidden md:flex items-center gap-2 px-4 py-3 text-sm text-content-secondary hover:text-primary-600 transition-colors"
                >
                  <Xmark className="w-4 h-4" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Landscape Quick Filters - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-primary">
              {LANDSCAPE_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isActive = landscapeFilter === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleFilterChange(setLandscapeFilter, option.value)
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary-500 text-white"
                        : "bg-surface-primary border border-border-primary text-content-secondary hover:border-primary-300 hover:text-primary-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {option.label}
                  </button>
                );
              })}
            </div>
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
