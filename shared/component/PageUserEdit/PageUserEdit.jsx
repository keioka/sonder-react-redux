import React, { Component } from 'react'

import { 
  SectionProfileEdit,
  SectionProfileImageEdit,
  SectionIntroductionEdit,
  NavProfile,
  BtnPrimary
} from '../'

import {
  pageUserEdit,
  pageUserEdit__body,
  pageUserEdit__form,
  pageUserEdit__notification,
  pageUserEdit__notification__message,
  nav,
  user__icon
} from './page-user-edit.less'


import User from '../../assets/images/svg/user.svg'

class PageUserEdit extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
    this.onActive = this.onActive.bind(this)
    this.updateProfileHandler = this.updateProfileHandler.bind(this)
    this.state = {
      active: 0
    }
  }

  onActive(n){
    this.setState({active: n})
  }

  getActiveTab(){
    var activeTab
    
    switch (this.state.active) {
      case 0:
        activeTab = <SectionProfileImageEdit onClick={this.onActive} />
        break
      case 1:
        activeTab = <SectionProfileEdit onClick={this.onActive} updateCurrentUser={this.props.updateCurrentUser}/>
        break
      case 2:
        activeTab = <SectionIntroductionEdit onClick={this.onActive} updateCurrentUser={this.props.updateCurrentUser}/>
        break
      default:
        activeTab = null 
        break
    }
    
    return activeTab
  }

  updateProfileHandler(data){
    this.props.editProfileUpdate(data)
  }

  editProfileRequest(){
    
  }

  render(){
    
    return (
      <div className={pageUserEdit}>
        <div className={pageUserEdit__notification}>
          <div className={pageUserEdit__notification__message}>
            <User />
            <span></span>
          </div>
        </div>
        <div className={pageUserEdit__body}>
          <nav className={nav}>
            <ul>
              <a href="#image"><li><span>Profile Image</span></li></a>
              <a href="#info"><li><span>User Information</span></li></a>
              <a href="#profile"><li><span>Introduction</span></li></a>
            </ul>
            <BtnPrimary btnText={"Update your profile"} />
          </nav>
          <div className={pageUserEdit__form}>
              <div id="image">
                <SectionProfileImageEdit />
              </div>
              <div id="info">
                <SectionProfileEdit {...this.props} updateProfileHandler={this.updateProfileHandler} />
              </div>
              <div id="profile">
                <SectionIntroductionEdit {...this.props}
                updateProfileHandler={this.updateProfileHandler}  />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageUserEdit