import React, { Component, PropTypes } from 'react'

import {
  SectionProfile,
  Map
} from '../../'

import {
  containerProfileHeader,
  profileHeaderMap,
} from './style.less'


class ContainerProfileHeader extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  static defaultTypes = {
    user: PropTypes.object.isRequired,
  }

  render() {
    const { location } = this.props.user
    const geolocation = { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) }
    return (
      <header className={containerProfileHeader}>
        <div className={profileHeaderMap}>
          <Map center={geolocation} />
        </div>
        <SectionProfile {...this.props} />
      </header>
    )
  }
}

export default ContainerProfileHeader
