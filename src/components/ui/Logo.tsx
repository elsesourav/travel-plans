import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

export function Logo({ className, size = "md", variant = "full" }: LogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-2xl" },
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/favicon.png"
        alt="Travel Plans Logo"
        className={cn(sizes[size].icon, "object-contain")}
      />

      {variant === "full" && (
        <span
          className={cn("font-bold tracking-tight font-sans", sizes[size].text)}
        >
          Travel Plans
        </span>
      )}
    </div>
  );
}

// Standalone SVG for favicon and other uses
export function LogoSVG() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
    >
      <defs>
        <linearGradient
          id="faviconGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        fill="url(#faviconGradient)"
      />
      <path
        d="M10 34 L18 20 L22 26 L28 16 L38 34 Z"
        fill="white"
        strokeLinejoin="round"
      />
      <circle cx="35" cy="14" r="5" fill="white" fillOpacity="0.95" />
      <path
        d="M14 34 Q24 28 34 34"
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
