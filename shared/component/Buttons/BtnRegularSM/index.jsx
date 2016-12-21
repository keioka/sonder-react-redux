import React, { Component, PropTypes } from 'react'

import {
  btnRegularSM,
} from './style.less'

const BtnRegularSM = ({ onClick, text }) => (
  <button
    className={btnRegularSM}
    onClick={onClick}
  >
    {text}
  </button>
)

export default BtnRegularSM
