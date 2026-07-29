export type ShopItem = {
  name: string;
  image: string;
};

// Artwork pulled from the Counterculture Square store. Images are served
// locally rather than hotlinked from the store CDN.
export const shopItems: ShopItem[] = [
  { name: "MC Manaki x Counterculture", image: "/assets/shop/mc-manaki-tee.jpg" },
  { name: "MC Wasp x Counterculture", image: "/assets/shop/mc-wasp-tee.jpg" },
  { name: "Ageusic x Counterculture", image: "/assets/shop/ageusic-tee.jpg" },
  { name: "Redback Sound jersey", image: "/assets/shop/redback-jersey.jpg" },
  { name: "DJ Hijack x Counterculture", image: "/assets/shop/dj-hijack-tee.jpg" },
  { name: "Jnr Stax eco tote", image: "/assets/shop/jnr-stax-tote.jpg" },
  { name: "Counterculture x Jungle Ting", image: "/assets/shop/jungle-ting-tee.jpg" },
  { name: "Jungle Mania x Mash Dem Down", image: "/assets/shop/jungle-mania-tee.jpg" },
  { name: "Counterculture Xmas knit", image: "/assets/shop/xmas-knit.jpg" },
  { name: "Jump Up Junglist", image: "/assets/shop/jump-up-junglist-tee.jpg" },
  { name: "Counterculture HiFi", image: "/assets/shop/counterculture-hifi-tee.jpg" },
  { name: "Gutterhype Camo", image: "/assets/shop/gutterhype-camo-tee.jpg" }
];
