export type ShopItem = {
  name: string;
  image: string;
  href?: string;
};

// Artwork pulled from the Counterculture Square store. Images are served
// locally rather than hotlinked from the store CDN.
export const shopItems: ShopItem[] = [
  {
    name: "COUNTERCULTURE - SPRING SESSION TEE",
    image: "/assets/spring-session-2026.png",
    href: "https://counterculture-store.square.site/product/counterculture-spring-session-tee/OAY6RCTYVQJL772A4F6GWJF6"
  },
  {
    name: "MC MANAKI - TEE",
    image: "/assets/shop/mc-manaki-tee.jpg",
    href: "https://counterculture-store.square.site/product/mc-manaki-tee/XC2EEC5HIAMIVRHHYV4PJTSR"
  },
  {
    name: "MC WASP - TEE",
    image: "/assets/shop/mc-wasp-tee.jpg",
    href: "https://counterculture-store.square.site/product/mc-wasp-tee/DETWJA3CT77JCZEIURT753GP"
  },
  {
    name: "DJ AGEUSIC - TEE",
    image: "/assets/shop/ageusic-tee.jpg",
    href: "https://counterculture-store.square.site/product/dj-ageusic-tee/KC3AXTKXMUPTIO666RULKVM5"
  },
  {
    name: "DJ HIJACK - TEE",
    image: "/assets/shop/dj-hijack-tee.jpg",
    href: "https://counterculture-store.square.site/product/dj-hijack-tee/MBGVGUUILJL3C6LXZTB2SOPV"
  },
  {
    name: "DJ SPINFX - JUMP UP JUNGLIST TEE",
    image: "/assets/shop/jump-up-junglist-tee.jpg",
    href: "https://counterculture-store.square.site/product/dj-spinfx-jump-up-junglist-tee/20"
  },
  {
    name: "JUNGLE TING - TEE",
    image: "/assets/shop/jungle-ting-tee.jpg",
    href: "https://counterculture-store.square.site/product/jungle-ting-tee/12"
  },
  {
    name: "JUNGLE MANIA - MASH DEM DOWN TEE",
    image: "/assets/shop/jungle-mania-tee.jpg",
    href: "https://counterculture-store.square.site/product/jungle-mania-mash-dem-down-tee/32"
  },
  {
    name: "COUNTERCULTURE - HIFI TEE",
    image: "/assets/shop/counterculture-hifi-tee.jpg",
    href: "https://counterculture-store.square.site/product/counterculture-hifi-tee/31"
  },
  {
    name: "GUTTERHYPE - CAMO TEE",
    image: "/assets/shop/gutterhype-camo-tee.jpg",
    href: "https://counterculture-store.square.site/product/gutterhype-camo-tee/39"
  }
];
