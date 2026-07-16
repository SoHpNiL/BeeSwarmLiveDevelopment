import type { NextConfig } from "next";

const nextConfig = {

  // This is for Google OAuth image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;