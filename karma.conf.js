var webpackTestConfig = require('./client/webpack/config.test.js')
var path =require('path')

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
      'karma-webpack',
      'karma-coveralls',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
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
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          }
        ]
      },
      externals: {
        'cheerio': 'window', // Avoid enzyme error
    
        'react/addons': true, // Avoid enzyme error
        'react/lib/ExecutionEnvironment': true,  // Avoid enzyme error
    
        'react/lib/ReactContext': true  // Avoid enzyme error       
      }
    },
    coverageReporter: {
      type: 'html', //produces a html document after code is run
      dir: 'test/coverage/' //path to created html doc
    }
  })
}
