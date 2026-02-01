export interface MultilingualInfo {
  en: string;
  hi: string;
  bn: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: string;
  tagline: string;
  shortDescription: string;
  description: string;
  coordinates: string;
  landscape: string;
  permits: string;
  permitRequired: boolean;
  duration: string;
  totalBudget: { min: number; max: number };
  groupCosts?: {
    costs: CostItem[];
    perPerson: { min: number; max: number };
  };
  bestSeason: string;
  seasonNote: string;
  images: string[];
  tags: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  costs: CostItem[];
  tips: string[];
  attractions: string[];
  info?: MultilingualInfo;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  overnight?: string;
}

export interface CostItem {
  item: string;
  amount: number;
}
