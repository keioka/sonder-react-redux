import React, { Component, PropTypes } from 'react'

import {
  textClickable,
} from './style.less'

class TextClickable extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    this.props.onClick()
  }

  render() {
    const { text, className } = this.props
    const mergedClassName = `${textClickable} ${className}`
    return (
      <button className={mergedClassName} onClick={this.onClick}>{text}</button>
    )
  }
}

export default TextClickable
