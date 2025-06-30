import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for better deployment compatibility
  output: 'standalone',
  
  // Optimize for production builds
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Configure webpack for better compatibility
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Handle potential shell execution issues
    if (!dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        child_process: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;
