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
} from '../'

//************************
// Style
//************************

//*************************
// Assets
//*************************


class PageDashboardShow extends Component {
  
  constructor(){
    super()
  }

  render(){
    
    const { currentUser } = this.props

    return (
      <div>
        <ContainerProfileHeader 
          user={currentUser} 
          isDashboard={true} 
          isLogined={this.props.isLogined}
        />
        <ContainerProfile 
          user={currentUser} 
          posts={currentUser.posts}
          isDashboard={true} 
          isLogined={this.props.isLogined}
        />
      </div>
    )
  }
}

export default PageDashboardShow
