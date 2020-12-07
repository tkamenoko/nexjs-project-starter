const images = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[images]], {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\.scss\.d\.ts$/));
    return config;
  },
  poweredByHeader: false,
});
