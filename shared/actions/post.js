import 'whatwg-fetch'

import {
  CREATE_NEW_POST_PENDING,
  CREATE_NEW_POST_SUCCESS,
  CREATE_NEW_POST_ERROR,
  REQUEST_HANGOUT_PENDING,
  REQUEST_HANGOUT_SUCCESS,
  REQUEST_HANGOUT_ERROR,
  ACCEPT_HANGOUT_PENDING,
  ACCEPT_HANGOUT_SUCCESS,
  ACCEPT_HANGOUT_ERROR
} from '../constant/post'

import { endpoint } from '../config'
const url = endpoint.post



/*****************
  createNewPost
*****************/


export const createNewPostRequest = (params) => {
  
  return (dispatch, getState) => {

    dispatch(requestHangoutPending)
    
    const paramsMergedUserId = Object.assign({}, params, {
        user_id: getState().auth.currentUser.id
      })

    fetch(url.requestHangout(), {
      method: 'POST',
      params: {"post": paramsMergedUserId}
    })
    .then((response)=>{
      console.log(response)
      if (response.ok) {
        return response.json()
      }
      throw `${response.statusText}`  
    })
    .then((post)=>{
      dispatch(requestHangoutSuccess(post))
    })
    .catch((error)=>{
      dispatch(createNewPostError(error))
    })
  }
}

const createNewPostPending = ({type: CREATE_NEW_POST_PENDING})

const createNewPostSuccess = (post) => ({
  type: CREATE_NEW_POST_SUCCESS,
  post
})

const createNewPostError = (error) => ({
  type: CREATE_NEW_POST_ERROR,
  error
})



/*****************
  requestHangout
*****************/



const requestHangoutRequest = (params) => {
  
  return dispatch, getState => {

    
  }
}
                                       
const requestHangoutPending = ({type: REQUEST_HANGOUT_PENDING})
const requestHangoutSuccess = (request) => ({
  type: REQUEST_HANGOUT_SUCCESS,
  request
})
const requestHangoutError = (error) => ({
  type: REQUEST_HANGOUT_ERROR,
  error
})
                                         
                                         
                                         
                                         
const acceptHangoutRequest = (postId, userId) => {
  return dispatch => {
    fecth(url.acceptHangout)
    .then()
    .then()
    .cathc()
  }
}                                        

const acceptHangoutPending = ({type: ACCEPT_HANGOUT_PENDING})

const acceptHangoutSuccess = (request) => ({
  type: ACCEPT_HANGOUT_SUCCESS,
  request
})
const acceptHangoutError = (error) => ({
  type: ACCEPT_HANGOUT_ERROR,
  error
})
