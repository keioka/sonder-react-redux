import { createStore } from 'redux'
import reducers from '../reducer'

const debug = require('debug')("Config")
debug('[Store]: Configuring Store..')

const store = createStore(reducers)

debug('[Store]: Done Configuring Store..')

export default store
