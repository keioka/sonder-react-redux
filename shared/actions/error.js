import { browserHistory } from 'react-router'

export const alertFetchUserError = (error) => {
  browserHistory.push('/error')
  return {
    type: 'ALERT_FETCH_USER_ERROR',
    error,
  }
}

export const alertFetchPostError = (error) => ({
  type: 'ALERT_FETCH_POST_ERROR',
  error,
})

export const alertFetchLocationError = (error) => ({
  type: 'ALERT_FETCH_LOCATION_ERROR',
  error,
})
