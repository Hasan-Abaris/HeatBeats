/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
    unoptimized: true,
  },
  experimental: {
    // Ensure fallback pages can be rendered for dynamicParams
    appDir: true,
  },
};

export default nextConfig;
