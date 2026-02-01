import { Button, Input, Logo } from "@/components/ui";
import { destinations } from "@/data/destinations";
import type { Destination } from "@/data/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, Xmark } from "iconoir-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Compare", href: "/#comparison" },
  { label: "Tips", href: "/#tips" },
  { label: "Seasons", href: "/#seasons" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Memoize search results to avoid cascading renders
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return destinations.filter(
      (dest: Destination) =>
        dest.name.toLowerCase().includes(query) ||
        dest.state.toLowerCase().includes(query) ||
        dest.tags.some((tag: string) => tag.toLowerCase().includes(query)) ||
        dest.shortDescription.toLowerCase().includes(query),
    );
  }, [searchQuery]);

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

  const handleSearchSelect = (slug: string) => {
    navigate(`/destination/${slug}`);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-500",
                    isScrolled ? "text-text-secondary" : "text-white/90",
                  )}
                >
                  {link.label}
                </a>
              ))}
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
                  document
                    .getElementById("destinations")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Plan Trip
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
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
                      placeholder="Search destinations, states, or activities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-12 py-4 text-lg border-0 focus:ring-0 bg-surface-secondary rounded-xl"
                    />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-surface-tertiary rounded-lg transition-colors"
                    >
                      <Xmark className="w-5 h-5 text-content-tertiary" />
                    </button>
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
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="p-2">
                      {searchResults.map((dest: Destination) => (
                        <button
                          key={dest.id}
                          onClick={() => handleSearchSelect(dest.slug)}
                          className="w-full flex items-center gap-4 p-3 hover:bg-surface-secondary rounded-xl transition-colors text-left"
                        >
                          <img
                            src={dest.images[0]}
                            alt={dest.name}
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-content-primary">
                              {dest.name}
                            </div>
                            <div className="text-sm text-content-tertiary truncate">
                              {dest.state} • {dest.duration}
                            </div>
                          </div>
                          <div className="text-sm font-medium text-primary-600">
                            View →
                          </div>
                        </button>
                      ))}
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl shadow-lg border-t border-border mx-4 rounded-2xl overflow-hidden">
              <div className="p-4 space-y-2">
                {/* Mobile Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-content-tertiary" />
                  <Input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-surface-secondary border-0"
                  />
                </div>

                {/* Mobile Search Results */}
                {searchQuery.trim() && searchResults.length > 0 && (
                  <div className="mb-4 space-y-1">
                    {searchResults.slice(0, 3).map((dest: Destination) => (
                      <button
                        key={dest.id}
                        onClick={() => handleSearchSelect(dest.slug)}
                        className="w-full flex items-center gap-3 p-2 hover:bg-surface-secondary rounded-lg transition-colors text-left"
                      >
                        <img
                          src={dest.images[0]}
                          alt={dest.name}
                          className="w-10 h-8 object-cover rounded"
                        />
                        <div>
                          <div className="font-medium text-sm text-content-primary">
                            {dest.name}
                          </div>
                          <div className="text-xs text-content-tertiary">
                            {dest.state}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-text-primary hover:bg-primary-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-border">
                  <Button className="w-full mt-2">Plan Your Trip</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
