import type { NextConfig } from "next";

// When deploying to GitHub Pages we build a fully static export served from
// /<repo>. Locally (npm run dev / start) none of this applies, so the site
// stays at the root.
const isPages = process.env.PAGES_DEPLOY === "true";
const repo = "hct-site";

const nextConfig: NextConfig = {
  ...(isPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
