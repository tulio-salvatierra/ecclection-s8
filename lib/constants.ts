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
  facebook: "https://facebook.com/ecclection",
  tiktok: "https://tiktok.com/ecclection",
  email: "EcclectionChicago@gmail.com",
  phone: "tel:+1 (773) 951-7992",
  website: "https://ecclection.com",
};

export function getSocialUrl(key: SocialKey): string {
  return SOCIAL_URLS[key];
}


