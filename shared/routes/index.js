import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { browserHistory } from 'react-router'

import {
  App,
  Home,
  City,
  User,
  Post,
  Dashboard,
  StyleGuide
} from '../container'

import {
  PageCityShow,
  PageUserShow,
  PageUserEdit,
  PageDashboardShow,
  PagePostShow,
  PagePostNew
} from '../component'

const debug = require('debug')("App:Config")
debug('[Route]: Configuring Routes..')


export default (store) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path='/location' component={City}>
          <Route path='/locations/:locationId' component={PageCityShow} />
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
        <Route path="/style" component={StyleGuide} />
      </Route>
    </Router>
  )
}


debug('[Route]: Done Configuring Routes..')


