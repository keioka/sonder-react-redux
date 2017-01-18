import cookie from 'react-cookie'
import camelize from 'camelize'
import { browserHistory } from 'react-router'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SYNC_FB_AUTH_SUCCESS,
  LOGOUT_FB_AUTH_SUCCESS,
  FETCH_CURRENT_USER_SUCCESS,
  EDIT_PROFILE_UPDATE,
  EDIT_PROFILE_PENDING,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
} from '../constant/auth'

const initialState = {
  isLogined: false,
  isNewUser: true,
  sessionToken: '',
  profileForm: {
    languages: [],
    images: [],
    interests: [],
    introduction: [{}, {}],
    location: {},
  },
  message: {
    userId: [{
      timestamp: '',
      message: '',
      userId: '',
    }, {

    }],
  },
  currentUser: {
    id: 0,
    profile: {
      first_name: '',
      last_name: '',
      birthday: '',
      languages: [],
      images: [],
      interests: [],
    },
    location: {
      city: 'San Francisco',
      province: 'California',
      country: 'USA',
      latitude: 121.322442,
      longitude: 123.43223,
    },
    introduction: {
      question1: '',
    },
    posts: [{
      id: 1,
      uid: '',
      date: '26th August, 2016',
      description: 'Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei',
      user: { id: 1 },
      location: {},
      isEnd: false,
      isMatched: false,
      mathcedUser: {},
      requestUser: [],
    }],
    friends: [],
    friendRequestedUsers: [],
    sentRequestUsers: [],
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER_SUCCESS:
      const session: Object = camelize(action.session)
      cookie.save('__sonder_t__', action.session.session_token)
      return Object.assign({}, state, {
        currentUser: Object.assign({},
          ...state.currentUser,
          ...session.currentUser,
        ),
        ...session,
        isLogined: true,
      })

    case LOGOUT_SUCCESS:
      cookie.remove('__sonder_t__', { path: '/' })
      browserHistory.push('/')

      return Object.assign({}, state, {
        sessionToken: '',
        isNewUser: false,
        currentUser: {},
        isLogined: false,
      })

    case LOGOUT_ERROR:
      return state

    case SYNC_FB_AUTH_SUCCESS:
      const response = camelize(action.response)
      cookie.save('__sonder_t__', action.response.sessionToken)

      return Object.assign({}, state, {
        ...state,
        ...response,
        currentUser: {
          ...state.currentUser,
          ...response.currentUser,
        },
        isLogined: true,
      })

    case EDIT_PROFILE_UPDATE:
      const newProfile = action.profile
      return Object.assign({}, state, {
        profileForm: {
          ...state.profileForm,
          ...newProfile,
        }
      })

    case EDIT_PROFILE_SUCCESS:
      browserHistory.push('/dashboard')
      const updatedSession = camelize(action.session)
      return Object.assign({}, state, {
        ...updatedSession,
      })

    default:
      return state
  }
}
