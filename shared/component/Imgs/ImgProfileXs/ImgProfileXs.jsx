import React, { Component } from 'react'

//************************
// Style
//************************

import {
  imgProfileXs
} from './img-profile-xs.less'

class ImgProfileXs extends Component {
  
  static defaultProps = {
    src: "https://www.appointbetterboards.co.nz/Custom/Appoint/img/avatar-large.png"
  }

  static propstype = {
    src: React.PropTypes.string.isRequired
  }
  
  constructor(){
    super()
  }

  render(){
    const { src } = this.props
    const className = `${imgProfileXs} ${this.props.className}`
    return (
      <div className={className}>
        <img src={src} alt="img"/>
      </div>
    )
  }
}

export default ImgProfileXs