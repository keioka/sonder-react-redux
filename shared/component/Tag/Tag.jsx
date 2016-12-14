import React, { Component } from 'react'

import {
  tag
} from './tag.less'

class Tag extends Component {
  
  static propstype = {
    tagName: React
  }
  
  constructor(){
    super()
  }

  render(){
    return (
      <span className={tag}>{this.props.tagName}</span>
    )
  }
}

export default Tag