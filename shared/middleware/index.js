import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import postMiddleware from './postMiddleware'

const loggerMiddleware = createLogger()

const middlewares = [thunk]

if (__DEV__ && __DEBUG__) {
  middlewares.push(loggerMiddleware)
} else if (__BROWSER__ && __PROD__) {
  const { RavenMiddleware } = require('./ravenMiddleware')
  const ravenMiddleware = RavenMiddleware('https://01f4c18a44604f67b0cfe404b4d1e350@sentry.io/116300')
  middlewares.push(ravenMiddleware)
}

export default middlewares
