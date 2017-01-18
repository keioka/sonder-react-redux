import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  Hero,
  Map,
  ContainerCards,
  CardPostSquare,
} from '../../component'

import {
  container,
  container__title,
  container__image__box,
  container__image,
} from './style.less'

import First from './first.svg'
import Second from './second.svg'
import Third from './third.svg'


import * as UserActions from '../../actions/user'

const mapStateToProps = state => ({
  allPosts: state.post.allPosts,
  allUsers: state.users.allUsers,
  allUsersLocation: state.users.allUsersLocation,
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {

  render() {
    return (
      <div>
        <div className={container}>
          <h3 className={container__title}>All Travelers around the world</h3>
          <Map
            zoom={0}
            panControl={true}
            zoomControl={true}
            scaleControl={true}
            pins={this.props.allUsersLocation}
          />
        </div>
        <div className={container}>
          <h3 className={container__title}>How it works?</h3>
          <div className={container__image__box}>
            <div className={container__image}>
              <First />
              <span>Post your schedule</span>
            </div>
            <div className={container__image}>
              <Second />
              <span>Accept a hang out request</span>
            </div>
            <div className={container__image}>
              <Third />
              <span>Hang out!</span>
            </div>
          </div>
        </div>
        <ContainerCards>
          {this.props.allPosts && this.props.allPosts.map(post => <CardPostSquare post={post} />) }
        </ContainerCards>
      </div>
    )
  }
}

export default Home
