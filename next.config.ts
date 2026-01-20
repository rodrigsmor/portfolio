import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dbrvgleaj/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: '/resumes/CV_RodrigoMoreira.pdf',
      },
      {
        source: '/resume',
        destination: '/resumes/Resume_RodrigoMoreira.pdf',
      },
    ];
  }
};

export default nextConfig;
