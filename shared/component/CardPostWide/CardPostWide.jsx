import React, { Component } from 'react'
import { Link } from 'react-router'

import {
  BtnPrimary,
  ImgProfileSm,
  ImgProfileLg 
} from '../index'

import {
  cardPostWide,
  cardPostWideActive,
  cardPostWideMatched,
  cardPostWideEnd,
  cardPostWide__content,
  cardPostWide__description,
  cardPostWide__requests,
  cardPostWide__description__header,
  cardPostWide__description__header__profile,
  cardPostWide__description__body,
  profile__name,
  profile__location,
  statusTag
} from './card-post-wide.less'

class CardPostWide extends Component {
  
  static propstype = { 
    user: React.PropTypes.objectOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      city: React.PropTypes.string.isRequired,
      img: React.PropTypes.string.isRequired
    })).isRequired
  }
  
  constructor(){
    super()
    this.state = {
      openForm: false
    }
    this.onClick = this.onClick.bind(this)
  }
  
  onClick(){
    this.setState({
      openForm: !this.state.openForm
    })    
  }

  renderForm(){
    if (this.state && this.state.openForm) {
      return (
        <form className={cardProfileWide__form}>
          <textarea name="" id="" cols="30" rows="10">  </textarea>
        </form>
      )
    } 
    return null
  }
  
  render(){
    const { id, date, description, user } = this.props.post
    const userId = user.id
    const cardClassName = `${cardPostWide__content} ${cardPostWideActive}`

    return (
      <Link to={`/posts/${id}`}>
        <div key={id} className={cardPostWide}>
          
          <div className={cardClassName}>
            <span className={statusTag}>Active</span>
            <h4>{date}</h4>
            <h2>10:00 - 12:00</h2>
            <p>San Francisco</p>
            <p>CA</p>
            <p>United States</p>
          </div>
          <div className={cardPostWide__description}>
            <div className={cardPostWide__description__header}>
              <ImgProfileSm /> 
              <div className={cardPostWide__description__header__profile}>
                <p className={profile__name}>Kei</p>
                <p className={profile__location}>San Francisco, CA, United States</p>
              </div>
            </div>
            <div className={cardPostWide__description__body}>
              {description} Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei  Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei
            </div>
          </div>
          <div className={cardPostWide__requests}>
            <ul>
              <li>a</li>
              <li>b</li>
              <li></li>
            </ul>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardPostWide