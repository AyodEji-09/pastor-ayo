import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "jjv0taxv",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2025-07-01",
});

// Helper to generate image URLs from Sanity image references
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: string) {
  return builder.image(source);
}
