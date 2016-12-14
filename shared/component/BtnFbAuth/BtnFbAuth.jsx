import React from 'react';
import FacebookLogin from 'react-facebook-login';

import {
  btnFbAuth
} from './btn-fb-auth.less'

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
    return (
      <FacebookLogin
        appId="824890790986789"
        textButton=""
        autoLoad={false}
        fields="first_name, last_name, birthday, email, gender,  work, picture, languages, locale"
        scope="public_profile, user_friends, user_work_history, user_birthday, email, user_photos, user_likes"
        callback={this.responseFacebook}
        cssClass={btnFbAuth}
      />
    )
  }
}

export default BtnFbAuth