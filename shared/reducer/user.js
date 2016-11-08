const initialState = {
  user: {}
}

export default function(state = initialState, action) {
  switch(action){
    case "ADD_TODO":
      return Object.assign({}, state, {
        todo: []
      })
    default:
      return state
  }
}
