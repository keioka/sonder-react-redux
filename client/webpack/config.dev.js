var webpack = require('webpack')
var path = require('path')

var host = 'localhost'
var port = '7777'

module.exports = {
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
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
