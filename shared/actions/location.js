import {
  FETCH_LOCATION_PENDING,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_ERROR,
} from '../constant/location'

import {
  endpoint,
} from '../config'

import {
  alertFetchUserError,
} from './error'

const { location } = endpoint

export const fetchLocationRequest = (locationId) => (dispatch) => {

  dispatch(fetchLocationPending)

  fetch(location.fetchLocation(locationId))
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response.json())
  })
  .then(location => dispatch(fetchLocationSuccess(location)))
  .catch(error => dispatch(fetchLocationErrorHandle(error)))
}

const fetchLocationErrorHandle = error => dispatch => {
  dispatch(alertFetchUserError(error))
  dispatch(fetchLocationError(error))
}

const fetchLocationPending = ({
  type: FETCH_LOCATION_PENDING,
})

const fetchLocationSuccess = location => ({
  type: FETCH_LOCATION_SUCCESS,
  location,
})

const fetchLocationError = error => ({
  type: FETCH_LOCATION_ERROR,
  error,
})
