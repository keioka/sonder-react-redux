import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AuthActions from '../../actions/auth'
import * as UserActions from '../../actions/user'


import {
  SectionLoading,
} from '../../component'

const mapStateToProps = state => ({
  user: state.users,
  auth: state.auth,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
  ...UserActions,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class User extends Component {
  static propTypes = {
    params: PropTypes.object,
    user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    friendRequestRequest: PropTypes.func.isRequired,
    friendApproveRequest: PropTypes.func.isRequired,
    fetchUserRequest: PropTypes.func.isRequired,
  }

  render() {
    const { friendRequestRequest, friendApproveRequest, fetchUserRequest } = this.props
    const { allUsers, isPending } = this.props.user
    const { isLogined, currentUser } = this.props.auth

    let user: Object
    const { userId } = this.props.params

    if (typeof userId !== 'undefined') {
      user = allUsers.find(user => user.id === parseInt(userId))

      if (!isPending && typeof user === 'undefined') {
        this.props.fetchUserRequest(userId)
      } else {

      }
    }

    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      user,
      allUsers,
      fetchUserRequest,
      friendRequestRequest,
      friendApproveRequest,
      isLogined,
      currentUser,
    }))

    return (
      <div>
        { isPending ? <SectionLoading />  : children }
      </div>
    )
  }
}

export default User
