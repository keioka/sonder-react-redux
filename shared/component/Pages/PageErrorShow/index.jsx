import React, { Component } from 'react'

import {
  pageErrorShow,
  titleError,
  titlePage
} from './style.less'

class PageErrorShow extends Component {

  render() {
    const { status } = this.props
    return (
      <div className={pageErrorShow}>
        <h2 className={titlePage}>Sorry</h2>
        <h4 className={titleError}>We could not find the user</h4>
      </div>
    )
  }
}

export default PageErrorShow
