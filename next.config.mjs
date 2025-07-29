/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export with `out/` folder
  images: {
    unoptimized: true, // disables automatic image optimization
  },
};

export default nextConfig;
