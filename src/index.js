import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import './server'
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'
import handleNewMessage from './sagas'
import setupSocket from './sockets'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware() // init saga

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)
const socket = setupSocket(store.dispatch, username)

//handle new message with saga
sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// Provider makes store accessable to its children(must wrap all)
serviceWorker.unregister();