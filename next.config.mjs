/** @type {import('next').NextConfig} */
const nextConfig = {
 // Enable static export
  images: {
    unoptimized: true, // Required for static export to avoid image optimization
  },
  experimental: {
    // Ensure fallback pages can be rendered for dynamicParams
    // Add if needed: dynamicParams: true
  },
};

export default nextConfig;