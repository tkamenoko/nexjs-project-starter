const images = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[images]], {
  pageExtensions: ['page.ts', 'page.tsx'],
  poweredByHeader: false,
});
