// ************************
// Modules
// ************************

import React, { Component, PropTypes } from 'react'

// ************************
// Component
// ************************

import {
  ContainerProfile,
  ContainerProfileHeader,
} from '../../'

// ************************
// Style
// ************************

// *************************
// Assets
// *************************


class PageDashboardShow extends Component {

  static propTypes = {
    isLogined: PropTypes.bool.isRequired,
    currentUser: PropTypes.object.isRequired,
    acceptHangoutRequest: PropTypes.func.isRequired,
  }

  render() {
    const { currentUser, isLogined, acceptHangoutRequest } = this.props

    return (
      <div>
        <ContainerProfileHeader
          user={currentUser}
          isDashboard={true}
          isLogined={isLogined}
        />
        <ContainerProfile
          user={currentUser}
          posts={currentUser.posts}
          isDashboard={true}
          isLogined={isLogined}
          acceptHangoutRequest={acceptHangoutRequest}
        />
      </div>
    )
  }
}

export default PageDashboardShow
