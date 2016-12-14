import React, { Component } from 'react'

//************************
// Style
//************************

import {
  imgProfile__box,
  imgProfileLg 
} from './img-profile-lg.less'

class ImgProfileLg extends Component {
  
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
    const { className } = this.props
    
    console.log(className)
    
    const imgProfileClass = `${className} ${imgProfile__box}`
     
    return (
      <div className={imgProfileClass}>
        <div className={imgProfileLg}>
          <img src={imgUrl} alt="img"/>
        </div>
      </div>
    )
  }
}

export default ImgProfileLg