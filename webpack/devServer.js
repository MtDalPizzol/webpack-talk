const webpack = require('webpack');

module.exports = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot:true,
      inline:true,
      stats: 'errors-only',
      host: (options) ? options.host : 'localhost',
      port: (options) ? options.port : 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};
