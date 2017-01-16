import React, { Component } from 'react'

import {
  NavProfile,
  SectionIntroduction,
  SectionFriendsList,
  SectionPostsList,
} from '../../'

import {
  containerProfile,
  containerProfile__content,
  containerProfile__nav,
} from './style.less'

class ContainerProfile extends Component {

  static propstype = {}

  render() {
    const { user, acceptHangoutRequest } = this.props
    const { friends, friendRequestedUsers, posts } = user

    return (
      <div className={containerProfile}>
        <NavProfile
          className={containerProfile__nav}
          {...this.props}
        />

        <div className={containerProfile__content}>
          <SectionIntroduction {...this.props} />
          {/* <SectionFriendsList
            {...this.props}
            friends={friends}
          />

          {this.props.isDashboard &&
          <SectionFriendsList
            {...this.props}
            isFriendRequest={true}
            friends={friendRequestedUsers}
          />} */}

          <SectionPostsList
            posts={posts}
            acceptHangoutRequest={acceptHangoutRequest}
            isByCurrentUser={this.props.isByCurrentUser}
          />

        </div>
      </div>
    )
  }
}

export default ContainerProfile
