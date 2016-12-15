import React, { Component } from 'react'


import {
  navCity
} from './nav-city.less'

class ContainerCityBody extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    
    return (
      <nav className={navCity}>
        <ul>
          <li>Find Locals</li>
          <li>Find Travelers</li>
        </ul>
      </nav>
    )
  }
}

export default ContainerCityBody