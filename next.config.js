/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./styles'],
    quietDeps: true, // Bootstrap の古い Sass 構文の警告を抑制
    silenceDeprecations: [
      'legacy-js-api',
      'import',
      'global-builtin',
      'color-functions',
      'if-function',
    ],
  },
  allowedDevOrigins: ['127.0.0.1'], // wrangler dev と連携できるように許可
};

export default nextConfig;
