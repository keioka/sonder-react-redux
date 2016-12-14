//************************
// Modules
//************************

import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

//************************
// Component
//************************

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
    super(props);
  }

  createMapOptions(maps) {
    return {
      panControl: false,
      zoomControl: false,
      scaleControl: false,
      rotateControl: false,
      draggable: false,
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
          }}
        />
      </div>
    );
  }
}

export default Map