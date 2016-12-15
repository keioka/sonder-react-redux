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
} from './container-profile.less'

class ContainerProfile extends Component {

  static propstype = {}

  render() {

    const { friends, friendRequestedUsers } = this.props.user

    return (
      <div className={containerProfile}>
        <NavProfile
          className={containerProfile__nav} {...this.props}
        />

        <div className={containerProfile__content}>
          <SectionIntroduction {...this.props} />
          <SectionFriendsList
            {...this.props}
            friends={friends}
          />

          {this.props.isDashboard &&
          <SectionFriendsList
            {...this.props}
            isFriendRequest={true}
            friends={friendRequestedUsers}
          />}

          <SectionPostsList posts={this.props.posts}/>

        </div>
      </div>
    )
  }
}

export default ContainerProfile
