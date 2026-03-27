/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slotspk.com.pk',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100], // Configure allowed image quality values
  },

  // Redirects from old Card Rummy URLs to new Teen Patti Vegas URLs
  async redirects() {
    return [
      { source: '/download-card-rummy', destination: '/download-teen-patti-vegas', permanent: true },
      { source: '/deposit-money-in-card-rummy', destination: '/deposit-money-in-teen-patti-vegas', permanent: true },
      { source: '/withdraw-money-from-card-rummy', destination: '/withdraw-money-from-teen-patti-vegas', permanent: true },
      { source: '/card-rummy-for-pc', destination: '/teen-patti-vegas-for-pc', permanent: true },
      { source: '/blog/card-rummy-app-review-2026', destination: '/blog/teen-patti-vegas-app-review-2026', permanent: true },
      { source: '/blog/is-card-rummy-real-or-fake', destination: '/blog/is-teen-patti-vegas-real-or-fake', permanent: true },
      { source: '/blog/create-card-rummy-account-and-login', destination: '/blog/create-teen-patti-vegas-account-and-login', permanent: true },
      { source: '/blog/tips-to-win-big-in-card-rummy', destination: '/blog/tips-to-win-big-in-teen-patti-vegas', permanent: true },
      { source: '/blog/card-rummy-tips-10-smart-tricks', destination: '/blog/teen-patti-vegas-tips-10-smart-tricks', permanent: true },
      { source: '/blog/card-rummy-bonuses-vip-guide', destination: '/blog/teen-patti-vegas-bonuses-vip-guide', permanent: true },
      { source: '/blog/is-card-rummy-safe-legal-pakistan', destination: '/blog/is-teen-patti-vegas-safe-legal-pakistan', permanent: true },
      { source: '/blog/responsible-gaming-guide-card-rummy', destination: '/blog/responsible-gaming-guide-teen-patti-vegas', permanent: true },
      { source: '/blog/how-to-use-card-rummy-app-pakistan-guide-2026', destination: '/blog/how-to-use-teen-patti-vegas-app-pakistan-guide-2026', permanent: true },
      { source: '/blog/3patti-blue-vs-card-rummy', destination: '/blog/3patti-blue-vs-teen-patti-vegas', permanent: true },
      { source: '/blog/3patti-gold-vs-card-rummy', destination: '/blog/3patti-gold-vs-teen-patti-vegas', permanent: true },
      { source: '/blog/3patti-lucky-vs-card-rummy', destination: '/blog/3patti-lucky-vs-teen-patti-vegas', permanent: true },
      { source: '/blog/3patti-room-vs-card-rummy', destination: '/blog/3patti-room-vs-teen-patti-vegas', permanent: true },
      { source: '/blog/ips-exceed-issue-card-rummy-how-to-fix', destination: '/blog/ips-exceed-issue-teen-patti-vegas-how-to-fix', permanent: true },
      { source: '/blog/card-rummy-old-version-features-review-2026', destination: '/blog/teen-patti-vegas-old-version-features-review-2026', permanent: true },
      { source: '/blog/card-rummy-latest-version-new-features-2026-updates', destination: '/blog/teen-patti-vegas-latest-version-new-features-2026-updates', permanent: true },
      { source: '/blog/ways-to-earn-money-with-card-rummy-2026', destination: '/blog/ways-to-earn-money-with-teen-patti-vegas-2026', permanent: true },
    ];
  },

  // Static file rewrites
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      // Security + revalidation headers for all HTML pages
      {
        source: '/:path*',
        headers: [
          // HTML must NOT be cached with long max-age — Google needs to re-crawl pages
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
      // Immutable cache for fingerprinted Next.js static assets
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Immutable cache for images
      {
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Long cache for deferred CSS
      {
        source: '/css/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Content-Type', value: 'text/css' },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Target modern browsers - don't transpile modern JavaScript features
    if (!isServer) {
      config.target = ['web', 'es2022'];
      
      // Disable Next.js polyfills for modern browsers (Lighthouse: Legacy JavaScript)
      // Saves ~11KB - polyfills for Array.at, Object.hasOwn, etc. aren't needed for Chrome 90+, Safari 14+, etc.
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
  },
}

module.exports = nextConfig 