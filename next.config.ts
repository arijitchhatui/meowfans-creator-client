import type { NextConfig } from 'next';
import { configService } from './util/config';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: configService.NEXT_PUBLIC_IMAGE_HOST_NAME
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run'
      }
    ]
  }
};

export default nextConfig;
