import type { Destination } from "./types";

import { andaman_islands } from "./destinations/andaman-islands";
import { araku_valley } from "./destinations/araku-valley";
import { ayodhya } from "./destinations/ayodhya";
import { bir_billing } from "./destinations/bir-billing";
import { bodh_gaya } from "./destinations/bodh-gaya";
import { chakrata } from "./destinations/chakrata";
import { chopta } from "./destinations/chopta";
import { daringbadi } from "./destinations/daringbadi";
import { gokarna } from "./destinations/gokarna";
import { hampi } from "./destinations/hampi";
import { khonoma } from "./destinations/khonoma";
import { kinnaur } from "./destinations/kinnaur";
import { konark } from "./destinations/konark";
import { leh_ladakh } from "./destinations/leh-ladakh";
import { majuli } from "./destinations/majuli";
import { mandarmani } from "./destinations/mandarmani";
import { mcleod_ganj } from "./destinations/mcleod-ganj";
import { pelling } from "./destinations/pelling";
import { puri } from "./destinations/puri";
import { shantiniketan } from "./destinations/shantiniketan";
import { spiti_valley } from "./destinations/spiti-valley";
import { sundarbans } from "./destinations/sundarbans";
import { tawang } from "./destinations/tawang";
import { tirthan_valley } from "./destinations/tirthan-valley";
import { tso_moriri } from "./destinations/tso-moriri";
import { ujjain } from "./destinations/ujjain";
import { valparai } from "./destinations/valparai";
import { varanasi } from "./destinations/varanasi";
import { yuksom } from "./destinations/yuksom";
import { ziro_valley } from "./destinations/ziro-valley";

// Image URLs for first 10 destinations
const getImages = (slug: string): string[] => {
  const imageMap: Record<string, string[]> = {
    varanasi: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200",
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200",
    ],
    hampi: [
      "https://images.unsplash.com/photo-1600100397608-71b5b3c39d52?w=1200",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200",
      "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=1200",
    ],
    "bodh-gaya": [
      "https://images.unsplash.com/photo-1591018653367-4e9f06bb8788?w=1200",
      "https://images.unsplash.com/photo-1624461899517-90d24099a5e6?w=1200",
      "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200",
    ],
    ayodhya: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
      "https://images.unsplash.com/photo-1574863959826-8f4cd9c69c9b?w=1200",
    ],
    sundarbans: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200",
      "https://images.unsplash.com/photo-1544735716-ea9ef790f501?w=1200",
      "https://images.unsplash.com/photo-1585063560546-28db14a0a7d5?w=1200",
    ],
    puri: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200",
    ],
    gokarna: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
    ],
    shantiniketan: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200",
      "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=1200",
    ],
    mandarmani: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200",
    ],
    ujjain: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
      "https://images.unsplash.com/photo-1574863959826-8f4cd9c69c9b?w=1200",
      "https://images.unsplash.com/photo-1609947017136-9daf32a45e19?w=1200",
    ],
  };
  return imageMap[slug] || [`/images/destinations/${slug}.jpg`];
};

// Transform destination to add component-compatible fields
const transformDestination = (dest: Destination): Destination => ({
  ...dest,
  id: dest.slug,
  name: dest.destination,
  images: getImages(dest.slug),
  duration: "7 Days / 6 Nights",
  permitRequired:
    dest.permits.toLowerCase().includes("required") ||
    dest.permits.toLowerCase().includes("ilp"),
  totalBudget: {
    min: dest.budgetBreakdown.total.low,
    max: dest.budgetBreakdown.total.typical,
  },
  tags: [
    dest.state,
    dest.landscape.split(",")[0].trim(),
    dest.bestSeason.split(" ")[0],
  ],
  highlights: dest.keyAttractions
    .slice(0, 5)
    .map((attr) => attr.split("—")[0].trim()),
  attractions: dest.keyAttractions,
  tips: dest.bookingTips,
  costs: dest.budgetBreakdown.perPerson.map((item) => ({
    item: item.item,
    amount: item.typical,
  })),
});

// Array of all destinations
export const destinations: Destination[] = [
  varanasi,
  hampi,
  bodh_gaya,
  ayodhya,
  sundarbans,
  puri,
  gokarna,
  shantiniketan,
  mandarmani,
  ujjain,
  konark,
  majuli,
  yuksom,
  khonoma,
  ziro_valley,
  tirthan_valley,
  chopta,
  daringbadi,
  tawang,
  spiti_valley,
  mcleod_ganj,
  bir_billing,
  chakrata,
  pelling,
  andaman_islands,
  leh_ladakh,
  tso_moriri,
  kinnaur,
  araku_valley,
  valparai,
].map(transformDestination);

// Export type for convenience
export type { Destination } from "./types";
