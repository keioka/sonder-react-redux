const API_BASE_URL = __DEV__ ? 'http://localhost:3000' : ''

export let endpoint = {}


endpoint.users = {
  getAll: () => (`${API_BASE_URL}/users`),
  getAllUsersFromCity: (cityId) => (`${API_BASE_URL}/cities/${cityId}/users`),
  getOne: (id)=> (`${API_BASE_URL}/users/${id}`)
}

endpoint.auth = {
  fetchCurrentUser: () => (`${API_BASE_URL}/current`),
  syncFbAuthDBRequest: ()=> (`${API_BASE_URL}/session`),
  friendRequest: (userId, frinedId) => (`${API_BASE_URL}/users/${userId}/friends/${frinedId}/request`),
  friendApprove: (userId, frinedId) => (   `${API_BASE_URL}/users/${userId}/friends/${frinedId}/approve`)
}

endpoint.post = {
  fetchPost: postId => (`${API_BASE_URL}/posts/${postId}`),
  createNewPost: () => (`${API_BASE_URL}/posts`),
  requestHangout: ({ postId, currentUserId }) => (`${API_BASE_URL}/posts/${postId}/users/${currentUserId}/request`),
  acceptHangout: (postId, userId) => (`${API_BASE_URL}/posts/${postId}/users/${userId}/approve`)
}
