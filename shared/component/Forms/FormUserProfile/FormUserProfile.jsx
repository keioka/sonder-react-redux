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
} from './form-user-profile.less'


const locationType = {
  city: "locality",
  province: "administrative_area_level_1",
  country: "country"
}

const addressFilter = (addressComponents) => {
  const address = {city: "", province: "", country: ""} 
  
  addressComponents.forEach((component)=>{
    switch (component.types[0]) {
      case locationType.city:
        address.city = component.long_name
        break;
      case locationType.province:
        address.province = component.long_name
        break;
      case locationType.country:
        address.country = component.long_name
        break;
    } 
  })
  
  return address
}

  
class FormUserProfile extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this)
    this.changePlaceHnadler = this.changePlaceHnadler.bind(this)
  }

  renderProfileName(){
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

  changeHandler(data, event){
    this.props.updateProfileHandler(data)
  }

  renderProfileBirthday(){
    
    const { profile } = this.props.currentUser
    const { birthday } = profile
    return (
      <div className={form__section}>
        <div className={form__section__block}>
          <label htmlFor="date">Birthday</label> 
          <input 
            type="date" 
            min="1900-01-01" 
            max="2016-01-01" 
            ref="birthday"
            defaultValue={birthday}
            onChange={this.changeHandler()} 
          />
        </div>
      </div>
    )
  }

  renderProfileGender(){
    const { profile } = this.props.currentUser
    const { gender } = profile
    
    return (
      <div className={form__section}>
        <label htmlFor="gender">Gender</label>
         
        <span>Male</span>
       { gender == 1 ? 
           <input type="radio" value="1" name="gender"  checked/> :
           <input type="radio" value="1" name="gender"  />
       }
      
        <span>Female</span>
        { gender == 2 ? 
           <input type="radio" value="2" name="gender" checked/> :
           <input type="radio" value="2" name="gender" />
        }
      </div>
    )
  }

  changePlaceHnadler(address){
    const { gmaps, location } = address
    const { address_components } = gmaps
    const { lat, lng } = location
    const locationResult = Object.assign({}, addressFilter(address_components), {
      latitude: lat,
      longitude: lng
    })
                                         
  }

  render(){

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
          <InputPlaceSearch onSelectPlace={this.changePlaceHnadler}/>
        </div>
        
      </form>

    )
  }
}

export default FormUserProfile