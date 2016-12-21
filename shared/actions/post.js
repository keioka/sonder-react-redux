import 'whatwg-fetch'

import {
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_ALL_POSTS_PENDING,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_ERROR,
  CREATE_NEW_POST_PENDING,
  CREATE_NEW_POST_SUCCESS,
  CREATE_NEW_POST_ERROR,
  REQUEST_HANGOUT_PENDING,
  REQUEST_HANGOUT_SUCCESS,
  REQUEST_HANGOUT_ERROR,
  ACCEPT_HANGOUT_PENDING,
  ACCEPT_HANGOUT_SUCCESS,
  ACCEPT_HANGOUT_ERROR,
} from '../constant/post'

import { endpoint } from '../config'

const url:string = endpoint.post

// *****************
// fetchPost
// *****************

const fetchPostPending = ({ type: FETCH_POST_PENDING })
const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post,
})
const fetchPostError = error => ({
  type: FETCH_POST_ERROR,
  error,
})

export const fetchPostRequest = (postId) => (dispatch) => {
  dispatch(fetchPostPending)
  fetch(url.fetchPost(postId))
  .then((response) => {
    if (response.ok) {
      return response.json()
    }

    throw response.statusText
  })
  .then((response) => {
    dispatch(fetchPostSuccess(response))
  })
  .catch((error) => {
    dispatch(fetchPostError(error))
  })
}


// *****************
// fetchAllPosts
// *****************
export const fetchAllPostsRequest = () => {}

const fetchAllPostsPending = ({})
const fetchAllPoststSuccess = posts => ({
})
const fetchAllPostsPostError = error => ({

})

// *****************
// createNewPost
// *****************

export const createNewPostRequest = (params) => (dispatch, getState) => {
  dispatch(createNewPostPending)

  const paramsMergedUserId = Object.assign({}, params, {
    user_id: getState().auth.currentUser.id
  })

  const data = new FormData()
  data.append('body', JSON.stringify(paramsMergedUserId))

  fetch(url.createNewPost(), {
    method: 'POST',
    body: data,
  })
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw `${response.statusText}`
  })
  .then((post) => {
    dispatch(createNewPostSuccess(post))
  })
  .catch((error) => {
    dispatch(createNewPostError(error))
  })
}

const createNewPostPending = ({type: CREATE_NEW_POST_PENDING})

const createNewPostSuccess = (post) => ({
  type: CREATE_NEW_POST_SUCCESS,
  post,
})

const createNewPostError = (error) => ({
  type: CREATE_NEW_POST_ERROR,
  error,
})

// *****************
// requestHangout
// *****************


export const requestHangoutRequest = ({ postId, message }) => (dispatch, getState) => {
  dispatch(requestHangoutPending)
  const currentUserId = getState().auth.id
  const data = new FormData()
  data.append('body', JSON.stringify({ message }))

  fetch(url.requestHangout({ postId, currentUserId }), {
    method: 'POST',
    body: data,
  })
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw `${response.statusText}`
  })
  .then((post) => {
    dispatch(requestHangoutSuccess(post))
  })
  .catch((error) => {
    dispatch(requestHangoutError(error))
  })
}

const requestHangoutPending = ({ type: REQUEST_HANGOUT_PENDING })
const requestHangoutSuccess = request => ({
  type: REQUEST_HANGOUT_SUCCESS,
  request,
})
const requestHangoutError = error => ({
  type: REQUEST_HANGOUT_ERROR,
  error,
})


export const acceptHangoutRequest = (postId, userId) => (dispatch) => {
  fetch(url.acceptHangout(postId, userId))
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response.statusText)
  })
  .then(post => acceptHangoutSuccess(post))
  .catch(error => acceptHangoutError(error))
}

const acceptHangoutPending = ({ type: ACCEPT_HANGOUT_PENDING })

const acceptHangoutSuccess = request => ({
  type: ACCEPT_HANGOUT_SUCCESS,
  request,
})

const acceptHangoutError = error => ({
  type: ACCEPT_HANGOUT_ERROR,
  error,
})
