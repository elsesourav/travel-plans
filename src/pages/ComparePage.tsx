import { destinations } from "@/data/destinations";
import type { Destination } from "@/data/types";
import {
  formatBudgetRange,
  getBudgetRange,
  getDestinationImage,
  getMinBudget,
} from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Filter, MapPin, SunLight, Wallet } from "iconoir-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const budgetFilters = [
  { label: "All", max: Infinity },
  { label: "Under ₹15K", max: 15000 },
  { label: "₹15K-30K", max: 30000, min: 15000 },
  { label: "₹30K+", min: 30000 },
];

const seasonFilters = ["All", "Winter", "Summer", "Monsoon", "Autumn"];

export function ComparePage() {
  const [budgetFilter, setBudgetFilter] = useState(0);
  const [seasonFilter, setSeasonFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "budget" | "duration">("name");

  const filteredDestinations = useMemo(() => {
    let filtered = [...destinations];

    // Budget filter
    const budget = budgetFilters[budgetFilter];
    if (budget.max !== Infinity || budget.min) {
      filtered = filtered.filter((d) => {
        const min = getMinBudget(d);
        if (budget.min && min < budget.min) return false;
        if (budget.max && budget.max !== Infinity && min > budget.max)
          return false;
        return true;
      });
    }

    // Season filter
    if (seasonFilter !== "All") {
      filtered = filtered.filter((d) =>
        d.bestSeason.toLowerCase().includes(seasonFilter.toLowerCase()),
      );
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "name") {
        return (a.name || a.destination).localeCompare(b.name || b.destination);
      } else if (sortBy === "budget") {
        return getMinBudget(a) - getMinBudget(b);
      } else {
        const aDays = parseInt(a.duration || "7") || 7;
        const bDays = parseInt(b.duration || "7") || 7;
        return aDays - bDays;
      }
    });

    return filtered;
  }, [budgetFilter, seasonFilter, sortBy]);

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              30+ Destinations
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Compare All Destinations
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              Find the perfect trip by comparing budgets, seasons, and
              experiences at a glance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-xl border-b border-border-primary py-3">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-content-secondary">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filters:</span>
            </div>

            {/* Budget Filter */}
            <div className="flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-content-tertiary" />
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(Number(e.target.value))}
                className="text-sm bg-surface-secondary border-0 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary-500"
              >
                {budgetFilters.map((f, i) => (
                  <option key={f.label} value={i}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Season Filter */}
            <div className="flex items-center gap-1.5">
              <SunLight className="w-4 h-4 text-content-tertiary" />
              <select
                value={seasonFilter}
                onChange={(e) => setSeasonFilter(e.target.value)}
                className="text-sm bg-surface-secondary border-0 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary-500"
              >
                {seasonFilters.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="text-sm text-content-tertiary hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "name" | "budget" | "duration")
                }
                className="text-sm bg-surface-secondary border-0 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary-500"
              >
                <option value="name">Name</option>
                <option value="budget">Budget</option>
                <option value="duration">Duration</option>
              </select>
            </div>

            {/* Results count */}
            <span className="text-sm text-content-tertiary">
              {filteredDestinations.length} results
            </span>
          </div>
        </div>
      </div>

      {/* Destinations Table */}
      <div className="container-custom py-6">
        <div className="bg-white rounded-xl border border-border-primary overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-2 px-4 py-3 bg-surface-secondary border-b border-border-primary text-xs font-semibold text-content-secondary uppercase tracking-wider">
            <div className="col-span-3">Destination</div>
            <div className="col-span-2">Budget</div>
            <div className="col-span-2">Duration</div>
            <div className="col-span-2">Season</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-1 text-center">Action</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border-primary">
            {filteredDestinations.map(
              (destination: Destination, index: number) => (
                <motion.div
                  key={destination.id || destination.slug}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: Math.min(index * 0.02, 0.2),
                  }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-2 px-4 py-3 hover:bg-surface-secondary/50 transition-colors"
                >
                  {/* Destination Info */}
                  <div className="col-span-1 md:col-span-3 flex items-center gap-3">
                    <img
                      src={getDestinationImage(destination)}
                      alt={destination.name || destination.destination}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-content-primary text-sm truncate">
                        {destination.name || destination.destination}
                      </h3>
                      <p className="text-xs text-content-tertiary flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {destination.state}
                      </p>
                    </div>
                  </div>

                  {/* Mobile: Inline details */}
                  <div className="md:hidden flex flex-wrap items-center gap-3 text-xs mt-2">
                    <span className="font-semibold text-primary-600">
                      {formatBudgetRange(getBudgetRange(destination))}
                    </span>
                    <span className="text-content-secondary">
                      {destination.duration || "7 Days"}
                    </span>
                    <span className="text-content-secondary">
                      {destination.bestSeason}
                    </span>
                    {destination.permitRequired && (
                      <span className="text-xs text-amber-500">Permit</span>
                    )}
                    <Link
                      to={`/destination/${destination.slug}`}
                      className="ml-auto text-primary-600 font-medium flex items-center gap-1"
                    >
                      View <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Desktop: Budget */}
                  <div className="hidden md:flex col-span-2 items-center">
                    <span className="font-semibold text-primary-600 text-sm">
                      {formatBudgetRange(getBudgetRange(destination))}
                    </span>
                  </div>

                  {/* Desktop: Duration */}
                  <div className="hidden md:flex col-span-2 items-center text-sm text-content-secondary">
                    {destination.duration || "7 Days"}
                  </div>

                  {/* Desktop: Season */}
                  <div className="hidden md:flex col-span-2 items-center text-sm text-content-secondary">
                    {destination.bestSeason}
                  </div>

                  {/* Desktop: Type/Tags */}
                  <div className="hidden md:flex col-span-2 items-center gap-1 flex-wrap">
                    {(
                      destination.tags || [
                        destination.landscape.split(",")[0].trim(),
                      ]
                    )
                      .slice(0, 1)
                      .map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-surface-tertiary rounded text-[10px] text-content-secondary"
                        >
                          {tag}
                        </span>
                      ))}

                    {destination.permitRequired && (
                      <span className="text-xs px-2 py-0.5 rounded-sm bg-amber-500">
                        Permit
                      </span>
                    )}
                  </div>

                  {/* Desktop: Action */}
                  <div className="hidden md:flex col-span-1 items-center justify-center">
                    <Link
                      to={`/destination/${destination.slug}`}
                      className="p-2 hover:bg-primary-50 rounded-lg text-primary-600 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-content-secondary">
              No destinations match your filters.
            </p>
            <button
              onClick={() => {
                setBudgetFilter(0);
                setSeasonFilter("All");
              }}
              className="mt-2 text-primary-600 hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
