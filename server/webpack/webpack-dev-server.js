var Express = require('express');
var webpack = require('webpack');
var path = require('path');
var ip = require('ip');

const debug = require('debug')("Build:Webpack")
debug('Webpack Hot loader setting is started..')

// ************************
// React HotWatch
// ************************
var webpackConfig = require('../../client/webpack/config.dev.js');


//*********************
//  React hot config
//*********************

const devServer = 'http://' + require("ip").address() + ':5001'
debug("Setting dev server on: " + devServer)

webpackConfig.entry = [
  'webpack-hot-middleware/client?path=' + devServer + '/__webpack_hmr',
  'webpack/hot/only-dev-server',
  path.resolve(__dirname, '../../client')
];

webpackConfig.output = {
  path: path.resolve(__dirname, '../../dist'),
  publicPath: '/static/',
  filename: 'bundle.js'
}

//webpackConfig.module.loaders[0].loaders.push('react-hot', 'jsx?harmony');

//*************************
// Dev server configure
//*************************

debug("Config setting")

var compiler = webpack(webpackConfig);

var host = 'localhost';
var port =  5001;

var serverOptions = {
  hot: true,
  log: console.log,
  inline: true,
  publicPath: devServer + webpackConfig.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  stats: {colors: true}
};




//*************************
// Dev server configure
//*************************


var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr'
}));

//app.use('/build', Express.static('./build'))
const assetsPath = path.resolve('assets')

app.use('/assets', Express.static(assetsPath))

app.get('/*', (req, res) => {
  const devIndexHtmlPath = path.resolve(__dirname, '../../server/webpack/dev-index.html')
  res.status(200).sendFile(devIndexHtmlPath);
})

app.listen(5001, require('ip').address, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
