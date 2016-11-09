import React, { Component } from 'react'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {}
}

@connect(mapStateToProps)
class App extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App
