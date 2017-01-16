import React, { Component }from 'react'
import ReactDOM from 'react-dom/server'
import serialize from 'serialize-javascript'

import {
  body
} from './style.less'

class HTML extends Component {

  render() {
    const { components, store } = this.props
    const content = components ? ReactDOM.renderToStaticMarkup(components): ''
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="build/style.css" />
        </head>
        <body className={body}>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnd7VpVekR7d09azP_RQ5Bb_bQHKMkSVo&libraries=places&language=en"></script>
          <script dangerouslySetInnerHTML={{__html: `window.__REDUX_STORE__=${serialize(store.getState())};`}} charSet="UTF-8"/>
          {__PROD__ && <script src="build/bundle.js"></script> }
          {__STG__ && <script src="build/stg.bundle.js"></script> }
        </body>
      </html>
    )
  }
}

export default HTML
