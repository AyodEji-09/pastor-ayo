/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-", // This will add 'tw-' before all Tailwind classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{css}',
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
};
