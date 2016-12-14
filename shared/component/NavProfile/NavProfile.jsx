import React, { Component } from 'react'

import {
  navProfile,
  navProfile__title
} from './nav-profile.less'

class NavProfile extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    return (
      <nav className={navProfile}>
        <ul>
          <li><span>Profile</span></li>
          <li><span>Posts</span></li>
          <li><span>Friends List</span></li>
          { this.props.isDashboard &&
            <li><span>Friends Request</span></li>
          }
          <li><span>Experience (coming soon)</span></li>
          <li><span>Review (coming soon)</span></li>
        </ul>
      </nav>
    )
  }
}

export default NavProfile