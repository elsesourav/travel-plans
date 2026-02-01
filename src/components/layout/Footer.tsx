import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  NavArrowDown,
  Twitter,
} from "iconoir-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/elsesourav",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/elsesourav",
    label: "X (Twitter)",
  },
  { icon: Github, href: "https://github.com/elsesourav", label: "GitHub" },
  {
    icon: Facebook,
    href: "https://facebook.com/elsesourav",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/elsesourav",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                <NavArrowDown className="w-5 h-5 text-white rotate-45" />
              </div>
              <span className="font-display text-xl font-bold">
                TravelPlans
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover incredible travel destinations with detailed plans,
              budgets, and insider tips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/#destinations"
                  className="hover:text-white transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="/#comparison"
                  className="hover:text-white transition-colors"
                >
                  Compare Plans
                </a>
              </li>
              <li>
                <a href="/#tips" className="hover:text-white transition-colors">
                  Travel Tips
                </a>
              </li>
              <li>
                <a
                  href="/#seasons"
                  className="hover:text-white transition-colors"
                >
                  Best Seasons
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p className="mt-2">
            © {new Date().getFullYear()} elsesourav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
