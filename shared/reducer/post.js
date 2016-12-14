import {
  CREATE_NEW_POST_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SYNC_FB_AUTH_SUCCESS
} from '../constant/post'

const initialState = {
  posts: [{
    id: 1,
    uid: "",
    date: "",
    description: "Hi, I am Kei",
    user: {},
    location: {},
    isEnd: false,
    isMatched: false,
    mathcedUser: {},
    requestUser: []
  }],
  postForm : {
    date: "",
    description: "",
    location: {}
  }
}

export default function(state = initialState, action) {
  switch(action.type){
      
    case CREATE_NEW_POST_SUCCESS:
      
    case LOGOUT_SUCCESS:
        
    case LOGOUT_ERROR:
    
    
    case SYNC_FB_AUTH_SUCCESS:
    
    default:
      return state
  }
}
