import React, { Component } from 'react'

import { 
  FormUserIntroduction
} from '../../'

class SectionIntroductionEdit extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <FormUserIntroduction {...this.props}/>
      </div>
    )
  }
}

export default SectionIntroductionEdit 