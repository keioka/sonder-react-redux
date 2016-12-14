import React, { Component } from 'react'
import { 
  ContainerCards, 
  ContainerCity,
  ContainerCityBody,
  ContainerProfile,
  ContainerProfileHeader,
  
  Form,
  FormLogin
} from '../../component'


class StyleGuide extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <ContainerCards />
        <ContainerCity />
        <ContainerProfile />
        <ContainerProfileHeader />
        <div>
          <h1>heading</h1>
          <h2>heading</h2>
          <h3>heading</h3>
          <h4>heading</h4>
          <h5>heading</h5>
          <h6>heading</h6>
        </div>
        <div>
          <Form />
          <FormLogin />
        </div>
      </div>
    )
  }
}

export default StyleGuide
