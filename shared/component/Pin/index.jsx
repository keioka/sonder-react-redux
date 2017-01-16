import React, { PropTypes, Component } from 'react'

import {
  pin,
  pin__text,
} from './style.less'

import Pin from './pin.svg'

const MARKER_SIZE = 40;
const greatPlaceStyle = {
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE / 2
}

export default (props) => {
  return (
    <div style={greatPlaceStyle} className={pin}>
      <span className={pin__text}>{props.text}</span>
      <Pin />
    </div>
  )
}
