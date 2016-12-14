import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

import * as AuthActions from '../../actions/auth'

const mapStateToProps = state => {
  return { auth: state.auth }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(AuthActions, dispatch)
)

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends Component {
  
  constructor(){
    super()
  }
  
  componentWillMount(){
    if (!this.props.auth.isLogined){
      browserHistory.push('/')
    }
  }

  render(){
    const { auth, editProfileUpdate } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
         ...auth,
         editProfileUpdate: editProfileUpdate
      })
    })
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Dashboard
