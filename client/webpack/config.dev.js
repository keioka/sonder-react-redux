var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var host = 'localhost';
var port = '7777';

module.exports = {
  name: 'client:development',
  devtool: '#source-map',
  context: path.resolve(__dirname, '..'),
  entry: [
    './index.js'
  ],
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  debug: true,
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  progress: true,
  keepalive: true,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/, 
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  }
}
