import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './header.less'

class App extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <header className={styles.header}>
        Hi
      </header>
    )
  }
}

export default App
