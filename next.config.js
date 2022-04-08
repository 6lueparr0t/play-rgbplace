/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production' || false;
const name = 'play-rgbplace';
const path = require('path');

module.exports = {
  basePath: !debug ? `/${name}` : ``,
  assetPrefix: !debug ? `/${name}/` : ``,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
