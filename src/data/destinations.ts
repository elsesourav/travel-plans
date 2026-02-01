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
];

// Export type for convenience
export type { Destination } from "./types";
