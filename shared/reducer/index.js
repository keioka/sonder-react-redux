import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//  ****************
//  Reducers
//  ****************

import users from './users'
import auth from './auth'
import post from './post'
import location from './location'

const debug = require('debug')('App:Config')
debug(`[Reducer]: Configuring Reducer..`)


const reducers = combineReducers({
  users,
  auth,
  post,
  location,
  routing: routerReducer,
})

debug(`[Reducer]: Done configuring Reducer..`)


export default reducers
