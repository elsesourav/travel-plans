import { destinations } from "@/data/destinations";
import type { Destination } from "@/data/types";
import { AnimatePresence, motion } from "framer-motion";
import { NavArrowDown } from "iconoir-react";
import { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DestinationCard } from "./DestinationCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const INITIAL_SHOW_COUNT = 6;

export function DestinationsSection() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleShowAll = () => {
    if (!showAll) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const visibleDestinations = showAll
    ? destinations
    : destinations.slice(0, INITIAL_SHOW_COUNT);

  const remainingCount = destinations.length - INITIAL_SHOW_COUNT;

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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
            Explore Destinations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6">
            {destinations.length} Incredible Places
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            From spiritual Varanasi to adventurous Ladakh, each destination
            offers a unique 7-day experience with detailed plans and budgets.
          </p>
        </motion.div>

        {/* Destinations List Layout - Tablet/Desktop */}
        <div className="hidden md:flex flex-col gap-8 md:gap-12">
          <AnimatePresence mode="sync">
            {visibleDestinations.map(
              (destination: Destination, index: number) => (
                <motion.div
                  key={destination.id}
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

          {/* Show More / Show Less Button */}
          {destinations.length > INITIAL_SHOW_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-4"
            >
              <button
                onClick={toggleShowAll}
                className="group flex items-center gap-3 px-8 py-4 bg-surface-secondary hover:bg-surface-tertiary border border-border-primary rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="font-semibold text-content-primary">
                  {showAll
                    ? "Show Less"
                    : `Show ${remainingCount} More Destinations`}
                </span>
                <motion.div
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors"
                >
                  <NavArrowDown className="w-5 h-5 text-primary-600 group-hover:text-white" />
                </motion.div>
              </button>
            </motion.div>
          )}
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
            {destinations.map((destination: Destination, index: number) => (
              <SwiperSlide key={destination.id}>
                <DestinationCard destination={destination} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
