import {
  ALERT_FETCH_USER_ERROR,
  ALERT_FETCH_POST_ERROR,
  ALERT_FETCH_LOCATION_ERROR,
} from '../constant/error'

const initialState = {
  status: '',
  type: '',
  message: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ALERT_FETCH_USER_ERROR:
      const { status, message } = action.error
      return Object.assign({}, state, {

      })
    case ALERT_FETCH_POST_ERROR:
    case ALERT_FETCH_LOCATION_ERROR:
    default:
      return state
  }
}
