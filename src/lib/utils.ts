import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
