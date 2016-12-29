import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { browserHistory } from 'react-router'

import {
  App,
  Home,
  Location,
  User,
  Post,
  Dashboard,
  Error,
  StyleGuide,
} from '../container'

import {
  PageLocationShow,
  PageUserShow,
  PageUserEdit,
  PageDashboardShow,
  PagePostShow,
  PagePostNew,
  PageErrorShow,
} from '../component'

const debug = require('debug')("App:Config")
debug('[Route]: Configuring Routes..')


export default (store) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path='/locations' component={Location}>
          <Route path='/locations/:locationId' component={PageLocationShow} />
        </Route>
        <Route path="/users" component={User} >
          <Route path='/users/:userId' component={PageUserShow} />
        </Route>
        <Route path="/posts" component={Post} >
          <Route path='/posts/new' component={PagePostNew} />
          <Route path='/posts/:postId' component={PagePostShow} />
        </Route>
        <Route path="/dashboard" component={Dashboard} >
          <IndexRoute component={PageDashboardShow} />
          <Route path='/dashboard/edit' component={PageUserEdit} />
        </Route>
        <Route path="/error" component={Error} >
          <IndexRoute component={PageErrorShow} />
        </Route>
        <Route path="/style" component={StyleGuide} />
      </Route>
    </Router>
  )
}


debug('[Route]: Done Configuring Routes..')
