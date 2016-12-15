 /* @flow */
import React, { Component } from 'react'

import {
  CardProfileSquare
} from '../../'

import {
  containerCards
} from './container-cards.less'


class ContainerCards extends Component {

  static propstype = {
    users: React.PropTypes.array,
  }

  static defaultType = {
    users: [],
  }

  render() {
    const userCards = this.props.users.map((user) => {
      return (
        <CardProfileSquare key={user.id} user={user} />
      )
    })

    return (
      <div className={containerCards}>
        {userCards}
      </div>
    )
  }
}

export default ContainerCards
