import React from "react"
import PropTypes from "prop-types"

const Message = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
)

// show message with author(me currently), rendered from MessagesList component 

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message