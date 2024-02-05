module.exports = {
  webpack: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};

// const nextConfig = {
//   webpack(config) {
//     config.watchOptions.poll = 300;
//     return config;
//   },
// };
// module.exports = nextConfig;

// config.module.rules.push({
//   test: /\.svg$/,
//   use: ["@svgr/webpack"],
// });
