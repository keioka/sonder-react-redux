 /* @flow */
import React, { Component } from 'react'

import {
  btnPrimary
} from './BtnPrimary.less'

class BtnPrimary extends Component {

  static propTypes = {
    btnText: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <button className={btnPrimary} onClick={this.props.onClick}>
        {this.props.btnText}
      </button>
    )
  }
}

export default BtnPrimary
