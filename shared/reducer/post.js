import {
  CREATE_NEW_POST_SUCCESS,
  SYNC_FB_AUTH_SUCCESS,
  FETCH_POST_SUCCESS,
} from '../constant/post'

const initialState = {
  posts: [{
    id: 1,
    uid: '',
    date: '',
    description: 'Hi, I am Kei',
    user: {},
    location: {},
    isEnd: false,
    isMatched: false,
    mathcedUser: {},
    requestUser: [],
  }],
  postForm: {
    date: '',
    description: '',
    location: {},
  },
}

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        posts: [...state.posts, action.post]
      })
    case CREATE_NEW_POST_SUCCESS:
      return Object.assign({}, state, {
        posts: [...state.posts, action.post]
      })
    case SYNC_FB_AUTH_SUCCESS:

    default:
      return state
  }
}
