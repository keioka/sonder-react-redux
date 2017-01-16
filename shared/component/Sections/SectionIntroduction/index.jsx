import React, { Component } from 'react'

import {
  Tag,
} from '../../'

import {
  sectionIntroduction,
  sectionIntroduction__box,
  sectionIntroduction__title,
  sectionIntroduction__empty,
  sectionArticle,
} from './section-introduction.less'

class SectionIntroduction extends Component {
  render() {
    const {
      languages,
      interests
    } = this.props.user.profile

    const languagesList = languages ? languages.map((lan) => {
      return (
        <li><Tag tagName={lan.name} /></li>
      )
    }) : undefined

    const interestsList = interests ? interests.map((lan) => {
      return (
        <li><Tag tagName={lan.name} /></li>
      )
    }) : undefined

    return (
      <div className={sectionIntroduction}>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Languages</h3>
          { languagesList ?
             <div className={sectionIntroduction__box}>{languagesList}</div> :
             <div className={sectionIntroduction__empty}>No information</div>
          }
        </article>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Travel Experience (tagged places) (from Facebook info)</h3>
          <div className={sectionIntroduction__empty}>No information</div>
        </article>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Interests (user likes)</h3>
          { interestsList ?
            <div className={sectionIntroduction__box}>{interestsList}</div> :
            <div className={sectionIntroduction__empty}>No information</div>
          }
        </article>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Education History (from Facebook info)</h3>
          <div className={sectionIntroduction__empty}>No information</div>
        </article>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Work History (from Facebook info)</h3>
          <div className={sectionIntroduction__empty}>No information</div>
        </article>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Photos (from Facebook info)</h3>
          <div className={sectionIntroduction__empty}>No information</div>
        </article>
      </div>
    )
  }
}

export default SectionIntroduction
