import React, { Component, PropTypes } from 'react'


import {
  navCity
} from './nav-city.less'

class ContainerCityBody extends Component {

  static propTypes = {
    onChangeActiveTab: PropTypes.func.isRequired,
  }

  constructor(){
    super()
    this.onClickActiveTabHandler = this.onClickActiveTabHandler.bind(this)
  }

  onClickActiveTabHandler(value) {
    this.props.onChangeActiveTab(value)
  }

  render(){

    return (
      <nav className={navCity}>
        <ul>
          <li onClick={this.onClickActiveTabHandler.bind(this, 0)}>Find Locals</li>
          <li onClick={this.onClickActiveTabHandler.bind(this, 1)}>Find Travelers</li>
        </ul>
      </nav>
    )
  }
}

export default ContainerCityBody
