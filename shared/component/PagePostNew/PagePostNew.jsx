//************************
// Modules
//************************

import React, { Component } from 'react'
import { browserHistory } from 'react-router'

//************************
// Component
//************************

import {
  Map,
  BtnPrimary,
  InputPlaceSearch
} from '../'

//************************
// Style
//************************

import {
  pagePostNew,
  pagePostNew__title,
  form
} from './page-post-new.less'

//*************************
// Assets
//*************************


class PagePostNew extends Component {
  
  constructor(){
    super()
    this.state = {
      mapLocation: {}
    }
    console.log(this)
    this.onSelectPlace = this.onSelectPlace.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentWillMount(){
    if (!this.props.isLogined){
      browserHistory.push('/')
    }
  }

  onSelectPlace(address){
    const { location } = address
    this.setState({ 
      form: {
        location: location
      },
      mapLocation: location
    })
  }

  submitHandler(event){
    event.preventDefault()
    console.log(this)
    const params = {
      date: this.refs.date.value,
      description: this.refs.description.value,
      location: this.state.form.location
    }
    this.props.createNewPostRequest(params)
  }

  render(){
    
    return (
      <div className={pagePostNew}>
        <h3 className={pagePostNew__title}>Post your hangout schedule</h3>
        <form className={form}>
          <section>
            <InputPlaceSearch onSelectPlace={this.onSelectPlace}/>
          </section>
          <section>
            <Map center={this.state.location}/>
          </section>
          <input type="date" ref="date"/>
          <textarea name="" ref="description" id="" cols="30" rows="10"></textarea>
          <BtnPrimary btnText="Submit" onClick={this.submitHandler}/>
        </form>
      </div>
    )
  }
}

export default PagePostNew
