import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import {
  TextClickable,
  ImgProfileXs,
  ImgProfileSm,
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

import IconEmail from './email.svg'

class CardMyPostWide extends Component {

  static propTypes = {
    post: PropTypes.objectOf(React.PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      user: PropTypes.objectOf(React.PropTypes.shape({
        id: PropTypes.string.isRequired,
      })),
    })).isRequired,
    acceptHangoutRequest: PropTypes.func.inRequired,
  }

  constructor() {
    super()
    this.state = {
      showRequestToggle: false,
    }
    this.onClickShowRequestsHandler = this.onClickShowRequestsHandler.bind(this)
    this.onAcceptHandler = this.onAcceptHandler.bind(this)
  }

  onClickShowRequestsHandler(event) {
    this.setState({
      showRequestToggle: !this.state.showRequestToggle,
    })
  }

  onAcceptHandler(event) {
    event.preventDefault()
    const { id, user } = this.props.post
    const userId = user.id
    this.props.acceptHangoutRequest(id, userId)
  }

  renderRequests() {
    return (
      <li className={cardPostWide__requests__list}>
        <ImgProfileXs />
        <span className={cardPostWide__requests__userName}>Kei</span>
        <span className={cardPostWide__requests__message}>Hiiiiiiiiiiiiiiiiiii Hiiiiiiiiiiiiiiiiiii Hiiiiiiiiiiiiiiiiiii Hiiiiiiiii iiiiiiiiii Hiiiiiiiiiii iiiiiiii Hiiiiii ii iiiiiiiiiii</span>
        <span className={cardPostWide__requests__menu}>
          <IconEmail />
          <button className={btn__requests__accept} onClick={this.onAcceptHandler} >Accept</button>
        </span>
      </li>
    )
  }

  render() {
    const { uid, date, description, user, location } = this.props.post
    const { city, province, country } = location
    const profileLocation: string = `${city}, ${province}, ${country}`

    const isEnd = false
    const isMatched = false

    const cardClass: string = generateClassFromStatus({ isEnd, isMatched }, {
      isEnd: cardPostWideEnd,
      isMatched: cardPostWideMatched,
      isActive: cardPostWideActive,
    })

    const cardClassName: string = `${cardPostWide__content} ${cardClass}`

    return (
      <div key={uid} className={cardPostWide}>
        <div className={cardClassName}>
          <span className={statusTag}>Active</span>
          <h4 className={cardPostWide__content__date}>{date}January 26th, 2016</h4>
          <h2 className={cardPostWide__content__time}>10:00 - 12:00</h2>
          <p className={cardPostWide__content__location}>San Francisco</p>
          <p className={cardPostWide__content__location}>CA</p>
          <p className={cardPostWide__content__location}>United States</p>
        </div>
        <div className={cardPostWide__description}>
          <div className={cardPostWide__description__header}>
            <ImgProfileSm />
            <div className={cardPostWide__description__header__profile}>
              <p className={profile__name}>Kei</p>
              <p className={profile__location}>{profileLocation}</p>
            </div>
          </div>
          <div className={cardPostWide__description__body}>
            {description} Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei  Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei Hi, I am Kei
          </div>
          <div className={cardPostWide__description__panel}>
            <TextClickable text="Show Requests" onClick={this.onClickShowRequestsHandler} />
            <Link to={`posts/${uid}`}>Detail</Link>
          </div>
        </div>
        { this.state.showRequestToggle &&
        <div className={cardPostWide__requests}>
          <ul>
            {this.renderRequests()}
          </ul>
        </div> }
      </div>
    )
  }
}

export default CardMyPostWide
