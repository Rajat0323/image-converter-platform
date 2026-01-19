import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // IMPORTANT: redirect loop avoid
  trailingSlash: false,

  // No redirects / rewrites at all (SEO safe)
};

export default nextConfig;
