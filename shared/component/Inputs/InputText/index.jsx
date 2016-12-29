import React, { Component } from 'react'

//************************
// Style
//************************

import {
  inputText,
} from './style.less'


class InputText extends Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    event.preventDefault()
    this.props.onChange(event.target.value)
  }

  render(){
    const className = `${inputText} ${this.props.className}`
    return (
      <input
        type="text"
        className={className}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        ref={this.props.ref}
      />
    )
  }
}

export default InputText
