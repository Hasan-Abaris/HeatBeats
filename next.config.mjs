/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Ensure fallback pages can be rendered for dynamicParams
    appDir: true,
  },
};

export default nextConfig;
