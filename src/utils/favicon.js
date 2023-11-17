import iconOne from "@/assets/images/favicon/android-chrome-192x192.png";
import iconTwo from "@/assets/images/favicon/android-chrome-512x512.png";
import iconThree from "@/assets/images/favicon/apple-touch-icon.png";
import iconFour from "@/assets/images/favicon/favicon-16x16.png";
import iconFive from "@/assets/images/favicon/favicon-32x32.png";
import iconSix from "@/assets/images/favicon/favicon.ico";

export const icons = [
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    url: iconOne.src,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    url: iconTwo.src,
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    url: iconThree.src,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    url: iconFour.src,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    url: iconFive.src,
  },
  {
    rel: "icon",
    type: "image/ico",
    sizes: "32x32",
    url: iconSix.src,
  },
];
