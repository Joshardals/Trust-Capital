
const webpack = require("webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {    
  images: {
    unoptimized: true
  }, 
  webpack(config) {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^isomorphic-form-data$/,
        `${config.context}/form-data-mock.js`
      )
    );
    return config;
  },
}

module.exports = nextConfig
