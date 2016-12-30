// Webpack Production Enviornment
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')

var host = 'localhost';
var port = '7777';

const dev = process.env.NODE_ENV === 'development' ? true : false;
const debug = process.env.DEBUG_MODE === 'true' ? true : false;
const production = process.env.NODE_ENV === 'production' ? true : false;

const browser = process.env.BROWSER

module.exports = {
  name: 'client:production',
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
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      __PROD__: production,
      __DEV__: dev,
      __DEBUG__: debug,
      __BROWSER__: browser
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
        loaders: ['babel-loader?' + JSON.stringify({
          presets: ["react", "es2015", "stage-0", "react-hmre"],
          plugins: [
            ["transform-runtime", {
              helpers: false,
              polyfill: false,
              regenerator: true
            }],
            "transform-decorators-legacy",
            "transform-class-properties",
            "transform-export-extensions"
         ]
        })],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css?modules&sourceMap', 'less?sourceMap' ]
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
