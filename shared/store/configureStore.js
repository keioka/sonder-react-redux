import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducer'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const debug = require('debug')("App:Config")
debug('[Store]: Configuring Store..')


const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

function configureStore(initialState=null){
  const store = createStore(
    reducers, 
    composeWithDevTools(
      applyMiddleware(...middlewares),
    )
  )
  return store
}


debug('[Store]: Done Configuring Store..')

export default configureStore 
