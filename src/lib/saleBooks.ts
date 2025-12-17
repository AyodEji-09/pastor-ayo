/**
 * src/lib/saleBooks.ts
 *
 * Minimal bundle-only sales module.
 *
 * This file contains:
 * - types for a bundle and its items
 * - a predefined set of 3-book bundles (only bundles; no separate saleBooks list)
 * - helpers to retrieve bundles and compute display prices
 *
 * The bundle `items` array includes the minimal book details required for checkout
 * (title, slug, price, image, etc.) so checkout pages can render bundle content
 * without depending on any separate books collection.
 *
 * NOTE: Keep numeric prices as strings to remain compatible with the existing codebase
 * that uses strings for `price_ngn` / `price_usd`. Convert as needed for payment APIs.
 */

export type SaleBundleItem = {
  id: string; // internal id
  slug: string; // url-friendly slug
  title: string;
  subtitle?: string;
  description?: string;
  img?: string; // local relative path under /public or similar
  img_url?: string; // absolute URL (optional)
  sku?: string;
  price_ngn: string;
  price_usd: string;
  sale_price_ngn?: string;
  sale_price_usd?: string;
  pages?: string;
  language?: string;
};

export type SaleBundle = {
  id: string;
  slug: string; // route-friendly slug
  title: string;
  description?: string;
  image?: string; // bundle cover (relative path)
  image_url?: string; // bundle cover absolute URL (optional)
  items: SaleBundleItem[]; // expected length = 3 for your 3-book packages
  price_ngn?: string; // optional explicit bundle base price (if present)
  price_usd?: string; // optional explicit bundle base price (if present)
  sale_price_ngn?: string; // optional explicit discounted bundle price
  sale_price_usd?: string; // optional explicit discounted bundle price
  onSale?: boolean; // whether bundle-level sale price applies
  stock?: number; // number of bundles available
  dop?: string; // publication or bundle date
  createdAt?: string;
  updatedAt?: string;
};

/**
 * Predefined 3-book bundles.
 *
 * Each bundle contains the 3 member book objects inline (so there is no separate
 * saleBooks list). Fill `img` with relative paths if you store images in `public/`.
 */
export const saleBundles: SaleBundle[] = [
  {
    id: "bundle-faith-family",
    slug: "faith-family-bundle",
    title: "Faith & Family 3-Book Bundle",
    description:
      "A curated trio for families: inspirational and child-friendly titles bundled at a special price.",
    image: "21-days-children-devotion-on-obedience-bundle.jpg",
    image_url: "21-days-children-devotion-on-obedience-bundle-landscape.jpg",
    items: [
      {
        id: "tommy-too-can-win",
        slug: "tommy-too-can-win",
        title: "Tommy Too Can Win",
        subtitle: "21 Days of Integrity",
        description:
          "A 21-day devotional for children focused on integrity: stories, verses and activities.",
        img: "images/books/tommy-too-can-win.jpg",
        img_url:
          "https://via.placeholder.com/600x900.png?text=Tommy+Too+Can+Win",
        price_ngn: "7000",
        price_usd: "25",
        sale_price_ngn: "5600",
        sale_price_usd: "20",
        pages: "92 pages",
        language: "English",
        sku: "TTW-001",
      },
      {
        id: "bible-jobs-for-little-gems",
        slug: "bible-jobs-for-little-gems",
        title: "Bible Jobs for Little Gems",
        subtitle: "Stories & Activities",
        description:
          "Illustrated stories about Bible characters with engaging activities for kids.",
        img: "images/books/bible-jobs-for-little-gems.jpg",
        img_url:
          "https://via.placeholder.com/600x900.png?text=Bible+Jobs+for+Little+Gems",
        price_ngn: "6000",
        price_usd: "22",
        // no individual sale price for this item in this bundle
        pages: "88 pages",
        language: "English",
        sku: "BJG-001",
      },
      {
        id: "gods-agenda-for-man",
        slug: "gods-agenda-for-man",
        title: "God's Agenda for Man",
        subtitle: "Embracing True Manhood",
        description:
          "Biblical principles of identity, responsibility and relationships for men.",
        img: "images/books/gods-agenda-for-man.jpg",
        img_url: "https://m.media-amazon.com/images/I/61MZgQP+AuL._SY466_.jpg",
        price_ngn: "10000",
        price_usd: "30",
        sale_price_ngn: "8500",
        sale_price_usd: "25",
        pages: "223 pages",
        language: "English",
        sku: "GAM-001",
      },
    ],
    // explicit bundle price (prefer this if present)
    price_ngn: "20000",
    price_usd: "70",
    // discounted bundle price
    sale_price_ngn: "20000",
    sale_price_usd: "60",
    onSale: true,
    stock: 25,
    dop: "September 2024",
    createdAt: "2024-09-10",
  },

  {
    id: "bundle-kids-devotional",
    slug: "kids-devotional-bundle",
    title: "Kids & Devotionals 3-Book Bundle",
    description:
      "Three selected children's devotionals bundled at a special price for families and Sunday Schools.",
    image: "21-days-children-devotion-on-identity-bundle.jpg",
    image_url: "21-days-children-devotion-on-identity-bundle-landscape.jpg",
    items: [
      {
        id: "tommy-too-can-win",
        slug: "tommy-too-can-win",
        title: "Tommy Too Can Win",
        subtitle: "21 Days of Integrity",
        description:
          "A 21-day devotional for children focused on integrity: stories, verses and activities.",
        img: "images/books/tommy-too-can-win.jpg",
        img_url:
          "https://via.placeholder.com/600x900.png?text=Tommy+Too+Can+Win",
        price_ngn: "7000",
        price_usd: "25",
        sale_price_ngn: "5600",
        sale_price_usd: "20",
        pages: "92 pages",
        language: "English",
        sku: "TTW-001",
      },
      {
        id: "bible-jobs-for-little-gems",
        slug: "bible-jobs-for-little-gems",
        title: "Bible Jobs for Little Gems",
        subtitle: "Stories & Activities",
        description:
          "Illustrated stories about Bible characters with engaging activities for kids.",
        img: "images/books/bible-jobs-for-little-gems.jpg",
        img_url:
          "https://via.placeholder.com/600x900.png?text=Bible+Jobs+for+Little+Gems",
        price_ngn: "6000",
        price_usd: "22",
        pages: "88 pages",
        language: "English",
        sku: "BJG-001",
      },
      {
        id: "14-days-affirmation",
        slug: "14-days-of-affirmation-and-declaration",
        title: "14 Days of Affirmation & Declaration",
        subtitle: "Daily Devotional for Youth",
        description:
          "Two-week devotional promoting identity and faith-building practices for young readers.",
        img: "images/books/14-days-of-affirmation-and-declaration.png",
        img_url:
          "https://via.placeholder.com/600x900.png?text=14+Days+Affirmation",
        price_ngn: "6000",
        price_usd: "25",
        pages: "80 pages",
        language: "English",
        sku: "14DA-001",
      },
    ],
    price_ngn: "24000",
    price_usd: "80",
    sale_price_ngn: "20000",
    sale_price_usd: "60",
    onSale: true,
    stock: 15,
    dop: "September 2024",
    createdAt: "2024-09-10",
  },

  {
    id: "bundle-marriage-pack",
    slug: "marriage-pack-bundle",
    title: "Relationship & Marriage 3-Book Bundle",
    description:
      "Three books focused on marriage and relationships, offered together at a promotional price.",
    image: "21-days-children-devotion-on-integrity-bundle.jpg",
    image_url: "21-days-children-devotion-on-integrity-bundle-landscape.jpg",
    items: [
      {
        id: "gods-agenda-for-man",
        slug: "gods-agenda-for-man",
        title: "God's Agenda for Man",
        subtitle: "Embracing True Manhood",
        description:
          "Biblical principles of identity, responsibility and relationships for men.",
        img: "images/books/gods-agenda-for-man.jpg",
        img_url: "https://m.media-amazon.com/images/I/61MZgQP+AuL._SY466_.jpg",
        price_ngn: "10000",
        price_usd: "30",
        sale_price_ngn: "8500",
        sale_price_usd: "25",
        pages: "223 pages",
        language: "English",
        sku: "GAM-001",
      },
      {
        id: "14-days-affirmation",
        slug: "14-days-of-affirmation-and-declaration",
        title: "14 Days of Affirmation & Declaration",
        subtitle: "Daily Devotional for Youth",
        description:
          "Two-week devotional promoting identity and faith-building practices for young readers.",
        img: "images/books/14-days-of-affirmation-and-declaration.png",
        img_url:
          "https://via.placeholder.com/600x900.png?text=14+Days+Affirmation",
        price_ngn: "6000",
        price_usd: "25",
        pages: "80 pages",
        language: "English",
        sku: "14DA-001",
      },
      {
        id: "little-alfie-how-are-you",
        slug: "little-alfie-how-are-you",
        title: "Little Alfie, How Are You?",
        subtitle: "Children's Picture Book",
        description:
          "A gentle, illustrated storybook exploring feelings and empathy for young children.",
        img: "images/books/little-alfie.jpg",
        img_url: "https://via.placeholder.com/600x900.png?text=Little+Alfie",
        price_ngn: "8000",
        price_usd: "25",
        pages: "40 pages",
        language: "English",
        sku: "LA-001",
      },
    ],
    price_ngn: "26000",
    price_usd: "90",
    sale_price_ngn: "20000",
    sale_price_usd: "60",
    onSale: true,
    stock: 10,
    dop: "September 2024",
    createdAt: "2024-09-10",
  },
];

/* =========================
 * Helpers for bundles
 * ========================= */

/**
 * Find a bundle by slug (route-friendly).
 */
export function getBundleBySlug(slug: string): SaleBundle | undefined {
  const s = String(slug).trim().toLowerCase();
  return saleBundles.find((b) => b.slug === s || b.id === s);
}

/**
 * Find a bundle by id.
 */
export function getBundleById(id: string): SaleBundle | undefined {
  return saleBundles.find((b) => b.id === id);
}

/**
 * List all bundles (shallow copy).
 */
export function listSaleBundles(): SaleBundle[] {
  return [...saleBundles];
}

/**
 * Compute the display price for a bundle.
 * Priority:
 *  1. Explicit bundle sale price if `onSale` true and sale_price_* present
 *  2. Explicit bundle price if present
 *  3. Sum of member book sale prices where present, falling back to member base prices
 *
 * country: 'NG' | 'US' | 'OTHER' (default 'US')
 */
export function computeBundleDisplayPrice(
  bundle: SaleBundle,
  country: "NG" | "US" | "OTHER" = "US",
): string {
  if (!bundle) return "";

  const useSale =
    !!bundle.onSale &&
    (country === "NG" ? !!bundle.sale_price_ngn : !!bundle.sale_price_usd);

  if (useSale) {
    if (country === "NG" && bundle.sale_price_ngn)
      return `NGN${bundle.sale_price_ngn}`;
    if (country !== "NG" && bundle.sale_price_usd)
      return `$${bundle.sale_price_usd}`;
  }

  // fallback to explicit bundle base price
  if (country === "NG" && bundle.price_ngn) return `NGN${bundle.price_ngn}`;
  if (country !== "NG" && bundle.price_usd) return `$${bundle.price_usd}`;

  // last fallback: compute sum of member prices (prefer member sale prices if onSale)
  return computeBundleMembersTotal(bundle, country);
}

/**
 * Compute the summed member total (uses sale prices if available on item).
 * Returns a formatted string.
 */
export function computeBundleMembersTotal(
  bundle: SaleBundle,
  country: "NG" | "US" | "OTHER" = "US",
): string {
  if (!bundle || !bundle.items || bundle.items.length === 0) return "";

  const totals = bundle.items.map((it) => {
    if (country === "NG") {
      return Number(it.sale_price_ngn ?? it.price_ngn ?? "0");
    } else {
      return Number(it.sale_price_usd ?? it.price_usd ?? "0");
    }
  });

  const sum = totals.reduce((a, b) => a + b, 0);
  if (country === "NG") return `NGN${sum}`;
  return `$${sum}`;
}

/**
 * Get the items for a bundle (returns a shallow copy).
 */
export function getBundleItems(bundle: SaleBundle): SaleBundleItem[] {
  return [...bundle.items];
}

/* End of file */
