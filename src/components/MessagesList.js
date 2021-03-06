import React from "react"
import PropTypes from "prop-types"
import Message from "./Message"

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
    {messages.map(message => (
      <Message key={message.id}
      {...message}
      />
    ))}
    </ul>
  </section>
)
// map through to show messages

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
//check for author,id,message
export default MessagesList