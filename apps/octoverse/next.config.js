const withTranspile = require("next-transpile-modules")([
  "@microfrontend/networking",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = withTranspile(nextConfig);
