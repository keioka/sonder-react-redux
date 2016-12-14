//************************
// Modules
//************************

import React, { Component } from 'react'

//************************
// Component
//************************

import { 
  BtnPrimary
} from '../'

//************************
// Style
//************************

import {
  form,
  form__title
} from './form-login.less'

//*************************
// Assets
//*************************

class FormLogin extends Component {
  
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onSubmit(event){
    event.preventDefault()
    const { loginFetch } = this.props
    const data = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    loginFetch(data)
  }
  
  render(){
    return (
      <form className={form}>
        <h4 className={form__title}>Login</h4>
        <label htmlFor="">Email</label>
        <input type="text" ref="email" />
        <label htmlFor="">Password</label>
        <input type="password" ref="password" />
        <BtnPrimary btnText={"Submit"} onClick={this.onSubmit} />
      </form>
    )
  }
}

export default FormLogin
