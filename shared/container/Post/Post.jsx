import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as PostActions from '../../actions/post'


const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...PostActions, 
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class Post extends Component {
  
  constructor(){
    super()
  }

  render(){
    const { post, auth, createNewPostRequest } = this.props
   
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ...auth,
        ...post,
        createNewPostRequest
      })
    })
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Post
