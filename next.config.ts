import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'axiomtrading.sfo3.cdn.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'axiom.trade',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
};

export default nextConfig;