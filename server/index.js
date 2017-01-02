//****************
// React
//****************
import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';


//****************
// React Router
//****************
import { Router, Route, RouterContext, browserHistory } from 'react-router'
import { match } from 'react-router';
import createHistory from 'react-router/lib/createMemoryHistory';
import { createMemoryHistory, useQueries } from 'history' 


//*************
// Webpack
//*************
import webpack from 'webpack'
//import webpackConfig from '../webpack.config'
//const webpackCompiler = webpack(config)


//**************
// Web server
//**************
import Express from 'express'


//**************
// Util
//**************
import path from 'path'
import PrettyError from 'pretty-error'

const pe = new PrettyError();
pe.start();
const debug = require('debug')("App:Server")


//************************
// Container & Component
//************************
import HTML from '../shared/component/HTML/html'

//************************
// Routes
//************************
import createRoutes from '../shared/routes'


//****************************
// Config and Intialize store
//****************************
import reducers from '../shared/reducer'
import configureStore from '../shared/store/configureStore'

const store = configureStore()

//****************
// App Setting
//**************** 

debug("Setting Application...")

const app = new Express()

app.use('/build', Express.static('./build'))

app.get('*', (req, res) => {

  const history = createHistory(req.originalUrl)
  
  match({history, routes: createRoutes(store), location: req.originalUrl}, (error, redirectLocation, renderProps)=>{
    

    const routes = createRoutes(store)
    const components = (
      <Provider store={store} key="provider">
        <RouterContext {...renderProps} /> 
      </Provider>
    )
      
    // React Dom Server Side Rendering
    const app = ReactDOM.renderToString(<HTML components={components} store={store}/>)
 
    // Response 200
    res.status(200)
      
    // Send response HTML
    res.send(`<!doctype html>\n ${app}`)

  })
})

app.listen(7777, () => debug('Server running on localhost:7777'))
