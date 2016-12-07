const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const CONFIG = require('./webpack.settings.js');

var stats = {

  output: {
    path: CONFIG.paths.stats
  },

  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loaders: ['style', 'css?sourceMap'],
      //   include: CONFIG.paths.styles
      // }
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap'),
        include: CONFIG.paths.styles
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([CONFIG.paths.stats], {
      root: process.cwd()
    }),
    new ExtractTextPlugin('[name].css'),
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: CONFIG.stats.exclude
    })
  ],

  profile: true,

  devtool: 'eval-source-map'

};

module.exports = stats;
