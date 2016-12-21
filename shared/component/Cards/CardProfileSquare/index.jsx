import React, { Component } from 'react'
import { Link } from 'react-router'

import {
  BtnPrimary,
  ImgProfileLg
} from '../../'

import {
  cardProfileSquare,
  card__inner,
  cardProfileSquare__img,
  cardProfileSquare__name,
  cardProfileSquare__city,
  cardProfileSquare__profile
} from './style.less'

class CardProfileSquare extends Component {

  static propstype = {
    user: React.PropTypes.objectOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      city: React.PropTypes.string.isRequired,
      img: React.PropTypes.string.isRequired
    })).isRequired
  }

  render() {
    const { profile, gender, location, id } = this.props.user
    const { firstName, lastName, languages } = profile
    const { city, province, country } = location
    return (
      <Link
        key={id}
        to={`/users/${id}`}
        className={cardProfileSquare}
      >
        <div className={card__inner}>
          <ImgProfileLg />
          <div className={cardProfileSquare__profile}>
            <h3 className={cardProfileSquare__name}>{firstName} {lastName}</h3>
            <h5 className={cardProfileSquare__city}>{city}, {province}, {country}</h5>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardProfileSquare
