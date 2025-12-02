/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    // Remove unoptimized if you want optimization enabled
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
