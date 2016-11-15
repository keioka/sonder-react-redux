const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  name: 'server',
  taget: 'node',
  externals: [nodeExternals()],
  entry: [
    './server/index.js'
  ],
  output: {
    path: './build',
    filename: 'server.bundle.js',
    publicPath: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'less']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/, 
        loader: 'css!less'
      }
    ]
  }
}
