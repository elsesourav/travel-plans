export interface MultilingualInfo {
  en: string;
  hi: string;
  bn: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface BudgetItem {
  item: string;
  low: number;
  typical: number;
  notes?: string;
}

export interface BudgetTotal {
  low: number;
  typical: number;
  typicalRange?: string;
}

export interface BudgetBreakdown {
  perPerson: BudgetItem[];
  total: BudgetTotal;
}

export interface GroupBreakdownItem {
  category: string;
  perPerson: string;
}

export interface GroupBudget {
  breakdown: GroupBreakdownItem[];
  total: string;
}

export interface Destination {
  // Primary fields (used in data files)
  destination: string;
  state: string;
  tagline: string;
  info?: MultilingualInfo;
  shortDescription: string;
  description: string;
  landscape: string;
  coordinates: Coordinates;
  permits: string;
  bestSeason: string;
  seasonNote: string;
  keyAttractions: string[];
  itinerary: ItineraryDay[];
  budgetBreakdown: BudgetBreakdown;
  groupOf6?: GroupBudget;
  bookingTips: string[];
  slug: string;

  // Alias fields for component compatibility
  id?: string;
  name?: string;
  images?: string[];
  duration?: string;
  permitRequired?: boolean;
  totalBudget?: { min: number; max: number };
  groupCosts?: {
    costs: CostItem[];
    perPerson: { min: number; max: number };
  };
  tags?: string[];
  highlights?: string[];
  attractions?: string[];
  costs?: CostItem[];
  tips?: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  plan?: string;
  activities?: string[];
  overnight?: string;
}

export interface CostItem {
  item: string;
  amount: number;
}
