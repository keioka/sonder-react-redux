var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      }
    ]
  },
  externals: {
    'cheerio': 'window', // Avoid enzyme error

    'react/addons': true, // Avoid enzyme error
    'react/lib/ExecutionEnvironment': true,  // Avoid enzyme error

    'react/lib/ReactContext': true  // Avoid enzyme error

  }
}
