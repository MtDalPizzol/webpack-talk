const webpack = require('webpack');
const CONFIG = require('./webpack.settings.js');

const dev = {

  output: {
    publicPath: 'http://' + CONFIG.devServer.host + ':' + CONFIG.devServer.port + '/'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap'],
        include: CONFIG.paths.styles
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ],

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: CONFIG.devServer.host || 'localhost',
    port: CONFIG.devServer.port || 8080
  }

};

module.exports = dev;
