import React, { Component, PropTypes } from 'react'

class SelectMin extends Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.onChangeMin(e.target.value)
  }

  render() {
    let array = []
    for (let i = 0; i < 60; i+=5) {
      array.push(<option key={i} value={i}>{i<10? '0'+i : ''+i}</option>)
    }

    return (
      <select name="min" id="min" onChange={this.onChange}>
        {array}
      </select>
    )
  }
}

export default SelectMin
