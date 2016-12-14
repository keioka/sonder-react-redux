import 'whatwg-fetch'
import cookie from 'react-cookie'

import { config } from '../config'
import {
  LOGIN_REQUEST,
  LOGIN_FETCH,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SINGUP_REQUEST,
  SINGUP_SUCCESS, 
  SINGUP_ERROR, 
  LOGOUT_PENDING,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS, 
  LOGOUT_ERROR,
  EDIT_PROFILE_UPDATE,
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR
} from '../constant/auth'


import { endpoint } from '../config'
const url = endpoint.auth
const COOKIE = '__sonder_t__'



export const fetchCurrentUserRequest = () => {
  
  return dispatch => {
    const token = cookie.load(COOKIE)
    
    dispatch(fetchCurrentUserPending)
    
    if (token){
  
      var data = new FormData();
      data.append("token", token);

      fetch(url.fetchCurrentUser(token), {
        method: 'POST',
        body: data
      })
      .then((response)=>{
        if (response.ok) {
          return response.json()
        }
        
        throw response;
      })
      .then((currentUser)=>{
        dispatch(fetchCurrentUserSuccess(currentUser))
      })
      .catch((error)=>{
        dispatch(fetchCurrentUserError(error))
      })
    }
  }
}

const fetchCurrentUserPending = ({type: FETCH_CURRENT_USER_PENDING})

const fetchCurrentUserSuccess = (session) => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  session
})
const fetchCurrentUserError = (error) => ({
  type: FETCH_CURRENT_USER_ERROR,
  error
})


// FETCH => FETCH is used for get request
// REQUEST => POST, PUT, DELETE
// PENDING => Right After calling request action 

const loginRequest = ({type: LOGIN_REQUEST})

export const loginFetch = authData => {
  return (dispatch) => {
    dispatch(loginRequest)
    console.log("login fetching...")
    dispatch(loginSuccess({ profile: { name: "kei" }}))
    //return fetch().then().catch()
  }
}

const loginSuccess = currentUser => ({
  type: LOGIN_SUCCESS,
  currentUser 
})


export const logoutRequest = dispatch => {
  return dispatch => {
    dispatch(logoutPending)
    dispatch(logoutFbAuthRequest())
    dispatch(logoutSuccess)
  }
}

const logoutSuccess = ({ type: LOGOUT_SUCCESS })
 

const logoutPending = ({type: LOGOUT_PENDING})


//*************
// FB Auth
//*************

import {  
  SDK_FB_AUTH_ERROR,
  SDK_FB_AUTH_SUCCESS,
  SYNC_FB_AUTH_PENDING,
  SYNC_FB_AUTH_SUCCESS,
  SYNC_FB_AUTH_ERROR,
  LOGOUT_FB_AUTH_PENDING,
  LOGOUT_FB_AUTH_SUCCESS,
  LOGOUT_FB_AUTH_ERROR
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




// Private Action


const sdkFbAuthSuccess = () => ({type: SDK_FB_AUTH_SUCCESS})

const sdkFbAuthError = () => ({type: SDK_FB_AUTH_ERROR})

const syncfbAuthPending = () => ({type: SYNC_FB_AUTH_PENDING})

const syncfbAuthSuccess = (response) => ({
  type: SYNC_FB_AUTH_SUCCESS,
  response
})    

const syncFbAuthError = (response) => ({
  type: SYNC_FB_AUTH_ERROR,
  response
})

// Public Action


export const syncFbAuthDBRequest = (response) => {
  
  return dispatch => {
    if (typeof response === "object" && response.hasOwnProperty("accessToken")){
      
      dispatch(syncfbAuthPending())
      dispatch(sdkFbAuthSuccess)
    
      var data = new FormData();
      data.append( "body", JSON.stringify( response ) );

      fetch(url.syncFbAuthDBRequest(), {
        method: 'POST',
        body: data
      })
      .then((response)=>{
        
        if (response.ok) {
          return response.json()
        }
        
        throw 'No response';
        
      })
      .then((session)=>{  
        dispatch(syncfbAuthSuccess(session))
      })
      .catch((error)=>{
        dispatch(syncFbAuthError(error))
      })
      
    } else {
      dispatch(sdkFbAuthError)                        
    }
  }
} 




const logoutFbAuthRequest = () => {
  return dispatch => {
    dispatch(logoutFbAuthPending)
    window.FB.logout(function(response) {
      console.log(response)
      dispatch(logoutFbAuthSuccess)
    });
  }
}

const logoutFbAuthPending = ({type: LOGOUT_FB_AUTH_PENDING})
const logoutFbAuthSuccess = ({type: LOGOUT_FB_AUTH_SUCCESS})
const logoutFbAuthERROR = ({type: LOGOUT_FB_AUTH_ERROR})


//*************
// Current User
//*************

export const editProfileUpdate = profile => ({
  type: EDIT_PROFILE_UPDATE,
  profile
})



//*************
// Friend
//*************


import {  
  FRIEND_REQUEST_REQUEST,
  FRIEND_REQUEST_PENDING,
  FRIEND_REQUEST_SUCCESS, 
  FRIEND_REQUEST_ERROR,
  FRIEND_APPROVE_REQUEST, 
  FRIEND_APPROVE_PENDING, 
  FRIEND_APPROVE_SUCCESS, 
  FRIEND_APPROVE_ERROR
} from '../constant/auth'


//**********************
// Friend Request
//**********************

export const friendRequestRequest = (friendId) => {
  
  if (!friendId) {
    throw new Error('friendIs is not defined : Actions::Auth::friendRequestRequest'); 
  }
  
  return (dispatch, getState )=> {
      
    const currentUserId = getState().auth.currentUser.id
      
    if (!currentUserId) {
      throw new Error(`User is not logined in : Actions::Auth::friendRequestRequest ${ee}`);
    }
    
    const friendRequestUrl = url.friendRequest(currentUserId, friendId)
    
    dispatch(friendRequestPending)
  
    fetch(friendRequestUrl, {
      method: 'POST'
    })
    .then((response)=>{
      dispatch(friendRequestSuccess)
    })
    .catch((error)=>{
      dispatch(friendRequestError)
    })
  
  }
} 

const friendRequestPending = ({type: FRIEND_REQUEST_PENDING}) 
const friendRequestSuccess = ({type: FRIEND_REQUEST_SUCCESS}) 
const friendRequestError = ({type: FRIEND_REQUEST_ERROR}) 



//**********************
// Friend Approve
//**********************

export const friendApproveRequest = (frinedId) => {
  
  if (!friendId) {
    throw new Error('friendIs is not defined : Actions::Auth::friendRequestRequest'); 
  }
  
  return (dispatch, getState) => {
  
    const currentUserId = getState().auth.currentUser.id
    
    if (!currentUserId) {
      throw new Error(`User is not logined in : Actions::Auth::friendRequestRequest ${e}`);
    }
    
    const url = endpoint.friendApprove(currentUserId, friendId)
  
    dispatch(friendApprovePending)
          
    fetch(url, {
      method: 'POST'
    })
    .then((response)=>{
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
