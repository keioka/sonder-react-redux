import React, { Component } from 'react'

import {
  CardProfileSquare
} from '../index'

import {
  containerCards
} from './container-cards.less'


class ContainerCards extends Component {
  
  static propstype = {}
  
  constructor(){
    super()
  }

  render(){

    
    const userCards = this.props.users.map((user)=>{
      return (
        <CardProfileSquare user={user}/>
      )
    })
    
    return (
      <div className={containerCards}>
        {userCards}
      </div>
    )
  }
}

export default ContainerCards