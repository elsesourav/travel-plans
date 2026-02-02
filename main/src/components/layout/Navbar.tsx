import { Button, Input, Logo } from "../ui";
import { destinations } from "../../data/destinations";
import type { Destination } from "../../data/types";
import { cn, getDestinationImage } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, Xmark } from "iconoir-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Compare", href: "/compare" },
  { label: "Tips", href: "/tips" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Memoize search results to avoid cascading renders
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return destinations.filter(
      (dest: Destination) =>
        (dest.name || dest.destination).toLowerCase().includes(query) ||
        dest.state.toLowerCase().includes(query) ||
        (dest.tags || []).some((tag: string) =>
          tag.toLowerCase().includes(query),
        ) ||
        dest.shortDescription.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  // Reset selected index when search results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    return () => {
      setIsMobileMenuOpen(false);
      setIsSearchOpen(false);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSelect = useCallback(
    (slug: string) => {
      navigate(`/destination/${slug}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setSelectedIndex(0);
    },
    [navigate],
  );

  // Keyboard shortcuts: Cmd+K / Ctrl+K to open search, Escape to close, Enter to select, Arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
        setIsMobileMenuOpen(false);
      }

      // When search is open
      if (isSearchOpen) {
        // Escape to close
        if (e.key === "Escape") {
          e.preventDefault();
          setIsSearchOpen(false);
          setSearchQuery("");
          setSelectedIndex(0);
        }

        // Enter to select first/current result
        if (e.key === "Enter" && searchResults.length > 0) {
          e.preventDefault();
          handleSearchSelect(
            searchResults[selectedIndex]?.slug || searchResults[0].slug,
          );
        }

        // Arrow keys to navigate results
        if (e.key === "ArrowDown" && searchResults.length > 0) {
          e.preventDefault();
          setSelectedIndex((prev) =>
            Math.min(prev + 1, searchResults.length - 1),
          );
        }
        if (e.key === "ArrowUp" && searchResults.length > 0) {
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
        }
      }

      // Escape to close mobile menu
      if (isMobileMenuOpen && e.key === "Escape") {
        e.preventDefault();
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isSearchOpen,
    isMobileMenuOpen,
    searchResults,
    selectedIndex,
    handleSearchSelect,
  ]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Logo
                variant="full"
                size="md"
                className={cn(
                  "transition-colors",
                  isScrolled ? "text-content-primary" : "text-white",
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href.startsWith("/") && !link.href.includes("#")
                    ? location.pathname === link.href
                    : location.pathname === "/" && link.href.includes("#");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary-500 relative",
                      isScrolled ? "text-text-secondary" : "text-white/90",
                      isActive && "text-primary-500",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Search & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant={isScrolled ? "outline" : "ghost"}
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className={cn(
                  !isScrolled && "text-white border-white/30 hover:bg-white/10",
                )}
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={cn(
                  !isScrolled &&
                    "border-white text-white hover:bg-white hover:text-primary-600",
                )}
                onClick={() => {
                  if (location.pathname === "/") {
                    // Already on home, just scroll to destinations
                    document
                      .getElementById("destinations")
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    // Navigate to home and then scroll
                    navigate("/#destinations");
                  }
                }}
              >
                Plan Trip
              </Button>
            </div>

            {/* Mobile Search & Menu Buttons */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isScrolled
                    ? "text-text-primary hover:bg-gray-100"
                    : "text-white hover:bg-white/10",
                )}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isScrolled
                    ? "text-text-primary hover:bg-gray-100"
                    : "text-white hover:bg-white/10",
                )}
              >
                {isMobileMenuOpen ? (
                  <Xmark className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Search Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-4 border-b border-border-primary">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-tertiary" />
                    <Input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search destinations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-20 py-4 text-lg border-0 focus:ring-0 bg-surface-secondary rounded-xl"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium text-content-tertiary bg-surface-tertiary rounded">
                        Esc
                      </kbd>
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="p-1 hover:bg-surface-tertiary rounded-lg transition-colors"
                      >
                        <Xmark className="w-5 h-5 text-content-tertiary" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {searchQuery.trim() === "" ? (
                    <div className="p-6 text-center text-content-tertiary">
                      <p className="text-sm">
                        Start typing to search destinations
                      </p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {["Spiritual", "Beach", "Mountain", "Adventure"].map(
                          (tag) => (
                            <button
                              key={tag}
                              onClick={() => setSearchQuery(tag)}
                              className="px-3 py-1.5 bg-surface-secondary text-content-secondary text-sm rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {tag}
                            </button>
                          ),
                        )}
                      </div>
                      <p className="mt-4 text-xs text-content-tertiary/70 hidden sm:block">
                        <kbd className="px-1.5 py-0.5 bg-surface-tertiary rounded text-[10px]">
                          ⌘
                        </kbd>{" "}
                        +{" "}
                        <kbd className="px-1.5 py-0.5 bg-surface-tertiary rounded text-[10px]">
                          K
                        </kbd>{" "}
                        to search anytime
                      </p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="p-2">
                      {searchResults.map((dest: Destination, index: number) => (
                        <button
                          key={dest.id}
                          onClick={() => handleSearchSelect(dest.slug)}
                          className={cn(
                            "w-full flex items-center gap-4 p-3 rounded-xl transition-colors text-left",
                            index === selectedIndex
                              ? "bg-primary-50 ring-1 ring-primary-200"
                              : "hover:bg-surface-secondary",
                          )}
                        >
                          <img
                            src={getDestinationImage(dest)}
                            alt={dest.name || dest.destination}
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-content-primary">
                              {dest.name || dest.destination}
                            </div>
                            <div className="text-sm text-content-tertiary truncate">
                              {dest.state} • {dest.duration || "7 Days"}
                            </div>
                          </div>
                          {index === selectedIndex && (
                            <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium text-primary-600 bg-primary-100 rounded">
                              ↵
                            </kbd>
                          )}
                        </button>
                      ))}
                      <div className="hidden sm:flex items-center justify-center gap-4 pt-3 pb-1 text-xs text-content-tertiary/70">
                        <span>
                          <kbd className="px-1 py-0.5 bg-surface-tertiary rounded text-[10px]">
                            ↑
                          </kbd>{" "}
                          <kbd className="px-1 py-0.5 bg-surface-tertiary rounded text-[10px]">
                            ↓
                          </kbd>{" "}
                          to navigate
                        </span>
                        <span>
                          <kbd className="px-1 py-0.5 bg-surface-tertiary rounded text-[10px]">
                            ↵
                          </kbd>{" "}
                          to select
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 text-center text-content-tertiary">
                      <p>No destinations found for "{searchQuery}"</p>
                      <p className="text-sm mt-1">
                        Try searching by name, state, or activity
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-x-4 top-20 z-40 md:hidden"
            >
              <div className="bg-white/80 backdrop-blur-2xl shadow-xl border border-white/50 rounded-2xl overflow-hidden ring-1 ring-black/5">
                <div className="p-4 space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive =
                      link.href.startsWith("/") && !link.href.includes("#")
                        ? location.pathname === link.href
                        : location.pathname === "/" && link.href.includes("#");
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 font-medium hover:bg-primary-50/80 rounded-xl transition-all active:scale-[0.98]",
                          isActive
                            ? "text-primary-600 bg-primary-50/50"
                            : "text-content-primary",
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        )}
                      </motion.a>
                    );
                  })}
                  <div className="pt-3 mt-2 border-t border-gray-200/50">
                    <Button
                      className="w-full"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/compare");
                      }}
                    >
                      Plan Your Trip
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
