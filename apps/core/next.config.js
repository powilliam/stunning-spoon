const withTranspile = require("next-transpile-modules")([
  "@microfrontend/networking",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ["@microfrontend/networking"],
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = withTranspile(nextConfig);
