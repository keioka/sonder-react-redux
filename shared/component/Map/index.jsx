//************************
// Modules
//************************

import React, {PropTypes, Component} from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function'
import GoogleMap from 'google-map-react'

//************************
// Component
//************************

import {
  Pin,
} from '../'

//************************
// Style
//************************

import {
  map
}
from './map.less'

//*************************
// Assets
//*************************

class Map extends Component {

  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props)
    this.createMapOptions = this.createMapOptions.bind(this)
  }

  createMapOptions(maps) {
    return {
      panControl: this.props.panControl,
      zoomControl: this.props.zoomControl,
      scaleControl: this.props.scaleControl,
      rotateControl: this.props.rotateControl,
      draggable: this.props.draggable,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [{ stylers: [{ 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
  }

  render() {
    return (
      <div className={map}>
        <GoogleMap
          defaultCenter={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.createMapOptions}
          bootstrapURLKeys={{
            key: 'AIzaSyDnd7VpVekR7d09azP_RQ5Bb_bQHKMkSVo',
            language: 'en'
          }}>
            { this.props.pins && this.props.pins.map(pin => <Pin key={pin.google_map_uid} lat={pin.latitude} lng={pin.longitude} text={pin.city} />)}
          </GoogleMap>
      </div>
    );
  }
}

export default Map
