/**
 * next.config.js
 *
 * Configure Next.js to allow images from the Sanity CDN (cdn.sanity.io).
 * Uses `images.remotePatterns` which is the recommended approach for Next.js 12+ / 13+.
 */

module.exports = {
  reactStrictMode: true,
  images: {
    // Keep `domains` as a fallback for older Next.js versions or simpler setups.
    domains: ['cdn.sanity.io'],
    // Prefer `remotePatterns` for more fine-grained control over allowed external images.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
