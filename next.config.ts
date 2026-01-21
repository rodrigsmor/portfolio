import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 75, 80, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dbrvgleaj/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/rodrigsmor/**',
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
