import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  SectionLoading,
} from '../../component'

import * as LocationActions from '../../actions/location'

const mapStateToProps = state => ({
  location: state.location,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(LocationActions, dispatch)
)

@connect(mapStateToProps, mapDispatchToProps)
class Location extends Component {

  render() {
    const { location, fetchLocationRequest } = this.props
    const { isPending } = location
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      location,
      fetchLocationRequest,
    }))
    return (
      <div>
        { isPending ? <SectionLoading /> : children }
      </div>
    )
  }
}

export default Location
