import React, { Component } from 'react'

import {
  NavCity
} from '../../'

import {
  containerCityBody,
} from './style.less'

class ContainerCityBody extends Component {

  static propstype = {}

  render() {
    return (
      <div className={containerCityBody}>
        <NavCity />
      </div>
    )
  }
}

export default ContainerCityBody
