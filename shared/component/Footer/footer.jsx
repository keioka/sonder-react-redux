import React, { Component } from 'react'

import {
  footer
} from './footer.less'

class Footer extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <footer className={footer}>
        <p>sonder in San Francisco</p>
      </footer>
    )
  }
}

export default Footer
