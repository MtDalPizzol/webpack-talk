const path = require('path');

module.exports = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css?sourceMap'],
          include: paths || path.resolve(__dirname, '../app/')
        }
      ]
    }
  };
};
