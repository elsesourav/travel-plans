import { Facebook, Github, Instagram, Linkedin, Twitter } from "iconoir-react";
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
      <div className="container-custom py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start md:items-center">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-2">
              <img
                src="./favicon.png"
                alt="Travel Plans"
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-sans text-lg font-bold">Travel Plans</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed">
              Discover incredible Indian destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-2 md:mb-3">Quick Links</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400 text-xs">
              <li>
                <Link
                  to="/#destinations"
                  className="hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/compare"
                  className="hover:text-white transition-colors"
                >
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/tips" className="hover:text-white transition-colors">
                  Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="font-semibold text-sm mb-2 md:mb-3">Connect</h4>
            <div className="flex items-center gap-3 md:justify-end">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} elsesourav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
