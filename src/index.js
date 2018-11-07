import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import chat from './reducers'
import { addUser } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(chat, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

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