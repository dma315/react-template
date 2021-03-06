var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'builds');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

module.exports = config;