import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//  ****************
//  Reducers
//  ****************

import users from './users'
import auth from './auth'
import post from './post'

const debug = require('debug')('App:Config')
debug(`[Reducer]: Configuring Reducer..`)


const reducers = combineReducers({
  users,
  auth,
  post,
  routing: routerReducer,
})

debug(`[Reducer]: Done configuring Reducer..`)


export default reducers
