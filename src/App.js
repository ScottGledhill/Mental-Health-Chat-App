
import React from "react";
import "./App.css";
import { Sidebar } from './containers/Sidebar'
import { MessagesList } from './containers/MessagesList'
import { AddMessage } from './containers/AddMessage'


  const App = () => (
  <div id="container">
    <Sidebar />
    <section id="main">
      <MessagesList /> 
      <AddMessage />
    </section>
  </div>
  )

  // sidebar-show users, messageslist-show sent messages
  // addmessage-add new message from input

export default App;