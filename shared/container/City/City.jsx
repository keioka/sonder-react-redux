import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CityActions from '../../actions/city'

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(CityActions, dispatch)
)

@connect(mapStateToProps, mapDispatchToProps)
class City extends Component {
  
  constructor(){
    super()
  }

  render(){
    const { users } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
         ...users
      })
    })
    
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default City
