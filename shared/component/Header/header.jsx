//************************
// Modules
//************************

import React, { Component } from 'react'

//************************
// Component
//************************

import HeaderNav from '../HeaderNav/HeaderNav'

//************************
// Style
//************************

import {
  header,
  header__logo
} from './header.less'

//*************************
// Assets
//*************************

import Logo from '../Logo/logo'


class Header extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <header className={header}>
        <div className={header__logo}>
          <Logo />  
        </div>
        <HeaderNav {...this.props} />
      </header>
    )
  }
}

export default Header
