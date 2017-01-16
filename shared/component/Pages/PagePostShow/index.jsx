/* Modules */

import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import moment from 'moment'

/* component */

import {
  BtnPrimary,
  ContainerCards,
  ImgProfileSm,
  Map,
  SectionLoading,
} from '../../'


/* Style */

import {
  container,
  container__post__header,
  container__post__body,
  post__header__map,
  post__header__content,
  post__header__content__wrapper,
  post__header__content__description,
  post__content,
  post__content__profile,
  post__request__form,
  profile__name,
  profile__location,
  fontTime,
  fontDate,
  fontCountry,
  fontLocation,
  label,
  form,
  section__request,
  section__request__form,
  section__request__sample,
} from './page-post-show.less'

import { postHelper } from '../../../utils'
const { generateClassFromStatus, findPost } = postHelper


class PagePostShow extends Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired,
    fetchPostRequest: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      toggleTextArea: false
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  componentWillMount() {
    const { postId } = this.props.params
    const { allPosts } = this.props
    const post: Object = findPost(allPosts, postId)

    if (typeof post === 'undefined') {
      this.props.fetchPostRequest(postId)
    }
  }

  onSubmitHandler(event) {
    event.preventDefault()
    const postId = this.props.params.postId
    const message = this.refs.message.value
    this.props.requestHangoutRequest({ postId, message })
  }

  render() {
    const { postId } = this.props.params
    const { allPosts, isLogined, currentUser } = this.props
    const post: Object = findPost(allPosts, postId)

    const {
      datetime,
      description,
      isEnd,
      isMatched,
      byUser,
      location
    } = post

    const { city, province, country, latitude, longitude } = location
    const address = `${city}, ${province}, ${country}`
    const { uid } = byUser
    const { firstName, lastName } = byUser.profile
    const { city: cityUser, province: provinceUser, country: countryUser } = byUser.location

    let formatDate = ""
    let time = ""

    if (datetime) {
      const date = new Date(datetime)
      formatDate = moment.unix(Date.parse(date) / 1000).format("MMM Do YYYY")
      time = moment.unix(Date.parse(date) / 1000).format("HH:mm a")
    }

    const geolocation = { lat: parseFloat(latitude), lng: parseFloat(longitude) }

    let byUserSelf = false
    if (isLogined) {
      byUserSelf = byUser.uid == currentUser.uid
    }

    return (
      <div>
        { !post ? <SectionLoading /> :
        <div className={container}>
          <header className={container__post__header}>
            <div className={post__header__content}>
              <div className={post__header__content__wrapper}>
                <h2 className={fontDate}>{formatDate}</h2>
                <h4 className={fontTime}>{time}</h4>
                <p className={fontLocation}>{address}</p>
              </div>
              <div className={post__content}>
                <ImgProfileSm />
                <div className={post__content__profile}>
                  <p className={profile__name}><Link to={`/users/${uid}`}>{firstName} {lastName}</Link></p>
                  <p className={profile__location}>{cityUser}, {provinceUser}, {countryUser}</p>
                </div>
              </div>
            </div>
            <div className={post__header__map}>
              <Map center={geolocation} />
            </div>
          </header>
          <div className={post__header__content__description}>
            <label className={label}>description</label>
            {description}
          </div>

        { isLogined && !byUserSelf &&
          <div className={section__request}>
            <div className={section__request__form}>
              <form className={form}>
                <textarea name="" id="" cols="30" rows="10" ref="message" />
                <p><BtnPrimary btnText="Send Request" onClick={this.onSubmitHandler}/></p>
              </form>
            </div>
            <div className={section__request__sample}>

            </div>
          </div>
        }
        </div>
      }
      </div>

    )
  }
}

export default PagePostShow
