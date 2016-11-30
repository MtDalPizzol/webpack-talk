const path = require('path');
const requireDir = require('require-dir');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const CONFIG = requireDir('webpack');
const PATHS = {
  app: path.join(__dirname, 'app'),
  styles: [
    path.join(__dirname, 'node_modules', 'purecss'),
    path.join(__dirname, 'app/css', 'main.css')
  ],
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    styles: PATHS.styles,
    app: PATHS.app,
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: 'http://localhost:8080/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Talk'
    }),
    new FaviconsWebpackPlugin(path.join(PATHS.app, 'img/favicon.svg'))
  ]
};

var config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common, {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js'
        }
      },
      // CONFIG.css(),
      {
        module: {
          loaders: [
            // Extract CSS during build
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract('style', 'css'),
              include: PATHS.styles
            }
          ]
        },
        plugins: [
          // Output extracted CSS to a file
          new ExtractTextPlugin('[name].[chunkhash].css'),
          new PurifyCSSPlugin({
            basePath: process.cwd(),
            paths: [PATHS.app]
          })
        ]
      },
      CONFIG.minify(), {
        plugins: [
          new CleanWebpackPlugin([PATHS.build], {
            root: process.cwd()
          }),
          new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
          })
        ]
      }
    );
    break;
  case "stats":
    config = merge(
      common,
      CONFIG.css(PATHS.styles),
      CONFIG.devServer(), {
        profile: true,
        devtool: 'eval-source-map',
        plugins: [
          new StatsPlugin('stats.json', {
            chunkModules: true
            // exclude: [/node_modules[\\\/]react/]
          })
        ]
      }
    );
    break;
  default:
    config = merge(
      common, {
        devtool: 'eval-source-map'
      },
      CONFIG.css(PATHS.styles),
      CONFIG.devServer()
    );
}

module.exports = validate(config, {
  quit: true
});
