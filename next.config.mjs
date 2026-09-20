/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  poweredByHeader: false,
  images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};
