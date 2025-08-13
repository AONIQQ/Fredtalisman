/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://fredtalisman.com',
  },
  images: {
    domains: ['fredtalisman.com'],
  },
};

export default nextConfig;
