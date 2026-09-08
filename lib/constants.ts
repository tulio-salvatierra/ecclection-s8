// lib/constants.ts
// Centralized site-wide constants

export type SocialKey =
  | 'googleMaps'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'email'
  | 'phone'
  | 'website';

export const SOCIAL_URLS: Record<SocialKey, string> = {
  googleMaps: "https://maps.app.goo.gl/js5sUj7cUN34N1dy9",
  instagram: "https://instagram.com/Ecclectionchicago",
  facebook: "https://www.facebook.com/profile.php?id=61553781430144",
  tiktok: "https://tiktok.com/@ecclection",
  email: "EcclectionChicago@gmail.com",
  phone: "tel:+1 (773) 951-7992",
  website: "https://ecclection.com",
};

export function getSocialUrl(key: SocialKey): string {
  return SOCIAL_URLS[key];
}

// Business information
export const BUSINESS_INFO = {
  name: "Ecclection",
  address: {
    street: "6059 W Irving Park Rd",
    city: "Chicago",
    state: "IL",
    zip: "60634",
    country: "US",
  },
  coordinates: {
    latitude: "41.9528405",
    longitude: "-87.7787167",
  },
  phone: "+1 (773) 951-7992",
  phoneFormatted: "(773) 951-7992",
  email: "EcclectionChicago@gmail.com",
  // Opening hours — single source of truth for store hours across the whole site.
  // Feeds the schema.org LocalBusiness JSON-LD (layout.tsx) AND the human-readable
  // hours shown in Footer.tsx / Contact.tsx via getGroupedHoursDisplay() below.
  // Confirmed with Tulio 2026-09-08. Update here only — never hardcode hours elsewhere.
  openingHours: {
    Monday: null,
    Tuesday: null,
    Wednesday: { opens: "12:00", closes: "18:00" },
    Thursday: { opens: "12:00", closes: "18:00" },
    Friday: { opens: "12:00", closes: "18:00" },
    Saturday: { opens: "11:00", closes: "17:00" },
    Sunday: { opens: "11:00", closes: "17:00" },
  },
} as const;

type DayHours = { opens: string; closes: string } | null;

const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function formatTime(time: string): string {
  const [hStr, mStr] = time.split(":");
  let hour = parseInt(hStr, 10);
  const period = hour >= 12 ? "pm" : "am";
  hour = hour % 12 || 12;
  return mStr === "00" ? `${hour}${period}` : `${hour}:${mStr}${period}`;
}

function hoursKey(hours: DayHours): string {
  return hours ? `${hours.opens}-${hours.closes}` : "closed";
}

/**
 * Groups consecutive days with identical hours into human-friendly lines, e.g.
 * ["Monday & Tuesday: Closed", "Wednesday - Friday: 12pm - 6pm", "Saturday & Sunday: 11am - 5pm"]
 * Derived entirely from BUSINESS_INFO.openingHours — the only place hours are ever edited.
 */
export function getGroupedHoursDisplay(): string[] {
  const groups: { days: string[]; hours: DayHours }[] = [];

  for (const day of DAY_ORDER) {
    const hours = BUSINESS_INFO.openingHours[day];
    const last = groups[groups.length - 1];
    if (last && hoursKey(last.hours) === hoursKey(hours)) {
      last.days.push(day);
    } else {
      groups.push({ days: [day], hours });
    }
  }

  return groups.map(({ days, hours }) => {
    const label =
      days.length === 1
        ? days[0]
        : days.length === 2
        ? `${days[0]} & ${days[1]}`
        : `${days[0]} - ${days[days.length - 1]}`;
    const hoursLabel = hours
      ? `${formatTime(hours.opens)} - ${formatTime(hours.closes)}`
      : "Closed";
    return `${label}: ${hoursLabel}`;
  });
}

