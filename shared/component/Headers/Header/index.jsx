//************************
// Modules
//************************

import React, { Component } from 'react'

//************************
// Component
//************************

import {
  HeaderNav,
  Logo
} from '../../'

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


class Header extends Component {
  
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
