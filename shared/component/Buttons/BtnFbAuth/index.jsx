import React from 'react'

import {
  btnFbAuth
} from './btn-fb-auth.less'

import { apiKey } from '../../../config'

class BtnFbAuth extends React.Component {

  constructor(props) {
    super(props)
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook = (response) => {
    const { syncFbAuthDBRequest } = this.props
    syncFbAuthDBRequest(response)
  }

  render() {
    let FacebookLogin = () => (<span></span>)

    if (__BROWSER__) {
      FacebookLogin = require('react-facebook-login').default
    }

    return (
      <span>
      { __BROWSER__ === true ? <FacebookLogin
        appId={apiKey.facebook}
        textButton=""
        autoLoad={false}
        fields="first_name, last_name, birthday, email, gender, work, picture, languages, likes"
        scope="public_profile, user_friends, user_work_history, user_birthday, email, user_photos, user_likes"
        callback={this.responseFacebook}
        cssClass={btnFbAuth}
      /> : <span></span> }
      </span>
    )
  }
}

export default BtnFbAuth
