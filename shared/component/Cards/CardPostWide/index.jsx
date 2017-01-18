import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

import {
  BtnPrimary,
  ImgProfileSm,
  ImgProfileLg,
} from '../../'

import {
  cardPostWide,
  cardPostWideActive,
  cardPostWideMatched,
  cardPostWideEnd,
  cardPostWide__content,
  cardPostWide__content__date,
  cardPostWide__content__time,
  cardPostWide__content__location,
  cardPostWide__description,
  cardPostWide__requests,
  cardPostWide__requests__list,
  cardPostWide__requests__menu,
  cardPostWide__requests__userName,
  cardPostWide__requests__message,
  cardPostWide__description__header,
  cardPostWide__description__header__profile,
  cardPostWide__description__body,
  cardPostWide__description__panel,
  profile__name,
  profile__location,
  btn__requests__message,
  btn__requests__accept,
  statusTag,
} from './style.less'


import { postHelper } from '../../../utils'

const { generateClassFromStatus } = postHelper


class CardPostWide extends Component {

  static propTypes = {
    post: React.PropTypes.objectOf(React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      date: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      user: React.PropTypes.objectOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
      })),
    })).isRequired,
  }

  constructor() {
    super()
    this.state = {
      openForm: false,
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      openForm: !this.state.openForm,
    })
  }

  render() {
    const { uid, datetime, description, byUser, location } = this.props.post

    const { firstName } = byUser.profile
    const { city, province, country } = location
    const profileLocation: string = `${city}, ${province}, ${country}`

    let formatDate
    let time

    if (datetime) {
      const date = new Date(datetime)
      formatDate = moment.unix(Date.parse(date) / 1000).format("MMM Do YYYY")
      time = moment.unix(Date.parse(date) / 1000).format("HH:mm a")
    }

    const isEnd = false
    const isMatched = false

    const cardClass: string = generateClassFromStatus({ isEnd, isMatched }, {
      isEnd: cardPostWideEnd,
      isMatched: cardPostWideMatched,
      isActive: cardPostWideActive,
    })

    const cardClassName: string = `${cardPostWide__content} ${cardClass}`

    return (
      <Link to={`/posts/${uid}`}>
        <div key={uid} className={cardPostWide}>
          <div className={cardClassName}>
            <span className={statusTag}>Active</span>
            <h4 className={cardPostWide__content__date}>{formatDate}</h4>
            <h2 className={cardPostWide__content__time}>{time}</h2>
            <p className={cardPostWide__content__location}>{city}</p>
            <p className={cardPostWide__content__location}>{province}</p>
            <p className={cardPostWide__content__location}>{country}</p>
          </div>
          <div className={cardPostWide__description}>
            <div className={cardPostWide__description__header}>
              <ImgProfileSm />
              <div className={cardPostWide__description__header__profile}>
                <p className={profile__name}>{firstName}</p>
                <p className={profile__location}>{profileLocation}</p>
              </div>
            </div>
            <div className={cardPostWide__description__body}>
              {description}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardPostWide
