import 'whatwg-fetch'
import cookie from 'react-cookie'
import _ from 'lodash'
import camelize from 'camelize'
import snakeCaseKeys from 'snakecase-keys'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  EDIT_PROFILE_UPDATE,
  EDIT_PROFILE_PENDING,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR,
} from '../constant/auth'

import { fetchPostSuccess } from './post'
import { endpoint } from '../config'

const url = endpoint.auth
const COOKIE = '__sonder_t__'

export const fetchCurrentUserRequest = () => (dispatch) => {
  const token = cookie.load(COOKIE)
  if (token) {
    dispatch(fetchCurrentUserPending)
    const data = new FormData()
    const sessionToken = { token: token }
    data.append('body', JSON.stringify(sessionToken))

    fetch(url.fetchCurrentUser(), {
      method: 'POST',
      body: data,
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error (response.statusText)
    })
    .then((currentUser) => {
      dispatch(fetchCurrentUserSuccess(currentUser))
    })
    .catch((error) => {
      dispatch(fetchCurrentUserError(error))
    })
  }
}


const fetchCurrentUserPending = ({ type: FETCH_CURRENT_USER_PENDING })

const fetchCurrentUserSuccess = session => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  split: true,
  session,
})

const fetchCurrentUserError = error => ({
  type: FETCH_CURRENT_USER_ERROR,
  error,
})


// FETCH => FETCH is used for get request
// REQUEST => POST, PUT, DELETE
// PENDING => Right After calling request action

const loginRequest = ({ type: LOGIN_REQUEST })

export const loginFetch = () => {
  return (dispatch) => {
    dispatch(loginRequest)
    dispatch(loginSuccess({ profile: { name: 'kei' } }))
  }
}

const loginSuccess = currentUser => ({
  type: LOGIN_SUCCESS,
  currentUser,
})

export const logoutRequest = () => {
  return (dispatch) => {
    dispatch(logoutPending)
    dispatch(logoutFbAuthRequest())
    dispatch(logoutSuccess)
  }
}

const logoutSuccess = ({ type: LOGOUT_SUCCESS })
const logoutPending = ({ type: LOGOUT_PENDING })

//  *************
//  FB Auth
//  *************

import {
  SDK_FB_AUTH_ERROR,
  SDK_FB_AUTH_SUCCESS,
  SYNC_FB_AUTH_PENDING,
  SYNC_FB_AUTH_SUCCESS,
  SYNC_FB_AUTH_ERROR,
  LOGOUT_FB_AUTH_PENDING,
  LOGOUT_FB_AUTH_SUCCESS,
  LOGOUT_FB_AUTH_ERROR,
} from '../constant/auth'

/*
=+ Action Logic +=

  syncFbAuthRequest (Public)
    if response does not have accessToken
       => sdkFbAuthERROR (Private)

    => sdkFbAuthERROR (Private)
    => syncfbAuthPending (Private)

    [API]: DB Access & POST

      if 201
        => syncfbAuthSuccess (Private)
      if 403
        => syncfbAuthError (Private)
*/

const sdkFbAuthSuccess = () => ({ type: SDK_FB_AUTH_SUCCESS })
const sdkFbAuthError = () => ({ type: SDK_FB_AUTH_ERROR })
const syncfbAuthPending = () => ({ type: SYNC_FB_AUTH_PENDING })

const syncfbAuthSuccessHandler = (response) => {
  const res = camelize(response)
  if (!('currentUser' in res)) {
    throw new Error('Current user is not assigned')
  }
  const { currentUser } = res
  const { posts } = currentUser

  return (dispatch) => {
    dispatch(fetchPostSuccess(posts))
    dispatch(syncFbAuthSuccess(res))
  }
}

const syncFbAuthSuccess = response => ({
  type: SYNC_FB_AUTH_SUCCESS,
  response,
})

const syncFbAuthError = error => ({
  type: SYNC_FB_AUTH_ERROR,
  error,
})

export const syncFbAuthDBRequest = (response) => {
  return (dispatch) => {
    if (typeof response === 'object' && Object.prototype.hasOwnProperty.call(response, 'accessToken')) {
      dispatch(syncfbAuthPending())
      dispatch(sdkFbAuthSuccess)

      const data = new FormData()
      data.append('body', JSON.stringify(response))

      fetch(url.syncFbAuthDBRequest(), {
        method: 'POST',
        body: data,
      })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw 'No response'
      })
      .then((session) => {
        dispatch(syncfbAuthSuccessHandler(session))
      })
      .catch((error) => {
        dispatch(syncFbAuthError(error))
      })
    } else {
      dispatch(sdkFbAuthError)
    }
  }
}


const logoutFbAuthRequest = () => (dispatch) => {
  dispatch(logoutFbAuthPending)
  window.FB.logout(function(response) {
    dispatch(logoutFbAuthSuccess)
  })
}

const logoutFbAuthPending = ({ type: LOGOUT_FB_AUTH_PENDING })
const logoutFbAuthSuccess = ({ type: LOGOUT_FB_AUTH_SUCCESS })
const logoutFbAuthERROR = ({ type: LOGOUT_FB_AUTH_ERROR })


// ***************
//  Edit Profile
// ***************

const editProfilePending = ({ type: EDIT_PROFILE_PENDING })

const editProfileSuccess = session => ({
  type: EDIT_PROFILE_SUCCESS,
  session
})

const editProfileError = error => ({
  type: EDIT_PROFILE_ERROR,
  error
})

export const editProfileUpdate = profile => ({
  type: EDIT_PROFILE_UPDATE,
  profile,
})

export const editProfileRequest = () => (dispatch, getState) => {
  dispatch(editProfilePending)
  const sessionToken = getState().auth.sessionToken
  const profileForm = snakeCaseKeys(getState().auth.profileForm)

  if (!sessionToken) {
    throw new Error(`Session token is not valid`)
  }

  const data = new FormData()
  const params = {
    token: sessionToken,
    ...profileForm,
  }
  data.append('body', JSON.stringify(params))

  fetch(url.updateProfile(), {
    method: 'POST',
    body: data,
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(`status code:${response.status}[${response.statusText}]`)
  })
  .then((profile) => { dispatch(editProfileSuccess(profile)) })
  .catch((error) => { dispatch(editProfileError(error)) })
}


//  *************
//  Friend
//  *************


import {
  FRIEND_REQUEST_PENDING,
  FRIEND_REQUEST_SUCCESS,
  FRIEND_REQUEST_ERROR,
  FRIEND_APPROVE_PENDING,
  FRIEND_APPROVE_SUCCESS,
  FRIEND_APPROVE_ERROR,
} from '../constant/auth'


//  **********************
//  Friend Request
//  **********************

const friendRequestPending = ({ type: FRIEND_REQUEST_PENDING })

const friendRequestSuccess = response => ({
  type: FRIEND_REQUEST_SUCCESS,
  response,
})

const friendRequestError = error => ({
  type: FRIEND_REQUEST_ERROR,
  error,
})

export const friendRequestRequest = friendId => {

  if (!friendId) {
    throw new Error('friendIs is not defined : Actions::Auth::friendRequestRequest');
  }

  return (dispatch, getState) => {
    const currentUserId = getState().auth.currentUser.id

    if (!currentUserId) {
      throw new Error(`User is not logined in : Actions::Auth::friendRequestRequest ${ee}`);
    }

    const friendRequestUrl = url.friendRequest(currentUserId, friendId)

    dispatch(friendRequestPending)

    fetch(friendRequestUrl, {
      method: 'POST'
    })
    .then((response) => response.json())
    .then((response) => {
      dispatch(friendRequestSuccess(response))
    })
    .catch((error) => {
      dispatch(friendRequestError(error))
    })
  }
}

//  **********************
//  Friend Approve
//  **********************

export const friendApproveRequest = friendId => {

  if (!friendId) {
    throw new Error('friendIs is not defined : Actions::Auth::friendRequestRequest');
  }

  return (dispatch, getState) => {

    const currentUserId = getState().auth.currentUser.id

    if (!currentUserId) {
      throw new Error(`User is not logined in : Actions::Auth::friendRequestRequest ${e}`);
    }

    const url: string = endpoint.friendApprove(currentUserId, friendId)

    dispatch(friendApprovePending)

    fetch(url, {
      method: 'POST'
    })
    .then((response: object)=>{
      dispatch(friendApproveSuccess)
    })
    .catch((error)=>{
      dispatch(friendApproveError)
    })

  }
}

const friendApprovePending = ({type: FRIEND_APPROVE_PENDING})
const friendApproveSuccess = ({type: FRIEND_APPROVE_SUCCESS})
const friendApproveError = ({type: FRIEND_APPROVE_ERROR})
