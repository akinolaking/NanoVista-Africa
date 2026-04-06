/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nano-vista.com" },
    ],
  },
  compress: true,
  poweredByHeader: false,
};
module.exports = nextConfig;
