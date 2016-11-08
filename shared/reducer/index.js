import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//****************
// Reducers
//****************

import user from './user'
import auth from './auth'

const reducers = combineReducers({
  user,
  auth,
  routing: routerReducer
})


export default reducers
