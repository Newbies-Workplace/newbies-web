/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = nextConfig;
