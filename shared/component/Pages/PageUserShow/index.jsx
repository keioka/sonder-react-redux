//  ************************
//  Modules
//  ************************

import React, { Component } from 'react'

//  ************************
//  Component
//  ************************

import {
  ContainerProfile,
  ContainerProfileHeader,
} from '../../'

//  ************************
//  Style
//  ************************

//  *************************
//  Assets
//  *************************


class PageUserShow extends Component {

  static propTypes = {
    user: React.PropTypes.object,
  }

  render() {
    return (
      <div>
        { this.props.user &&
          <div>
            <ContainerProfileHeader
              {...this.props}
              isDashboard={false}
            />
            <ContainerProfile {...this.props} isByCurrentUser={false} />
          </div>
        }
      </div>
    )
  }
}

export default PageUserShow
