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
  form__section,
  form__section__title,
} from './style.less'

class FormUserIntroduction extends Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(data) {
    console.log(data)
  }

  render() {
    return (
      <form className={form}>
        <h3 className={form__section__title}>Introduction</h3>
        <div className={form__section}>
          <label htmlFor="languages">Language</label>
          <InputTagLanguage />
        </div>
        <div className={form__section}>
          <label htmlFor="jobs">Job</label>
          <input type="text" />
        </div>
        <div className={form__section}>
          <label htmlFor="countries">Where have you visited?</label>
          <InputTagCountry onChange={this.onChange} />
        </div>
        <div className={form__section}>
          <label htmlFor="interests">Interest</label>
          <InputTagInterest onChange={this.onChange} />
        </div>
      </form>

    )
  }
}

export default FormUserIntroduction
