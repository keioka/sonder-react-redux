//************************
// Modules
//************************

import React, { Component } from 'react'

//************************
// Component
//************************


//************************
// Style
//************************

import {
  form
} from './style.less'

//*************************
// Assets
//*************************

class FormSignup extends Component {

  constructor(){
    super()
  }

  render(){
    return (
      <form className={form}>
        <h3>Login</h3>
        <label for="">Email</label>
        <input type="text"/>
        <label for="">Password</label>
        <input type="password"/>
      </form>
    )
  }
}

export default FormSignup
