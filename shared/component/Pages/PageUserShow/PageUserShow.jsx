//************************
// Modules
//************************

import React, { Component } from 'react'

//************************
// Component
//************************

import {
  ContainerProfile,
  ContainerProfileHeader
} from '../../'

//************************
// Style
//************************

//*************************
// Assets
//*************************


class PageUserShow extends Component {
  
  constructor(){
    super()
  }

  render(){
    
    return (
      <div>
        { this.props.user &&
          <div>
            <ContainerProfileHeader {...this.props} isDashboard={false} />
            <ContainerProfile user={this.props.user}/>
          </div>
        }
      </div>
    )
  }
}

export default PageUserShow
