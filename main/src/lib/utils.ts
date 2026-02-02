import type { Destination, PlaceImage } from "../data/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Image helper functions for new PlaceImage[] structure
export function getDestinationImage(
  dest: Destination,
  placeIndex = 0,
  urlIndex = 0,
): string {
  if (dest.images?.length) {
    const placeImage = dest.images[placeIndex] || dest.images[0];
    return (
      placeImage.urls[urlIndex] ||
      placeImage.urls[0] ||
      `/images/destinations/${dest.slug}.jpg`
    );
  }
  return `/images/destinations/${dest.slug}.jpg`;
}

export function getAllImageUrls(dest: Destination): string[] {
  return dest.images?.flatMap((p: PlaceImage) => p.urls) || [];
}

export function getImagesByPlace(
  dest: Destination,
): { placeName: string; url: string }[] {
  return (
    dest.images?.flatMap((p: PlaceImage) =>
      p.urls.map((url) => ({ placeName: p.placeName, url })),
    ) || []
  );
}

// Budget helper functions for new budgetBreakdown structure
export function getMinBudget(dest: Destination): number {
  return (
    dest.totalBudget?.min || dest.budgetBreakdown?.perPerson?.total?.low || 0
  );
}

export function getMaxBudget(dest: Destination): number {
  return (
    dest.totalBudget?.max ||
    dest.budgetBreakdown?.perPerson?.total?.typical ||
    0
  );
}

export function getBudgetRange(dest: Destination): {
  min: number;
  max: number;
} {
  return {
    min: getMinBudget(dest),
    max: getMaxBudget(dest),
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatBudgetRange(budget: {
  min: number;
  max: number;
}): string {
  const formatK = (n: number) => {
    if (n >= 1000) {
      return `₹${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`;
    }
    return `₹${n}`;
  };
  return `${formatK(budget.min)}–${formatK(budget.max)}`;
}
