import React, { Component } from 'react'

import {
  NavCity
} from '../../'

import {
  containerCityBody
} from './container-city-body.less'

class ContainerCityBody extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    return (
      <div className={ containerCityBody}>
        <NavCity />
      </div>
    )
  }
}

export default ContainerCityBody