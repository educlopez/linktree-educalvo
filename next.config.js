/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "educalvolopez.com" },
      { hostname: "github.com" },
    ],
  },
};

module.exports = nextConfig;
