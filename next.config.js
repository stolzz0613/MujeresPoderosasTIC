const path = require('path')

module.exports = {
  assetPrefix: './',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
