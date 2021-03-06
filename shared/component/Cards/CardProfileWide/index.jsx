import React, { Component } from 'react'
import { Link } from 'react-router'

import {
  BtnPrimary,
  ImgProfileSm
} from '../../'

import {
  cardProfileWide,
  cardProfileWide__profile,
  cardProfileWide__name,
  cardProfileWide__city,
  cardProfileWide__form,
} from './style.less'

class CardProfileWide extends Component {

  static propstype = {
    user: React.PropTypes.objectOf(React.PropTypes.shape({
      firstName: React.PropTypes.string.isRequired,
      lastName: React.PropTypes.string.isRequired,
      city: React.PropTypes.string.isRequired,
      img: React.PropTypes.string.isRequired
    })).isRequired
  }

  constructor() {
    super()
    this.state = {
      openForm: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      openForm: !this.state.openForm
    })
  }

  renderForm() {
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
    const { uid , profile } = this.props.user
    const { firstName, lastName, images } = this.props.user

    const { city } = this.props.user.location

    return (
      <Link to={`/users/${uid}`}>
      <div key={id} className={cardProfileWide}>
        <ImgProfileSm imgUrl={images[0]} />
        <div className={cardProfileWide__profile}>
          <h4 className={cardProfileWide__name}>{firstName}  {lastName}</h4>
          <h5 className={cardProfileWide__city}>{city}</h5>
        </div>
      </div>
      </Link>
    )
  }
}

export default CardProfileWide
