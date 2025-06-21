import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  // 外部APIの画像使用時は外部ドメインを許可する必要があり
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
      },

    ],
  }
};

export default nextConfig;
