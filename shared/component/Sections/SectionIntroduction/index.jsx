import React, { Component } from 'react'

import {
  sectionIntroduction,
  sectionIntroduction__title,
  sectionIntroduction__empty,
  sectionArticle,
} from './section-introduction.less'

class SectionIntroduction extends Component {
  render() {
    return (
      <div className={sectionIntroduction}>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Languages</h3>
          <div className={sectionIntroduction__empty}>No information</div>
        </article>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Travel Experience</h3>
          <div className={sectionIntroduction__empty}>No information</div>
        </article>
        <article className={sectionArticle}>
          <h3 className={sectionIntroduction__title}>Interests</h3>
          <div className={sectionIntroduction__empty}>No information</div>
        </article>
      </div>
    )
  }
}

export default SectionIntroduction
