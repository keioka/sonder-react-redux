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
} from '../constant/user'

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
      return response.json()
    })
    .then((user)=>{
      dispatch(fetchUserSuccess(user))
    })
    .catch((error)=>{
      dispatch(fetchUserError(error))
    })
  }
}

export const fetchUserPending = ({type: FETCH_USER_PENDING})

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user
})

export const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  error
})


/**********************
fetchAllUsersRequest
***********************/

export const fetchAllUsersRequest = () => {

  return dispatch => {
    dispatch(fetchAllUsersPending)

    fetch(url.getAll())
    .then((response)=>{
      return response.json()
    })
    .then((users)=>{
      dispatch(fetchAllUsersSuccess(users))
    })
    .catch(()=>{

    })
  }

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


/**********************
fetchCityUsersRequest
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
