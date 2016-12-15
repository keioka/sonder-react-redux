import React, { Component } from 'react'

import { 
  FormUserProfile
} from '../../'


import { 
  sectionProfileEdit
} from './section-profile-edit.less'

class SectionProfileEdit extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    this.props.onClick(2)
  }

  render(){
    return (
      <div className={sectionProfileEdit}>
        <FormUserProfile onClick={this.onClick} {...this.props}/>
      </div>
    )
  }
}

export default SectionProfileEdit