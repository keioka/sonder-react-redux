import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../auth'
import * as types from '../../constant/auth'
import nock from 'nock'
import expect from 'expect' // You can use any testing library

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions:auth', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  const body = {}

  nock('http://example.com/')
  .get('/current')
  .reply(200, { body: { todos: ['do something'] }})

  const expectedActions = [
   { type: types.FETCH_CURRENT_USER_PENDING },
   { type: types.FETCH_CURRENT_USER_SUCCESS, body: { todos: ['do something']  } }
  ]


  it('should create an action to add a todo', (done) => {
    const store = mockStore({ todos: [] }, expectedActions, done)
    store.dispatch(actions.fetchCurrentUserRequest())
  })
})
