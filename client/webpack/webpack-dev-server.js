var Express = require('express');
var webpack = require('webpack');
const debug = require('debug')("Build:Webpack")
debug('Webpack Hot loader setting is started..')

// ************************
// React HotWatch 
// ************************
var webpackConfig = require('./config.dev.js');

webpackConfig.entry.push(
  'webpack-dev-server/client?http://0.0.0.0:5001', // WebpackDevServer host and port
  'webpack/hot/only-dev-server'
);

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackConfig.module.loaders[0].loaders.push('react-hot', 'jsx?harmony');

console.log(webpackConfig.module.loaders[0])


var compiler = webpack(webpackConfig);

var host = 'localhost';
var port =  5001;

var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));


app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
