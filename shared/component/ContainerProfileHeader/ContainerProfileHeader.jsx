import React, { Component } from 'react'

import {
  SectionProfile,
  Map
} from '../index'

import {
  containerProfileHeader,
  profileHeaderMap
} from './container-profile-header.less'

class ContainerProfileHeader extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    return (
      <header className={containerProfileHeader}>
        <div className={profileHeaderMap}>
          <Map />
        </div>
        <SectionProfile {...this.props}/>
      </header>
    )
  }
}

export default ContainerProfileHeader