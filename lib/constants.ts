// lib/constants.ts
// Centralized site-wide constants

export type SocialKey =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'email'
  | 'phone'
  | 'website';

export const SOCIAL_URLS: Record<SocialKey, string> = {
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
  // Opening hours - Update these based on actual GMB hours
  // Format: Day of week -> { opens: "HH:MM", closes: "HH:MM" } or null for closed
  openingHours: {
    Monday: { opens: "10:00", closes: "18:00" },
    Tuesday: { opens: "10:00", closes: "18:00" },
    Wednesday: { opens: "10:00", closes: "18:00" },
    Thursday: { opens: "10:00", closes: "18:00" },
    Friday: { opens: "10:00", closes: "18:00" },
    Saturday: { opens: "10:00", closes: "18:00" },
    Sunday: null, // Closed on Sunday - update if different
  },
} as const;

