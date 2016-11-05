import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createMemoryHistory, useQueries } from 'history'


import Express from 'express';
import path from 'path';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

let app = new Express();

app.get('*', (req, res) => {
  let history = 
 
});

app.get('/', (req, res) => {
  
  
  
  
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.listen(3000, () => console.log('running on localhost'));
