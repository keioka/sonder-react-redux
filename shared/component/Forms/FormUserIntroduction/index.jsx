import React, { Component } from 'react'
import _ from 'lodash'

import {
  ImgProfileLg,
  ImgProfileSm,
  InputTagCountry,
  InputTagLanguage,
  InputTagInterest,
} from '../../'

import {
  form,
  form__section,
  form__section__title,
} from './style.less'

class FormUserIntroduction extends Component {

  constructor() {
    super()
    this.onChangeTagCountry = this.onChangeTagCountry.bind(this)
    this.onChangeTagInterest = this.onChangeTagInterest.bind(this)
    this.onChangeTagLanguage = this.onChangeTagLanguage.bind(this)
  }

  onChangeTagCountry(tags) {
    const tagsArray: Array = _.map(tags, tag => tag.text)
    const payload = { country: tagsArray }
    this.props.editProfileUpdate(payload)
  }

  onChangeTagInterest(tags) {
    const tagsArray: Array = _.map(tags, tag => tag.text)
    const payload = { interests: tagsArray }
    this.props.editProfileUpdate(payload)
  }

  onChangeTagLanguage(tags) {
    const tagsArray: Array = _.map(tags, tag => tag.text)
    const payload = { languages: tagsArray }
    this.props.editProfileUpdate(payload)
  }

  render() {
    return (
      <form className={form}>
        <h3 className={form__section__title}>Introduction</h3>
        <div className={form__section}>
          <label htmlFor="languages">Language</label>
          <InputTagLanguage onChange={this.onChangeTagLanguage} />
        </div>
        {/* <div className={form__section}>
          <label htmlFor="jobs">Job</label>
          <input type="text" />
        </div> */}
        {/* <div className={form__section}>
          <label htmlFor="countries">Where have you visited?</label>
          <InputTagCountry onChange={this.onChangeTagCountry} />
        </div> */}
        <div className={form__section}>
          <label htmlFor="interests">Interest</label>
          <InputTagInterest onChange={this.onChangeTagInterest} />
        </div>
      </form>

    )
  }
}

export default FormUserIntroduction
