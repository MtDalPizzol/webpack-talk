const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const CONFIG = require('./webpack.settings.js');

const prod = {

  output: {
    path: CONFIG.paths.build,
    filename: '[name].[chunkhash].js',
    // This is used for require.ensure. The setup
    // will work without but this is useful to set.
    chunkFilename: '[chunkhash].js',
    publicPath: CONFIG.publicPath || '/'
  },

  module: {
    loaders: [
      // Extract CSS during build
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap'),
        include: CONFIG.paths.styles
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([CONFIG.paths.build], {
      root: process.cwd()
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new PurifyCSSPlugin({
      basePath: process.cwd(),
      paths: [CONFIG.paths.app]
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  devtool: 'source-map'

};

module.exports = prod;
