/* @flow */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

import * as AuthActions from '../../actions/auth'
import * as PostActions from '../../actions/post'

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
  ...PostActions,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends Component {

  static propTypes = {
    children: PropTypes.node,
    auth: PropTypes.object.isRequired,
    editProfileUpdate: PropTypes.func.isRequired,
    acceptHangoutRequest: PropTypes.func.isRequired,
  }

  componentWillMount() {
    if (!this.props.auth.isLogined) {
      browserHistory.push('/')
    }
  }

  render() {
    const { auth, editProfileUpdate, acceptHangoutRequest } = this.props
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      ...auth,
      editProfileUpdate,
      acceptHangoutRequest,
    }))
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Dashboard
