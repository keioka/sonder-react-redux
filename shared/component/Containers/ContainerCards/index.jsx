 /* @flow */
import React, { Component } from 'react'

import {
  CardProfileSquare
} from '../../'

import {
  containerCards,
} from './style.less'


const ContainerCards = props => (
  <div className={containerCards}>
    {props.children}
  </div>
)

ContainerCards.propstype = {
  children: React.PropTypes.node,
}

export default ContainerCards
