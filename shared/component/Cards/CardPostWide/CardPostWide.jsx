import React, { Component } from 'react'
import { Link } from 'react-router'

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
  cardPostWide__description,
  cardPostWide__requests,
  cardPostWide__description__header,
  cardPostWide__description__header__profile,
  cardPostWide__description__body,
  profile__name,
  profile__location,
  statusTag,
} from './card-post-wide.less'

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
    const { id, date, description, user } = this.props.post
    const userId: string = user.id
    const cardClassName: string = `${cardPostWide__content} ${cardPostWideActive}`

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
            </ul>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardPostWide
