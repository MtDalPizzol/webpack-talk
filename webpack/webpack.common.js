const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CONFIG = require('./webpack.settings');

const common = {
  entry: {
    styles: CONFIG.paths.styles,
    app: CONFIG.paths.app,
    vendor: ['react']
  },
  output: {
    path: CONFIG.paths.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Talk'
    }),
    new FaviconsWebpackPlugin(path.join(CONFIG.paths.app, 'img/favicon.svg'))
  ]
};

module.exports = common;
