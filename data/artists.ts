export interface ArtistCard {
  id?: string | number;
  name?: string;
  title?: string;
  specialty?: string;
  bio?: string;
  description?: string;
  text?: string;
  image?: string;
  featured?: boolean;
  social?: {
    instagram?: string;
    website?: string;
    email?: string;
  };
}

export const ARTISTS_DATA: ArtistCard[] = [
  {
    id: 1,
    name: "Smelly Melly",
    specialty: "Candle & Soap Maker",
    bio: "Melissa Berardi creates small-batch candles and soaps focused on health, beauty and self-care. Every bar and candle is 100% handmade with thoughtfully sourced ingredients so you can feel good about what you bring into your home and put on your skin.",
    image: "/smelly.jpg",
    featured: true,
    social: {
      instagram: "smellymellysoapsandcandles",
      website: "www.smellymellycandle.com",
    },
  },
  {
    id: 2,
    name: "Roth n Roll Stitch",
    specialty: "Stitcher",
    bio: "I hand stitch decorative hoops, jewelry, banners, patches and more — pieces inspired by nature, spirituality and music, made to bring a little bit of magic to your walls, clothes and altar spaces.",
    image: "/stitch.png",
    social: {
      instagram: "rothnrollstitch",
      website: "rothnrollstitch.com",
    },
  },
  {
    id: 3,
    name: "Barbara Ezell",
    specialty: "Unique Jewelry Designer",
    bio: "Stories inspire me! I am drawn to dreams from known and unknown realms and translate them into talismans you can wear. Meet my mystic muses and other one-of-a-kind creations.",
    image:
      "https://i.etsystatic.com/13508651/r/il/60d066/6703081534/il_1588xN.6703081534_dpum.jpg",
    featured: true,
    social: {
      instagram: "barbezell",
      website:
        "https://www.etsy.com/shop/Barbezell?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnv20TytU9A6_kZQAC6c-TlaI-w7S0lh-srIdA4A_SP7u9A_6BlMOyydmQS8I_aem_XYVNiYhVZ-4rqdBZf4TWiQ&dd_referrer=https%3A%2F%2Fl.instagram.com%2F#items",
    },
  },
  {
    id: 4,
    name: "Englewood Essentials",
    specialty: "Soaps & Body Care",
    bio: "Oh hey! My name is Kevin. With my sons Thelonius and Biafra, we set out to make self-care products that celebrate ingredients you can feel good putting on your body. Handmade by us in our neighborhood — Englewood on the South Side of Chicago — Englewood Essentials is Black owned and operated and is my way of creating a legacy with my sons while building something together.",
    image:
      "https://peanuttyxx.wordpress.com/wp-content/uploads/2024/02/374657104_17981156780452146_300428832772262792_n.jpg",
    social: {
      instagram: "englewoodessentials",
      website: "ENGLEWOODESSENTIAL.COM",
    },
  },
  {
    id: 5,
    name: "Glitz",
    specialty: "Custom Jewelry & Accessories",
    bio: "Headed by Vera — or as I have known her my whole life, \"Kuma Vera\" — Glitz upcycles vintage and discarded jewelry into fresh, one-of-a-kind pieces. Each piece is handmade with love and care, turning forgotten bits into stunning new treasures at truly affordable prices.",
    image: "/glitz.jpeg",
    social: {
      instagram: "",
      website: "",
    },
  },
  {
    id: 6,
    name: "Cicero Web Studio",
    specialty: "Web Development",
    bio: "We are a web development studio that specializes in creating custom websites for small businesses and startups.",
    image: "/cwslogo.jpeg",
    social: {
      instagram: "cicerowebstudio",
      website: "https://cicerowebstudio.xyz",
    },
  },
];

