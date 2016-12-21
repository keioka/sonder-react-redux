// ************************
// Modules
// ************************

import React, { Component, PropTypes } from 'react'

// ************************
// Component
// ************************

import {
  CardPostWide,
  CardMyPostWide
} from '../../'


// ************************
// Style
// ************************

import {
  sectionFriendsList,
  sectionFriendsList__title,
} from './style.less'

// *************************
// Assets
// *************************


class SectionPostsList extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    isByCurrentUser: PropTypes.bool.isRequired,
    acceptHangoutRequest: PropTypes.func.isRequired,
  }

  static defaultProps = {
    posts: [],
  }

  render() {
    const { posts, isByCurrentUser, acceptHangoutRequest } = this.props

    let cards = []
    if (posts.length > 0 && isByCurrentUser) {
      cards = posts.map(post => <CardMyPostWide key={post.id} post={post} acceptHangoutRequest={acceptHangoutRequest} />)
    } else if (posts.length > 0 && !isByCurrentUser) {
      cards = posts.map(post => <CardPostWide key={post.id} post={post} />)
    }

    return (
      <div className={sectionFriendsList}>
        <h3 className={sectionFriendsList__title}>Posts</h3>
        {cards}
      </div>
    )
  }
}

export default SectionPostsList
