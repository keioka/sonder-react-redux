import React, { Component } from 'react'

import {
  NavProfile,
  SectionIntroduction
} from '../index'

import {
  containerProfile
} from './container-profile.less'

class ContainerProfileEdit extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    
    return (
      <div className={containerProfile}>
        <NavProfile />
        <SectionIntroduction />
      </div>
    )
  }
}

export default ContainerProfileEdit 