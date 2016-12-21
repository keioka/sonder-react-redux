import React, { Component, PropTypes } from 'react'

class SelectHour extends Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.onChangeHour(e.target.value)
  }

  render() {
    let array = []
    for (let i = 0; i < 24; i++) {
      array.push(<option key={i} value={i}>{i<10? '0'+i : ''+i}</option>)
    }

    return (
      <select name="hour" id="hour" onChange={this.onChange}>
        {array}
      </select>
    )
  }
}

export default SelectHour
