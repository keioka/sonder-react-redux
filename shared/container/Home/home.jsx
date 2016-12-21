import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  Hero,
  Map,
  ContainerCards,
} from '../../component'

import {
  container,
  container__title,
} from './home.less'

import * as UserActions from '../../actions/user'

const mapStateToProps = state => ({
  allUsers: state.users.allUsers,
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {

  render(){
    return (
      <div>
        <div className={container}>
          <h3 className={container__title}>All Travelers around the world</h3>
          <Map zoom={0}/>
        </div>
        <ContainerCards users={this.props.allUsers} {...this.props}/>
      </div>
    )
  }
}

export default Home
