import React, { Component, PropTypes } from 'react'

import {
  Loading,
} from '../../'

import {
  sectionLoading,
} from './style.less'

const SectionLoading = ({ text }) => (
  <div className={sectionLoading}>
    <Loading alertText="Loading" />
  </div>
)

export default SectionLoading
