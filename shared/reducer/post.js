import {
  CREATE_NEW_POST_SUCCESS,
  SYNC_FB_AUTH_SUCCESS,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
} from '../constant/post'

import camelize from 'camelize'

const initPost = {
  uid: '',
  date: '',
  description: 'Hi, I am Kei',
  user: {},
  location: {},
  isEnd: false,
  isMatched: false,
  mathcedUser: {},
  requestUser: [],
}

const initialState = {
  allPosts: [],
  form: {
    date: '',
    description: '',
    location: {},
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return Object.assign({}, state, {
        allPosts: [...state.allPosts, ...camelize(action.posts)]
      })
    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        allPosts: [...state.allPosts, ...camelize(action.post)]
      })
    case CREATE_NEW_POST_SUCCESS:
      return Object.assign({}, state, {
        allPosts: [...state.allPosts, camelize(action.post)]
      })
    case SYNC_FB_AUTH_SUCCESS:

    default:
      return state
  }
}
