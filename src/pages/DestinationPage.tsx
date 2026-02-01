import { Badge } from "@/components/ui";
import { destinations } from "@/data/destinations";
import type { CostItem, Destination, ItineraryDay } from "@/data/types";
import { cn, formatBudgetRange, formatCurrency } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  InfoCircle,
  MapPin,
  Wallet,
  WarningTriangle,
} from "iconoir-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeTab, setActiveTab] = useState<"itinerary" | "costs" | "tips">(
    "itinerary",
  );

  const destination = destinations.find((d: Destination) => d.slug === slug);

  if (!destination) {
    return <Navigate to="/" replace />;
  }

  const tabs = [
    { id: "itinerary" as const, label: "Day-by-Day" },
    { id: "costs" as const, label: "Cost Breakdown" },
    { id: "tips" as const, label: "Tips & Info" },
  ];

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={true}
          pagination={{ clickable: true }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="h-full hero-slider"
          loop={(destination.images || []).length > 1}
        >
          {(
            destination.images || [
              `/images/destinations/${destination.slug}.jpg`,
            ]
          ).map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`${destination.name || destination.destination} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-24 left-4 md:left-8 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back</span>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="default" className="bg-white/90 text-gray-900">
                {destination.duration || "7 Days"}
              </Badge>
              {destination.permitRequired && (
                <Badge variant="amber">Permit Required</Badge>
              )}
              {(
                destination.tags || [
                  destination.state,
                  destination.landscape.split(",")[0].trim(),
                ]
              )
                .slice(0, 3)
                .map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-white/30 text-white"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {destination.name || destination.destination}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{destination.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{destination.bestSeason}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                <span className="font-semibold">
                  {formatBudgetRange(
                    destination.totalBudget || {
                      min: destination.budgetBreakdown.total.low,
                      max: destination.budgetBreakdown.total.typical,
                    },
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail Gallery */}
      <div className="bg-surface-secondary py-4">
        <div className="container-custom">
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={12}
            freeMode
            watchSlidesProgress
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
            }}
            className="thumbs-gallery"
          >
            {(
              destination.images || [
                `/images/destinations/${destination.slug}.jpg`,
              ]
            ).map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full aspect-video object-cover rounded-lg cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Content Tabs */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-content-secondary max-w-3xl mb-12"
          >
            {destination.description}
          </motion.p>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap",
                  activeTab === tab.id
                    ? "bg-primary-500 text-white"
                    : "bg-surface-secondary text-content-secondary hover:bg-surface-tertiary",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "itinerary" && (
              <motion.div
                key="itinerary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ItineraryTab itinerary={destination.itinerary} />
              </motion.div>
            )}

            {activeTab === "costs" && (
              <motion.div
                key="costs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CostsTab
                  costs={destination.costs || []}
                  totalBudget={
                    destination.totalBudget || {
                      min: destination.budgetBreakdown?.total?.low || 0,
                      max: destination.budgetBreakdown?.total?.typical || 0,
                    }
                  }
                  groupCosts={destination.groupCosts}
                />
              </motion.div>
            )}

            {activeTab === "tips" && (
              <motion.div
                key="tips"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TipsTab
                  tips={destination.tips || destination.bookingTips}
                  highlights={
                    destination.highlights ||
                    destination.keyAttractions
                      ?.slice(0, 5)
                      .map((a: string) => a)
                  }
                  attractions={
                    destination.attractions || destination.keyAttractions
                  }
                  permitRequired={
                    destination.permitRequired ??
                    destination.permits?.toLowerCase().includes("required")
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Navigation to Other Destinations */}
      <section className="py-12 bg-surface-secondary">
        <div className="container-custom">
          <h3 className="font-display text-2xl font-bold text-content-primary mb-6">
            Explore More Destinations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations
              .filter(
                (d: Destination) =>
                  (d.id || d.slug) !== (destination.id || destination.slug),
              )
              .slice(0, 4)
              .map((dest: Destination) => (
                <Link
                  key={dest.id || dest.slug}
                  to={`/destination/${dest.slug}`}
                  className="group relative overflow-hidden rounded-xl aspect-4/3"
                >
                  <img
                    src={
                      (dest.images || [
                        `/images/destinations/${dest.slug}.jpg`,
                      ])[0]
                    }
                    alt={dest.name || dest.destination}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="font-semibold text-white">
                      {dest.name || dest.destination}
                    </div>
                    <div className="text-sm text-white/70">{dest.state}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components
function ItineraryTab({ itinerary }: { itinerary: ItineraryDay[] }) {
  return (
    <div className="space-y-6">
      {itinerary.map((day: ItineraryDay, index: number) => (
        <motion.div
          key={day.day}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border-primary" />
          <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-surface-primary" />

          {/* Content */}
          <div className="bg-surface-secondary rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
                Day {day.day}
              </span>
              <h4 className="font-semibold text-lg text-content-primary">
                {day.title}
              </h4>
            </div>

            <ul className="space-y-2">
              {(day.activities || (day.plan ? [day.plan] : [])).map(
                (activity: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-content-secondary">{activity}</span>
                  </li>
                ),
              )}
            </ul>

            {day.overnight && (
              <div className="mt-4 flex items-center gap-2 text-sm text-content-tertiary">
                <Clock className="w-4 h-4" />
                <span>Overnight: {day.overnight}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CostsTab({
  costs,
  totalBudget,
  groupCosts,
}: {
  costs: CostItem[];
  totalBudget: { min: number; max: number };
  groupCosts?: { costs: CostItem[]; perPerson: { min: number; max: number } };
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Solo Budget */}
      <div className="bg-surface-secondary rounded-2xl p-6">
        <h4 className="font-display text-xl font-bold text-content-primary mb-6">
          Solo Traveler Budget
        </h4>
        <div className="space-y-4">
          {costs.map((item: CostItem, index: number) => (
            <motion.div
              key={item.item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between py-3 border-b border-border-primary last:border-0"
            >
              <span className="text-content-secondary">{item.item}</span>
              <span className="font-semibold text-content-primary">
                {formatCurrency(item.amount)}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t-2 border-primary-200 flex items-center justify-between">
          <span className="font-semibold text-lg text-content-primary">
            Total Budget
          </span>
          <span className="font-bold text-2xl text-primary-600">
            {formatBudgetRange(totalBudget)}
          </span>
        </div>
      </div>

      {/* Group Budget (if available) */}
      {groupCosts && (
        <div className="bg-linear-to-br from-secondary-50 to-primary-50 rounded-2xl p-6">
          <h4 className="font-display text-xl font-bold text-content-primary mb-2">
            Group of 6 Budget
          </h4>
          <p className="text-sm text-content-tertiary mb-6">
            Per person cost when traveling in a group
          </p>
          <div className="space-y-4">
            {groupCosts.costs.map((item: CostItem, index: number) => (
              <motion.div
                key={item.item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between py-3 border-b border-white/50 last:border-0"
              >
                <span className="text-content-secondary">{item.item}</span>
                <span className="font-semibold text-content-primary">
                  {formatCurrency(item.amount)}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t-2 border-secondary-300 flex items-center justify-between">
            <span className="font-semibold text-lg text-content-primary">
              Per Person
            </span>
            <span className="font-bold text-2xl text-secondary-600">
              {formatBudgetRange(groupCosts.perPerson)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function TipsTab({
  tips,
  highlights,
  attractions,
  permitRequired,
}: {
  tips: string[];
  highlights: string[];
  attractions: string[];
  permitRequired: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Tips */}
      <div className="bg-surface-secondary rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
            <WarningTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <h4 className="font-display text-xl font-bold text-content-primary">
            Travel Tips
          </h4>
        </div>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
              <span className="text-sm text-content-secondary">{tip}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Highlights */}
      <div className="bg-surface-secondary rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h4 className="font-display text-xl font-bold text-content-primary">
            Highlights
          </h4>
        </div>
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-1" />
              <span className="text-sm text-content-secondary">
                {highlight}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Attractions & Info */}
      <div className="bg-surface-secondary rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <InfoCircle className="w-5 h-5 text-blue-600" />
          </div>
          <h4 className="font-display text-xl font-bold text-content-primary">
            Must Visit
          </h4>
        </div>
        <ul className="space-y-3">
          {attractions.map((attraction, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
              <span className="text-sm text-content-secondary">
                {attraction}
              </span>
            </motion.li>
          ))}
        </ul>

        {permitRequired && (
          <div className="mt-6 p-4 bg-amber-50 rounded-xl">
            <div className="flex items-center gap-2 text-amber-700 font-medium mb-1">
              <WarningTriangle className="w-4 h-4" />
              Permit Required
            </div>
            <p className="text-sm text-amber-600">
              This destination requires a special permit. Apply well in advance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
