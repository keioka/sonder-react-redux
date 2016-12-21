import React, { Component, PropTypes } from 'react'

import {
  wrap,
  text,
  bounceball,
  loading,
} from './style.less'

const Loading = ({ alertText }) => (
  <div className={wrap}>
    <div className={loading}>
      <div className={bounceball}></div>
      <div className={text}>NOW LOADING</div>
      <div className={text}>{alertText}</div>
    </div>
  </div>
)

export default Loading
