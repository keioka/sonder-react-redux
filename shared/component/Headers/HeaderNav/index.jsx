// ************************
// Modules
// ************************

import React, { Component } from 'react'
import { Link } from 'react-router'

// ************************
// Component
// ************************

import {
  FormLogin,
  BtnFbAuth,
  ImgProfileXs
} from '../../'

// ************************
// Style
// ************************

import {
  header__nav,
  header__nav__ul,
  header__formModal,
  header__nav__img,
  header__nav__link
} from './style.less'

//*************************
// Assets
//*************************


class HeaderNav extends Component {

  notLogined() {
    const { syncFbAuthDBRequest } = this.props
    const notLogined = (
      <ul className={header__nav__ul}>
        <li><BtnFbAuth syncFbAuthDBRequest={syncFbAuthDBRequest} /></li>
      </ul>
    )
    return notLogined
  }

  logined() {
    const {
      currentUser,
      logoutRequest
    } = this.props

    const logined = (
      <ul className={header__nav__ul}>
        <li>
          <Link to='/dashboard' className={header__nav__link}>
          <ImgProfileXs src="https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12243212_10153865417575815_3805264624572361972_n.jpg?oh=b652b106447c1b36c79a6d9341002cac&oe=58C16945" className={header__nav__img}/>
          <span>{currentUser.profile.firstName}</span>
          </Link>
        </li>
        <li><Link to='/posts/new'>Post</Link></li>
        <li onClick={logoutRequest}>Logout</li>
      </ul>
    )

    return logined
  }

  render() {

  /*  This function would be implement later

    const loginComponent = (
      <li>
        <label htmlFor="login">Login</label>
        <input type="checkbox" id="login"/>
        <div className={header__formModal}>
          <FormLogin loginFetch={loginFetch}/>
        </div>
      </li>
    )
  */
    const { isLogined } = this.props
    return(
      <nav className={header__nav}>
        {isLogined ? this.logined() : this.notLogined() }
      </nav>
    )
  }
}

export default HeaderNav
