/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["pbs.twimg.com", "educalvolopez.com", "github.com"],
  },
};

module.exports = nextConfig;
