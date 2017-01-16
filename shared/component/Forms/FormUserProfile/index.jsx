import React, { Component } from 'react'

import {
  BtnPrimary,
  InputPlaceSearch
} from '../../'

import {
  form,
  form__section,
  form__section__title,
  form__section__block,
} from './style.less'


const addressFilter = (addressComponents) => {

  const locationType = {
    city: "locality",
    province: "administrative_area_level_1",
    country: "country",
  }

  const address = {city: "", province: "", country: ""}

  addressComponents.forEach((component) => {
    switch (component.types[0]) {
      case locationType.city:
        address.city = component.long_name
        break
      case locationType.province:
        address.province = component.long_name
        break
      case locationType.country:
        address.country = component.long_name
        break
    }
  })

  return address
}


class FormUserProfile extends Component {

  static propstype = {}

  constructor() {
    super()
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.changePlaceHandler = this.changePlaceHandler.bind(this)
  }

  onChangeHandler(event) {
    let payload = {}
    payload[event.target.name] = event.target.value
  }

  changePlaceHandler(address) {
    const { gmaps, location, placeId } = address
    const { address_components } = gmaps
    const { lat, lng } = location
    const locationResult = Object.assign({}, addressFilter(address_components), {
      latitude: lat,
      longitude: lng,
      googlePlaceUid: placeId
    })
    const payload = { "location": locationResult }
    this.props.editProfileUpdate(payload)
  }

  renderProfileName() {
    const { profile } = this.props.currentUser
    const { firstName, lastName } = profile

    return (
      <div className={form__section}>
        <div className={form__section__block}>
          <label htmlFor="firstName">First Name</label>
          <span>{firstName}</span>
        </div>
        <div className={form__section__block}>
          <label htmlFor="lastName">Last Name</label>
          <span>{lastName}</span>
        </div>
      </div>
    )
  }

  renderProfileBirthday() {

    const { profile } = this.props.currentUser
    const { birthday } = profile
    return (
      <div className={form__section}>
        <div className={form__section__block}>
          <label htmlFor="date">Birthday</label>
          <span>{birthday}</span>
          {/* <input
            type="date"
            name="birthday"
            ref={(input) => { this.inputDate = input }}
            onChange={this.onChangeHandler}
            min="1900-01-01"
            max="2016-01-01"
            ref="birthday"
            defaultValue={birthday}
          /> */}
        </div>
      </div>
    )
  }

  renderProfileGender() {
    const { profile } = this.props.currentUser
    const { gender } = profile

    return (
      <div className={form__section}>
        <div className={form__section__block}>
          <label htmlFor="gender">Gender</label>
          { gender === 0 ? <span>Male</span> : <span>Female</span> }
        </div>

       {/* { gender === 0 ?
           <input
             type="radio"
             ref={(input) => { this.inputGender = input }}
             onChange={this.onChangeHandler}
             value="1"
             name="gender"
             checked
           /> :
           <input
             type="radio"
             ref={(input) => { this.inputGender = input }}
             onChange={this.onChangeHandler}
             value="1"
             name="gender"
           />
       }

        <span>Female</span>
        { gender === 1 ?
           <input
             type="radio"
             ref={(input) => { this.inputGender = input }}
             onChange={this.onChangeHandler}
             value="2"
             name="gender"
             checked
           /> :
           <input
             type="radio"
             ref={(input) => { this.inputGender = input }}
             onChange={this.onChangeHandler}
             value="2"
             name="gender"
           />
        } */}
      </div>
    )
  }


  render() {
    const { profile, location } = this.props.currentUser
    const { firstName, lastName, gender, birthday } = profile
    return (
      <form className={form}>
        <h3 className={form__section__title}>User Information</h3>
        {this.renderProfileName()}
        {this.renderProfileBirthday()}
        {this.renderProfileGender()}

        <div className={form__section}>
          <label htmlFor="address">Your Location</label>
          <InputPlaceSearch onSelectPlace={this.changePlaceHandler} />
        </div>

      </form>

    )
  }
}

export default FormUserProfile
