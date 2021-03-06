var webpack = require('webpack');
var path = require('path');

const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')

const dev = process.env.NODE_ENV === 'development' ? true : false;
const staging = process.env.NODE_ENV === 'staging' ? true : false;
const production = process.env.NODE_ENV === 'production' ? true : false;

const debug = process.env.DEBUG_MODE === 'true' ? true : false;
const browser = process.env.BROWSER === 'true'

const debuggerTool = require('debug')('Server:Config')
debuggerTool(`[Webpack]: Configuring Webpack.. Browser? ${browser}`)

module.exports = {
  name: 'server:stg',
  target: 'node',
  devtool: 'cheap-module-source-map',
  externals: [nodeExternals()],
  entry: [
    './server/index.js'
  ],
  output: {
    path: './build',
    filename: 'server.stg.bundle.js',
    publicPath: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'less']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      __PROD__: production,
      __STG__: staging,
      __DEV__: dev,
      __DEBUG__: debug,
      __BROWSER__: browser,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new UnminifiedWebpackPlugin()
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
        loader: ExtractTextPlugin.extract('style-loader', 'css!less?sourceMap')
      },
      {
        test: /\.svg$/,
        loaders: ['babel-loader', 'svg-react']
      },
      {
        test: /\.mp4$/,
        loader: 'file'
      }
    ]
  }
}
