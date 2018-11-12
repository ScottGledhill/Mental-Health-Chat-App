import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import handleNewMessage from './sagas'
import setupSocket from './sockets'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

//add ourselves as present in chat
store.dispatch(addUser('Me'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// Provider makes store accessable to its children(must wrap all)
serviceWorker.unregister();