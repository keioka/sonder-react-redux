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
    const initialValue = this.props.value || 0

    for (let i = 0; i < 24; i++) {
      if (parseInt(initialValue) === i) {
        array.push(<option key={i} value={i}>{i<10? '0'+i : ''+i}</option>)
      } else {
        array.push(<option key={i} value={i}>{i<10? '0'+i : ''+i}</option>)
      }
    }

    return (
      <select name="hour" id="hour" defaultValue={initialValue} onChange={this.onChange}>
        {array}
      </select>
    )
  }
}

export default SelectHour
