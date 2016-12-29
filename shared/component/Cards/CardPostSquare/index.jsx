import React, { Component } from 'react'
import { Link } from 'react-router'

import {
  ImgProfileLg,
} from '../..'

import {
  cardPostSquare,
  card__inner,
  cardPostSquare__img,
  cardPostSquare__name,
  cardPostSquare__city,
  cardPostSquare__profile
} from './style.less'

class CardPostSquare extends Component {
  render() {
    const id = 1
    return (
      <Link
        key={id}
        to={`/users/${id}`}
        className={cardPostSquare}
      >
        <div className={card__inner}>
          <ImgProfileLg />
          <div className={cardPostSquare__profile}>
            <h3 className={cardPostSquare__name}></h3>
            <h5 className={cardPostSquare__city}></h5>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardPostSquare
