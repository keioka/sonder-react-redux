import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as PostActions from '../../actions/post'

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...PostActions,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Post extends Component {

  render() {
    const { post, auth, createNewPostRequest, fetchPostRequest, requestHangoutRequest, acceptHangoutRequest } = this.props
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      ...auth,
      ...post,
      createNewPostRequest,
      fetchPostRequest,
      requestHangoutRequest,
      acceptHangoutRequest,
    }))
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Post
