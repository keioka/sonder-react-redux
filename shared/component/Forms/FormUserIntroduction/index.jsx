import React, { Component } from 'react'

import {
  ImgProfileLg,
  ImgProfileSm,
  InputTagCountry,
  InputTagLanguage,
  InputTagInterest
} from '../../'

import {
  form,
  form__section__title,
} from './style.less'

class FormUserIntroduction extends Component {

  static propstype = {}

  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(data){
  }

  render(){
    return (

      <form className={form}>
        <h3 className={form__section__title}>Introduction</h3>
        <label htmlFor="firstName">Language</label>
        <InputTagLanguage />
        <label htmlFor="firstName">Job</label>
        <input type="text" />
        <label htmlFor="firstName">Where have you visited?</label>
        <InputTagCountry onChange={this.onChange}/>
        <label htmlFor="firstName">Interest</label>
        <InputTagInterest onChange={this.onChange}/>
      </form>

    )
  }
}

export default FormUserIntroduction
