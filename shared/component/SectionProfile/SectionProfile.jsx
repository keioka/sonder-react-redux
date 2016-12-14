import React, { Component } from 'react'
import { Link } from 'react-router'

import {
  ImgProfileXl,
  BtnPrimary,
  Tag
} from '../index'

import {
  sectionProfile,
  sectionProfile__image,
  sectionProfile__name,
  sectionProfile__city,
  section__content,
  section__subcontent
} from './section-profile.less'

const userIsAlreadyFriend = (users, currentUserId) => {
  return users.filter((user)=>{ return user.id == currentUserId }).length > 0;
}


const userIsAlreadySentRequest = (users, currentUserShowId) => {
  return users.filter((user)=>{ return user.id == currentUserShowId }).length > 0;
}

class SectionProfile extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
    this.sendRequest = this.sendRequest.bind(this)
  }

  sendRequest(){
    const { userId } = this.props.params
    this.props.friendRequestRequest(userId)
  }

  render(){
    
    let checkFriend = false
    let sentFriendRequest = false
    // If User Page show
    
    if (this.props.params && this.props.isLogined){
      
      const { 
        userId 
      } = this.props.params
    
      checkFriend = userIsAlreadyFriend(this.props.currentUser.friends, userId)
      
      sentFriendRequest = userIsAlreadySentRequest(this.props.currentUser.pendingFriends, userId)
     
      console.log(sentFriendRequest)
    }
    
    const { 
      profile, 
      location 
    } = this.props.user
    
    
    const {
      isLogined,
      isDashboard
    } = this.props
    
    const { 
      firstName, 
      lastName, 
      images, 
      languages 
    } = profile
    
    const { 
      city, 
      province, 
      country 
    } = location
    
    const languagesList = languages.map((lan)=>{
      return (
        <li><Tag tagName={lan.name} /></li>
      )
    })
 
    return (
      <div className={sectionProfile}>
        <ImgProfileXl imgUrl={images[0]} className={sectionProfile__image}/>
        <div className={section__content}>
          <h1 className={sectionProfile__name}>{firstName} {lastName}</h1>
          <h3 className={sectionProfile__city}>{city}, {province}, {country}</h3>
          <ul>
            {languagesList}
          </ul>
        </div>
        <div className={section__subcontent}>
          { isLogined && 
            !isDashboard &&
            !checkFriend &&
            !sentFriendRequest &&
            <BtnPrimary btnText={"Send Request"} onClick={this.sendRequest}/>
          }
          
           { isLogined && 
            !isDashboard &&
            !checkFriend &&
            sentFriendRequest &&
            <p>You have already sent request</p>
          }
          
          { isLogined &&     
            isDashboard &&
            <Link to="/dashboard/edit">Edit</Link>
          }
        </div>
      </div>
    )
  }
}

export default SectionProfile