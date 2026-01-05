const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@hanawidyatari/pages": path.resolve(__dirname, "src/pages"),
      "@hanawidyatari/components": path.resolve(__dirname, "src/components"),
      "@hanawidyatari/utils": path.resolve(__dirname, "src/utility"),
      "@hanawidyatari/styles": path.resolve(__dirname, "src/styles"),
      "@hanawidyatari/icons": path.resolve(__dirname, "src/icons"),
      "@hanawidyatari/hooks": path.resolve(__dirname, "src/hooks"),
      "@hanawidyatari/contexts": path.resolve(__dirname, "src/contexts"),
    };
    return config;
  },
});

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
