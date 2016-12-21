/* Modules */

import React, { Component } from 'react'


/* component */

import {
  BtnPrimary,
  ContainerCards,
  ImgProfileSm,
  Map,
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
    const { posts } = this.props
    const post: Object = findPost(posts, Number.parseInt(postId))

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
    const { posts } = this.props
    const post: Object = findPost(posts, Number.parseInt(postId))
    const { date, description, isEnd, isMatched, user } = post

    const { firstName, lastName } = user

    return (
      <div>
        { !post && null }
        <div className={container}>
          <header className={container__post__header}>
            <div className={post__header__content}>
              <div className={post__header__content__wrapper}>
                <h2 className={fontDate}>27th Aug, 2016</h2>
                <h4 className={fontTime}>10:00 - 12:00</h4>
                <p className={fontLocation}>San Francisco, CA, United States</p>
              </div>
              <div className={post__content}>
                <ImgProfileSm />
                <div className={post__content__profile}>
                  <p className={profile__name}>{firstName} {lastName}</p>
                  <p className={profile__location}>San Francisco, CA, United States</p>
                </div>
              </div>
            </div>
            <div className={post__header__map}>
              <Map />
            </div>
          </header>
          <div className={post__header__content__description}>
            <label className={label}>description</label>
            {description} Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description DescriptionDescription Description Description Description Description Description Description Description Description Description Description Description Description Description
          </div>

        { this.props.isLogined &&
          <div className={section__request}>
            <div className={section__request__form}>
              <form className={form}>
                <textarea name="" id="" cols="30" rows="10" ref="message" />
                <p><BtnPrimary btnText="Send Request" onClick={this.onSubmitHandler}/></p>
              </form>
            </div>
            <div className={section__request__sample}>
              Sample
            </div>
          </div>
        }
        </div>
      </div>
    )
  }
}

export default PagePostShow
