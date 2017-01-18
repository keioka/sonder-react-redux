let API_BASE_URL = 'http://localhost:3000/api/v1'

if (__STG__) {
  API_BASE_URL = 'http://stg-api.sonderexp.com/api/v1'
} else if (__PROD__) {
  API_BASE_URL = 'http://api.sonderexp.com/api/v1'
}

const debug = require('debug')("Build")
debug( __DEV__)
debug(__STG__)
debug(__PROD__)
debug(API_BASE_URL)


export let endpoint = {}

endpoint.users = {
  getAll: () => (`${API_BASE_URL}/users`),
  getAllUsersFromCity: (cityId) => (`${API_BASE_URL}/cities/${cityId}/users`),
  getOne: (id)=> (`${API_BASE_URL}/users/${id}`),
  fetchUsersLocation: () => (`${API_BASE_URL}/users/locations`),
}

endpoint.auth = {
  fetchCurrentUser: () => (`${API_BASE_URL}/sessions/current`),
  updateProfile: () => (`${API_BASE_URL}/sessions/update_profile`),
  syncFbAuthDBRequest: ()=> (`${API_BASE_URL}/sessions/auth`),
  friendRequest: (userId, frinedId) => (`${API_BASE_URL}/users/${userId}/friends/${frinedId}/request`),
  friendApprove: (userId, frinedId) => (`${API_BASE_URL}/users/${userId}/friends/${frinedId}/approve`)
}

endpoint.post = {
  fetchPost: postId => (`${API_BASE_URL}/posts/${postId}`),
  fetchAllPost: () => (`${API_BASE_URL}/posts`),
  createNewPost: () => (`${API_BASE_URL}/posts`),
  requestHangout: ({ postId, currentUserId }) => (`${API_BASE_URL}/posts/${postId}/users/${currentUserId}/request`),
  acceptHangout: (postId, userId) => (`${API_BASE_URL}/posts/${postId}/users/${userId}/approve`)
}

endpoint.location = {
  fetchLocation: locationId => (`${API_BASE_URL}/locations/${locationId}`),
}


export let apiKey = {}

if (__DEV__) {
  apiKey.facebook = "824890790986789"
} else if (__STG__) {
  apiKey.facebook = "854419024700632"
} else if (__PROD__) {
  apiKey.facebook = "820082211467647"
}
