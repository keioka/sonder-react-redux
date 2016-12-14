import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AuthActions from '../../actions/auth'
import * as UsersActions from '../../actions/users'

const mapStateToProps = state => ({
  user: state.users,
  auth: state.auth
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...AuthActions, 
    ...UsersActions
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class User extends Component {
  
  constructor(){
    super()
  }

  render(){
    
    const { friendRequestRequest, friendApproveRequest, fetchUserRequest } = this.props
    const { allUsers } = this.props.user
    const { isLogined, currentUser } = this.props.auth

    
    let user 
    const { userId } = this.props.params
  
    if (typeof userId !== "undefined") {
      user = allUsers.find((user) => { 
        return user.id == userId
      })     
      
      if (typeof user === "undefined"){
        this.props.fetchUserRequest(userId)
      }
    }
    
    
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        user,
        allUsers,
        fetchUserRequest,
        friendRequestRequest,
        friendApproveRequest,
        isLogined,
        currentUser
      })
    })
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default User
