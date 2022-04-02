/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production';
const name = 'play-rgbplace';
const path = require('path');

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}