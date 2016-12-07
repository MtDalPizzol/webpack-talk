const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const common = require('./webpack/webpack.common.js');

var config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(common, require('./webpack/webpack.prod.js'));
    break;
  case "stats":
    config = merge(common, require('./webpack/webpack.stats.js'));
    break;
  default:
    config = merge(common, require('./webpack/webpack.dev.js'));
}

module.exports = validate(config, {
  quit: true
});
