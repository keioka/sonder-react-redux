import camelize from 'camelize'

import {
  FETCH_LOCATION_PENDING,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_ERROR,
} from '../constant/location'

const initialState = {
  isPending: false,
  city: 'San Francisco',
  province: 'California',
  country: 'U.S',
  latitude: 37.7749,
  longitude: -122.4194,
  users: [{}, {}],
  posts: [{}, {}],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATION_PENDING:
      return Object.assign({}, state, {
        isPending: true,
      })
    case FETCH_LOCATION_SUCCESS:
      const location = camelize(action.location)
      return Object.assign({}, state, {
        isPending: false,
        ...location,
      })
    case FETCH_LOCATION_ERROR:
      return Object.assign({}, state, {
        isPending: false,
      })
    default:
      return state
  }
}
