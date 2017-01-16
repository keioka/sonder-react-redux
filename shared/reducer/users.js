import camelize from 'camelize'

import {
  FETCH_ALL_USERS_PENDING,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR,
  FETCH_CITY_USERS_PENDING,
  FETCH_CITY_USERS_SUCCESS,
  FETCH_CITY_USERS_ERROR,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USERS_LOCATION_PENDING,
  FETCH_USERS_LOCATION_SUCCESS,
  FETCH_USERS_LOCATION_ERROR,
} from '../constant/user'

const initialState = {
  allUsers: [],
  isPending: false,
  allUsersLocation: [],
}

export default function(state = initialState, action) {

  switch(action.type){
    case FETCH_ALL_USERS_SUCCESS:
      return Object.assign({}, state, {
        allUsers: camelize(action.allUsers)
      })
    case FETCH_ALL_USERS_ERROR:
      return Object.assign({}, state, {
      })
    case FETCH_CITY_USERS_SUCCESS:
      return Object.assign({}, state, {
      })
    case FETCH_CITY_USERS_ERROR:
      return Object.assign({}, state, {
      })

    case FETCH_USER_PENDING:
      return Object.assign({}, state, {
        isPending: true
      })
    case FETCH_USER_SUCCESS:
      const users = state.allUsers
      users.push(camelize(action.user))
      return Object.assign({}, state, {
        isPending: false,
        allUsers: users
      })
    case FETCH_USER_ERROR:
      return Object.assign({}, state, {
      })
    case FETCH_USERS_LOCATION_PENDING:
    case FETCH_USERS_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        allUsersLocation: action.locations,
      })
    case FETCH_USERS_LOCATION_ERROR:

    default:
      return state
  }
}
