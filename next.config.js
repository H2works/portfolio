/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
};

export default nextConfig;
