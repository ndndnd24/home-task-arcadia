/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_API_TOKEN: process.env.GOOGLE_API_TOKEN,
    CESIUM_API_TOKEN: process.env.CESIUM_API_TOKEN,
  },
};
