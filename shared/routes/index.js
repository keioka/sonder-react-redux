import React from 'react'
import { Router, Route } from 'react-router'
import {
  App,
  Home,
  City,
  User
} from '../container'

const debug = require('debug')("Config")
debug('[Route]: Configuring Routes..')

export default (store) => {
  return (
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="city" component={City} />
      <Route path="user" component={User} />



    </Route>
  )
}


debug('[Route]: Done Configuring Routes..')


