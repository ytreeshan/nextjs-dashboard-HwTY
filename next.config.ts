import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enabling strict mode for React
  reactStrictMode: true,

  // Setting up environment variables
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },


  // Custom webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
