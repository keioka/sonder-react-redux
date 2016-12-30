import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import ravenMiddleware from './ravenMiddleware'
import postMiddleware from './postMiddleware'

const loggerMiddleware = createLogger()

const middlewares = [thunk]

if (__DEV__ && __DEBUG__) {
  middlewares.push(loggerMiddleware)
} else if (__PROD__) {
  middlewares.push(ravenMiddleware)
}

export default middlewares
