import React, { Component } from 'react'

//************************
// Style
//************************

import {
  imgProfileSm
} from './img-profile-sm.less'

class ImgProfileSm extends Component {
  
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
    
    return (
      <div className={imgProfileSm}>
        <img src={src} alt="img"/>
      </div>
    )
  }
}

export default ImgProfileSm