import React from 'react'
import { Router, Route } from 'react-router'
import { browserHistory } from 'react-router'

import {
  App,
  Home,
  City,
  User
} from '../container'

const debug = require('debug')("App:Config")
debug('[Route]: Configuring Routes..')


export default (store) => {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="city" component={City} />
        <Route path="user" component={User} />
      </Route>
    </Router>
  )
}


debug('[Route]: Done Configuring Routes..')


