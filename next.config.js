/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const name = 'play-rgbplace'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}