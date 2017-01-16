import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducer'

const debug = require('debug')("App:Config")
debug('[Store]: Configuring Store..')

import middlewares from '../middleware'

function configureStore(initialState) {

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...middlewares),
  )(createStore)

  return createStoreWithMiddleware(reducers, initialState)
}

// https://github.com/erikras/react-redux-universal-hot-example/issues/44#issuecomment-132260397


debug('[Store]: Done Configuring Store..')

export default configureStore
