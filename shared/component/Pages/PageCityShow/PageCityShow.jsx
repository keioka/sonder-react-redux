import React, { Component } from 'react'

import {
  ContainerCityBody,
  ContainerCityHeader,
  ContainerCards,
  SectionPostsLists,
  NavCity,
} from '../../'

class PageCityShow extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: 0,
    }
    this.onChangeActiveTab = this.onChangeActiveTab.bind(this)
  }

  onChangeActiveTab(value) {
    this.setState({
      activeTab: value,
    })
  }

  render() {
    const { locationId } = this.props.params
    const users = this.props.allUsers.filter(user => user.location.id === parseInt(locationId))
    const posts=[]
    return (
      <div>
        <ContainerCityHeader />
        <NavCity onChangeActiveTab={this.onChangeActiveTab} />
        { this.state.activeTab === 0 ?
          <ContainerCards users={users} /> :
          <SectionPostsLists posts={posts} />
        }
      </div>
    )
  }
}

export default　PageCityShow
