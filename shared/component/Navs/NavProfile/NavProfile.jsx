import React, { Component } from 'react'

import {
  navProfile,
  navProfile__title,
} from './nav-profile.less'

class NavProfile extends Component {

  static propTypes = {
    isDashboard: React.PropTypes.bool,
  }

  render() {
    return (
      <nav className={navProfile}>
        <ul>
          <li><span>Profile</span></li>
          <li><span>Posts</span></li>
          <li><span>Friends List</span></li>
          { this.props.isDashboard &&
            <li><span>Friends Request</span></li>
          }
        </ul>
      </nav>
    )
  }
}

export default NavProfile
