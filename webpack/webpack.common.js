const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CONFIG = require('./webpack.settings');

const common = {
  entry: {
    styles: CONFIG.paths.styles,
    app: CONFIG.paths.app,
    vendor: ['jquery']
  },
  output: {
    path: CONFIG.paths.build,
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/index.html')
    }),
    new FaviconsWebpackPlugin(path.join(CONFIG.paths.app, 'img/favicon.svg'))
  ]
};

module.exports = common;
