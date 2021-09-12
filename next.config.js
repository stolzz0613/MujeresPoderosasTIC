const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path')

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/MujeresPoderosasTIC/',
  }],
  {
    basePath: '/MujeresPoderosasTIC',
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    }
  },
]);
