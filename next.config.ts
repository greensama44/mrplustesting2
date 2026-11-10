import type { NextConfig } from "next";

// The site pages are standalone HTML files in /public while the design is
// being tested. These rewrites serve them at clean URLs.
const pages = ["loyalty", "savings", "merch", "product", "plus", "prize", "giftcard"];

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        ...pages.map((p) => ({ source: `/${p}`, destination: `/${p}.html` })),
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      // Individual giveaway landing pages are not built yet.
      { source: "/giveaways/:slug*", destination: "/loyalty", permanent: false },
    ];
  },
};

export default nextConfig;
