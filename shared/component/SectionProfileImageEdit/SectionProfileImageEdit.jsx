import React, { Component } from 'react'

import { 
  ImgProfileLg,
  ImgProfileSm,
  BtnPrimary
} from '../'


class SectionProfileEdit extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
    this.onClick = this.onClick.bind(this)
  }
  
  onClick(){
    this.props.onClick(1)
  }

  render(){
    return (
      <div>
        <ImgProfileLg />
      </div>
    )
  }
}

export default SectionProfileEdit