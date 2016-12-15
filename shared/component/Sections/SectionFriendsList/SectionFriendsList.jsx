//************************
// Modules
//************************

import React, { Component } from 'react'

//************************
// Component
//************************

import {
  CardProfileWide
} from '../../'


//************************
// Style
//************************

import {
  sectionFriendsList,
  sectionFriendsList__title
} from './section-friends-list.less'

//*************************
// Assets
//*************************

class SectionFriendsList extends Component {
  
  constructor(){
    super()
  }

  render(){
    
    const { friends } = this.props
    const { isFriendRequest } = this.props
    const title = isFriendRequest ? "Friend Requests" : "Friends List"
    
    
    const cards = friends.map((user)=>{  
      return <CardProfileWide key={user.id} user={user} />
    })
    
    return (
      <div className={sectionFriendsList}>
        <h3 className={sectionFriendsList__title}>{title}</h3>
        {cards}
      </div>
    )
  }
}

export default SectionFriendsList
