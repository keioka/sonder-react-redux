var webpackTestConfig = require('./client/webpack/config.test.js')
var path =require('path')
var webpack = require('webpack');
const dev = 'false';
const staging = 'false';
const production = 'true';

const debug = 'false';
const browser = 'true';

module.exports = function(config){
  config.set({
    browsers: [ 'Chrome' ], //run test on Chrome
    singleRun: true, //run once by default
    frameworks: [ 'mocha' ], //use mocha test framework
    files: [
      'test.webpack.js'
    ],
    preprocessors: {
      'test.webpack.js': [ 'webpack', 'sourcemap' ],
      'shared/**/*.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha', 'coverage', 'coveralls' ],
    plugins: [
      new webpack.DefinePlugin({
        '__PROD__': production,
        '__STG__': staging,
        '__DEV__': dev,
        '__DEBUG__': debug,
        '__BROWSER__': browser,
      }),
      'karma-webpack',
      'karma-coveralls',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root: path.resolve(__dirname, 'shared'),
        moduleDirectories: [
          'shared',
          'node_modules'
        ],
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            loaders: ['babel-loader?' + JSON.stringify({
              presets: ["react", "es2015", "stage-0"],
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
      },
      externals: {
        'cheerio': 'window', // Avoid enzyme error
        'fs': '{}',
        'react/addons': true, // Avoid enzyme error
        'react/lib/ExecutionEnvironment': true,  // Avoid enzyme error

        'react/lib/ReactContext': true  // Avoid enzyme error
      },
      webpackMiddleware: {
        noInfo: true,
      }
    },
    coverageReporter: {
      type: 'html', //produces a html document after code is run
      dir: 'test/coverage/' //path to created html doc
    }
  })
}
