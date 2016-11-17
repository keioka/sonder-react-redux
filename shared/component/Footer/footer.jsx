import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './header.less'

class Footer extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <footer className={styles.header}>
        <div className={styles.header__logo}>
          <img src="" alt="logo" />
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__ul}>
            <li>Login</li>
            <li></li>
          </ul>
        </nav>
      </footer>
    )
  }
}

export default Footer
