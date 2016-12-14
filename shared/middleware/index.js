import thunk from 'redux-thunk'
import apiMiddleware from './apiMiddleware.js'
import authMiddleware from './authMiddleware.js'
import ravenMiddleware from './ravenMiddleware.js'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

const middlewares = [thunk]

if (__DEV__ && __DEBUG__) {
  middlewares.push(loggerMiddleware);
} else if (__PROD__) {
  middlewares.push(ravenMiddleware);
}

export default middlewares