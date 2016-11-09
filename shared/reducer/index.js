import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//****************
// Reducers
//****************

import user from './user'
import auth from './auth'

const debug = require('debug')("App:Config")
debug(`[Reducer]: Configuring Reducer..`)


const reducers = combineReducers({
  user,
  auth,
  routing: routerReducer
})

debug(`[Reducer]: Done configuring Reducer..`)


export default reducers
