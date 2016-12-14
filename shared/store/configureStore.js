import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const debug = require('debug')("App:Config")
debug('[Store]: Configuring Store..')

import middlewares from '../middleware/index'


function configureStore(initialState){
  
  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...middlewares),
  )(createStore)

  return createStoreWithMiddleware(reducers, initialState)
}


debug('[Store]: Done Configuring Store..')

export default configureStore 
