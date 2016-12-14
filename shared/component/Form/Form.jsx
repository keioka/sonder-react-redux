import React, { Component } from 'react'

import {
  form
} from './form.less'

class Form extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <form action="" className={form}>
        <label for="">Checkbox</label>
        <input type="checkbox"/>
        <label for="">Color</label>
        <input type="color"/>
        <label for="">Date</label>
        <input type="date"/>
        <label for="">Datetime</label>
        <input type="datetime"/>
        <label for="">Datetime Local</label>
        <input type="datetime-local"/> 
        <label for="">Email</label>
        <input type="email"/> 
        <label for="">File</label>
        <input type="file"/>
        <input type="hidden"/>
        <label for="">Image</label>
        <input type="image"/>
        <label for="">Month</label>
        <input type="month"/> 
        <label for="">Number</label>
        <input type="number"/>
        <label for="">Password</label> 
        <input type="password"/>
        <label for="radio">Radio</label>
        <input type="radio"/>
        <label for="">Range</label>
        <input type="range"/> 
        <label for="">Reset</label>
        <input type="reset"/>
        <label for="">Search</label>
        <input type="search"/>
        <input type="submit"/>
        <label for="">Tel</label>
        <input type="tel" required />
        <label for="t">Text</label>
        <input id="t" type="text" required/>
        <label for="">Time</label>
        <input type="time"/> 
        <label for="">Url</label>
        <input type="url"/>
        <label for="">Week</label>
        <input type="week"/>
      </form>
    )
  }
}

export default Form
