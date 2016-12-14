import React, { Component } from 'react'

import {
  containerCity,
  containerCity__description,
  containerCity__map,
  containerCity__info,
  fontCity,
  fontState,
  fontCountry
} from './container-city.less'

import {
  Map
} from '../'

class ContainerCity extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    const location = {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
    
    const { city, state, country } = location
    
    return (
      <div className={containerCity}>
        <div className={containerCity__description}>
          <h1 className={fontCity}>{city}</h1>
          <h3 className={fontState}>{state}</h3>
          <h3 className={fontCountry}>{country}</h3>
          <ul className={containerCity__info}>
            <li>Travelers: 123</li>
            <li>Locals: 21</li>
            <li></li>
          </ul>
        </div>
        <div className={containerCity__map}>
          <Map />
        </div>
      </div>
    )
  }
}

export default ContainerCity