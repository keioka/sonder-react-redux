import React, { Component } from 'react'

import {
  containerCity,
  containerCity__description,
  containerCity__map,
  containerCity__info,
  fontCity,
  fontState,
  fontCountry
} from './style.less'

import {
  Map,
} from '../../'

class ContainerCity extends Component {

  static propstype = {
    users: React.PropTypes.array,
  }

  static defaultType = {
    users: [],
  }

  render() {
    const { city, province, country, latitude, longitude } = this.props.location
    const geoloaction = { lat: parseFloat(latitude), lng: parseFloat(longitude) }
    return (
      <div className={containerCity}>
        <div className={containerCity__description}>
          <h1 className={fontCity}>{city}</h1>
          <h3 className={fontState}>{province}</h3>
          <h3 className={fontCountry}>{country}</h3>
          <ul className={containerCity__info}>
            <li>Travelers: </li>
            <li>Locals: </li>
            <li></li>
          </ul>
        </div>
        <div className={containerCity__map}>
          <Map center={geoloaction} />
        </div>
      </div>
    )
  }
}

export default ContainerCity
