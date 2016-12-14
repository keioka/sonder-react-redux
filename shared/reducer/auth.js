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
  FETCH_CURRENT_USER_SUCCESS
} from '../constant/auth'


const initialState = {
  isLogined: false,
  isNewUser: true,
  sessionToken: "",
  profileForm: {
    first_name: "",
    last_name: "",
    birthday: "",
    languages: [],
    images: [],
    interests: [],
    introduction: [{}, {}],
    lcoation: {
      city: "San Francisco",
      province: "California",
      country: "USA",
      latitude: undefined,
      longitude: undefined
    }
  },
  message: {
    userId : [{
      timestamp: "",
      message: "",
      userId: ""
    }, {
      
    }],
    userId : [{}, {}]
  },
  currentUser: {
    id: 0,
    profile: {
      first_name: "",
      last_name: "",
      birthday: "",
      languages: [],
      images: [],
      interests: []
    },
    location: {
      city: "San Francisco",
      province: "California",
      country: "USA",
      latitude: undefined,
      longitude: undefined
    },
    introduction: {
      question1: ""
    },
    posts: [{
      id: 1,
      uid: "",
      date: "26th August, 2016",
      description: "Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei",
      user: {id: 1},
      location: {},
      isEnd: false,
      isMatched: false,
      mathcedUser: {},
      requestUser: []
    }],
    friends: [],
    friendRequestedUsers: [],
    sentRequestUsers: []
  }
}

export default function(state = initialState, action) {
  switch(action.type){
      
    case FETCH_CURRENT_USER_SUCCESS:
  
      const session = camelize(action.session)
      cookie.save('__sonder_t__', action.session.session_token)
      return Object.assign({}, state, {
        currentUser: Object.assign({},
          ...state.currentUser,
          ...session.currentUser
        ),
        ...session,
        isLogined: true
      })
      
    case LOGOUT_SUCCESS:
      
      cookie.remove('__sonder_t__', { path: '/' })
      browserHistory.push('/')
      
      return Object.assign({}, state, {
        sessionToken: "",
        isNewUser: false,
        currentUser: {},
        isLogined: false
      })
      
    case LOGOUT_ERROR:
      return state
    
    case SYNC_FB_AUTH_SUCCESS:
      
      const response = camelize(action.response)
      const { previousProfile } = state.currentUser
   
      cookie.save('__sonder_t__', action.response.session_token)
      
      
      return Object.assign({}, state, {
        currentUser: {
          ...state.currentUser,
          ...response.currentUser
        },
        isLogined: true
      })
    
    default:
      return state
  }
}
