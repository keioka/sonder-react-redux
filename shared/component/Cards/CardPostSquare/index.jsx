import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

import {
  ImgProfileLg,
} from '../..'

import {
  cardPostSquare,
  card__inner,
  cardPostSquare__img,
  cardPostSquare__name,
  cardPostSquare__city,
  cardPostSquare__profile,
  cardPostSquare__time,
  cardPostSquare__dateInfo,
} from './style.less'

import Pin from './pin.svg'

class CardPostSquare extends Component {
  render() {
    const { uid, datetime, byUser, location } = this.props.post
    const { firstName, lastName } = byUser.profile
    const { city, province, country } = location

    let formatDate = ""
    let time = ""

    if (datetime) {
      const date = new Date(datetime)
      formatDate = moment.unix(Date.parse(date) / 1000).format("MMM Do YYYY")
      time = moment.unix(Date.parse(date) / 1000).format("HH:mm a")
    }

    return (
      <Link
        key={uid}
        to={`/posts/${uid}`}
        className={cardPostSquare}
      >
        <div className={card__inner}>
          <div className={cardPostSquare__dateInfo}>
            <span className={cardPostSquare__city}>{formatDate}</span>
            <h4 className={cardPostSquare__time}>{time}</h4>
            <h5 className={cardPostSquare__city}><Pin />{city} {province} {country}</h5>
          </div>
          <ImgProfileLg />
          <div className={cardPostSquare__profile}>
            <h3 className={cardPostSquare__name}>{firstName} {lastName}</h3>

          </div>
        </div>
      </Link>
    )
  }
}

export default CardPostSquare
