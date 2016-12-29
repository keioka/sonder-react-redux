import React, { Component } from 'react'

import {
  CardProfileSquare,
  ContainerCityBody,
  ContainerCityHeader,
  ContainerCards,
  SectionPostsList,
  CardPostSquare,
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

  componentWillMount() {
    const { locationId } = this.props.params
    const { isPending, id } = this.props.location

    if (!isPending && locationId != id) {
      this.props.fetchLocationRequest(locationId)
    }
  }

  onChangeActiveTab(value) {
    this.setState({
      activeTab: value,
    })
  }

  render() {
    const { locationId } = this.props.params
    const { users, posts } = this.props.location

    const userCards = users.map(user => <CardProfileSquare key={user.id} user={user} />)
    const postCards = posts.map(post => <CardPostSquare post={post} />)

    return (
      <div>
        <ContainerCityHeader {...this.props} />
        <NavCity onChangeActiveTab={this.onChangeActiveTab} />
        <ContainerCards>
          { this.state.activeTab === 0 ? userCards : postCards }
        </ContainerCards>
      </div>
    )
  }
}

export default　PageCityShow
