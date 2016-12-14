import React, { Component } from 'react'

//************************
// Style
//************************

import {
  imgProfileXl
} from './img-profile-xl.less'

class ImgProfileXl extends Component {
  
  static defaultProps = {
    className: "", 
    imgUrl: "https://www.appointbetterboards.co.nz/Custom/Appoint/img/avatar-large.png"
  }

  static propstype = {
    imgUrl: React.PropTypes.string.isRequired
  }
  
  constructor(){
    super()
  }

  render(){
    const { imgUrl } = this.props
    console.log(this.props.className)
    return (
      <div className={this.props.className}>
        <div className={imgProfileXl}>
          <img src={imgUrl} alt="img"/>
        </div>
      </div>
    )
  }
}

export default ImgProfileXl