const path = require('path');
const settings = {

  devServer: {
    host: 'localhost',
    port: 8080
  },

  stats: {
    // exclude: []
    exclude: [/node_modules[\\\/]react/]
  },

  paths: {
    app: path.join(__dirname, '../app'),
    styles: [
      path.join(__dirname, '../node_modules', 'purecss'),
      path.join(__dirname, '../app/css', 'main.css')
    ],
    build: path.join(__dirname, '../build'),
    stats: path.join(__dirname, '../stats')
  }

};

module.exports = settings;
