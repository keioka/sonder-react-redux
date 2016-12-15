import React, { Component } from 'react'

import { 
  ContainerCityBody,
  ContainerCity,
  ContainerCards,
  NavCity
} from '../../'

class PageCityShow extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){
    
    const { locationId } = this.props.params
    
    const users = this.props.allUsers.filter((user)=>{
      return user.location.id == locationId
    })
    
    return (
      <div>
        <ContainerCity />
        <NavCity />
        <ContainerCards users={users}/>
      </div>
    )
  }
}

export default　PageCityShow