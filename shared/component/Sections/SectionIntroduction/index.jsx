import React, { Component } from 'react'

import {
  sectionIntroduction,
  sectionIntroduction__title,
  sectionArticle
} from './section-introduction.less'

class SectionIntroduction extends Component {

  static propstype = {}

  constructor() {
    super()
  }

  render() {

    return (
      <div className={sectionIntroduction}>
         <article className={sectionArticle}>
           <h3 className={sectionIntroduction__title}>What is your preference?</h3>
           <p>hihi</p>
         </article>
      </div>
    )
  }
}

export default SectionIntroduction
