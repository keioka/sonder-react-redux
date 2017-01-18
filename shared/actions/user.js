import 'whatwg-fetch'

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

import {
  alertFetchUserError,
} from './error'

import { endpoint } from '../config'
const url = endpoint.users

/**********************
fetchUserRequest
***********************/

export const fetchUserRequest = (userId) => {

  return dispatch => {
    dispatch(fetchUserPending)

    fetch(url.getOne(userId))
    .then((response)=>{
      if (response.ok) {
        return response.json()
      }
      throw new Error(response)
    })
    .then((user)=>{
      dispatch(fetchUserSuccess(user))
    })
    .catch((error)=>{
      dispatch(fetchUserErrorHandle(error))
    })
  }
}

const fetchUserPending = ({ type: FETCH_USER_PENDING })

const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user
})

const fetchUserErrorHandle = (error) => {
  return dispatch => {
    dispatch(alertFetchUserError(error))
    dispatch(fetchUserError(error))
  }
}

const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  error
})


/**********************
* fetchAllUsersRequest
***********************/

export const fetchAllUsersRequest = () => (dispatch) => {

  dispatch(fetchAllUsersPending)

  fetch(url.getAll())
  .then((response) => response.json())
  .then((users) => { dispatch(fetchAllUsersSuccess(users)) })
  .catch((error)=>{})
}

const fetchAllUsersPending = ({
  type: FETCH_ALL_USERS_PENDING,
})

const fetchAllUsersSuccess = (allUsers) => ({
  type: FETCH_ALL_USERS_SUCCESS,
  allUsers
})

const fetchAllUserError = (error) => ({
  type: FETCH_ALL_USERS_ERROR,
  error
})


/******************************
 * fetchUsersLocationRequest
 ******************************/

export const fetchUsersLocationRequest = () => (dispatch) => {

  dispatch(fetchUsersLocationPending)

  fetch(url.fetchUsersLocation())
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response.json())
  })
  .then(locations => dispatch(fetchUsersLocationSuccess(locations)))
  .catch(error => dispatch(fetchUsersLocationError(error)))
}

const fetchUsersLocationPending = ({
  type: FETCH_USERS_LOCATION_PENDING,
})

const fetchUsersLocationSuccess = locations => ({
  type: FETCH_USERS_LOCATION_SUCCESS,
  locations,
})

const fetchUsersLocationError = error => ({
  type: FETCH_USERS_LOCATION_ERROR,
  error,
})


/**********************
* fetchCityUsersRequest
***********************/

export const fetchCityUsersRequest = (locationId) => {
  return dispatch => {
    dispatch(fetchCityUsersPending)

    fetch(url.getAllUsersFromCity(locationId))
    .then(()=>{

    })
    .catch(()=>{

    })
  }
}

const fetchCityUsersPending = ({
  type: FETCH_CITY_USERS_PENDING
})

const fetchCityUsersSuccess = (users) => ({
  type: FETCH_CITY_USERS_SUCCESS,
  users
})

const fetchCityUsersError = (error) => ({
  type: FETCH_CITY_USERS_ERROR,
  error
})
