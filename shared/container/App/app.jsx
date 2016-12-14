import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
  Header,
  Footer,
  Hero
} from '../../component' 

//**********
// Style
//**********
import {
  app
} from './app.less'

//**********
// Style
//**********


import * as AuthActions from '../../actions/auth'

const mapStateToProps = state => {
  const { currentUser, isLogined } = state.auth
  
  return {
    currentUser, 
    isLogined
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(AuthActions, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  
  constructor(){
    super()
  }
  
  render(){
    return (
      <div>
        <Header {...this.props} />
        { this.props.location.pathname === "/" ? <Hero /> : null }
        <main className={app}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
