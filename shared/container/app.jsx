import React, { Component } from 'react'

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