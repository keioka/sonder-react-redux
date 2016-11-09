import React, { Component }from 'react'
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';


class HTML extends Component {
  
  constructor(){
    super()
  }

  render(){
    const {components, store} = this.props;
    const content = components ? ReactDOM.renderToString(components): '';
    return (
      <div>
        Hello World, from react server side
        <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
        <script dangerouslySetInnerHTML={{__html: `window.__REDUX_STORE__=${serialize(store.getState())};`}} charSet="UTF-8"/>
        <script src="http://localhost:5001/webpack-dev-server.js"></script>
        <script src="build/bundle.js"></script>
      </div>
    )
  }
}

export default HTML
