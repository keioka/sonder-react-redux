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
  keepalive: true,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader?' + JSON.stringify({
          presets: ["react", "stage-0", "es2015", "react-hmre"],
          plugins: ['react-hot-loader/babel']
        })],
        exclude: /node_modules/
      },
      {
        test: /\.less$/, 
        loaders: ['style', 'css?modules&sourceMap', 'less?sourceMap' ]
      }
    ]
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  }
}
