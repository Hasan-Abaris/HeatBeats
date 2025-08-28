/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: false, // Required for static export to avoid image optimization
  },
  experimental: {
    // Ensure fallback pages can be rendered for dynamicParams
    // Add if needed: dynamicParams: true
  },
};

export default nextConfig;