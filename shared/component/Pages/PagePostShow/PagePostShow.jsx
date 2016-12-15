//************************
// Modules
//************************

import React, { Component } from 'react'
import _ from 'lodash'

//************************
// Component
//************************
import {
  BtnPrimary,
  Map,
  ImgProfileSm
} from '../../'


//************************
// Style
//************************
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
  section__request__sample
} from './page-post-show.less'

//*************************
// Assets
//*************************

const findPost = (posts, postId) => {
  return _.find(posts, (post)=>{ return post.id == postId })
}

class PagePostShow extends Component {
  
  constructor(){
    super()
    this.state = {
      toggleTextArea: false
    }
    this.toggleTextArea = this.toggleTextArea.bind(this)
  }
  
  toggleTextArea(){
    this.setState({
      toggleTextArea: !this.state.toggleTextArea
    })
  }
  
  render(){
    
    const { postId } = this.props.params
    const { posts } = this.props
    const post = findPost(posts, postId)
    
    if (post === "undefined") {
      // action loadPost
    }
    
    return (
      <div>
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
                  <p className={profile__name}>Kei Oka</p>
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
                Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description DescriptionDescription Description Description Description Description Description Description Description Description Description Description Description Description Description
          </div>
          
        { this.props.isLogined &&
          <div className={section__request}>
            <div className={section__request__form}>
              <form className={form}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <p><BtnPrimary btnText="Send Request" /></p>
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
