import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "csspicker.dev",
      },
    ],
  },
};

export default nextConfig;
