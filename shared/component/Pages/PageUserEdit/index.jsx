import React, { Component } from 'react'

import {
  SectionProfileEdit,
  SectionProfileImageEdit,
  SectionIntroductionEdit,
  NavProfile,
  BtnPrimary
} from '../../'

import {
  pageUserEdit,
  pageUserEdit__body,
  pageUserEdit__form,
  pageUserEdit__notification,
  pageUserEdit__notification__message,
  nav,
  user__icon
} from './style.less'


import User from '../../../assets/images/svg/user.svg'

class PageUserEdit extends Component {

  constructor() {
    super()
    this.state = {
      active: 0
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    this.props.editProfileRequest()
  }

  render() {
    return (
      <div className={pageUserEdit}>
        <div className={pageUserEdit__notification}>
          <div className={pageUserEdit__notification__message}>
            <User />
            <span>Tell us about yourself</span>
          </div>
        </div>
        <div className={pageUserEdit__body}>
          <nav className={nav}>
            <ul>
              <a href="#image"><li><span>Profile Image</span></li></a>
              <a href="#info"><li><span>User Information</span></li></a>
              <a href="#profile"><li><span>Introduction</span></li></a>
            </ul>
            <BtnPrimary btnText={"Update your profile"} onClick={this.onSubmit} />
          </nav>
          <div className={pageUserEdit__form}>
            <div id="image">
              <SectionProfileImageEdit />
            </div>
            <div id="info">
              <SectionProfileEdit {...this.props} />
            </div>
            <div id="profile">
              <SectionIntroductionEdit {...this.props} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageUserEdit
