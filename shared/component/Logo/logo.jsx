//************************
// Modules
//************************
import React, { Component } from 'react'
import { Link } from 'react-router'

//************************
// Component
//************************


//************************
// Style
//************************

import {
  logo
} from './logo.less'

//*************************
// Assets
//*************************
import Logo from '../../assets/images/svg/logo.svg'

export default ()=>{
  return (
    <Link to="/">
      <div className={logo}>
        <Logo />
        <h3>Sonder</h3>
      </div>
    </Link>
  )
}
