/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "i.ibb.co"],
  },
};

module.exports = withNextIntl(nextConfig);
