const messages = (state = [], action) => {
  console.log('reducer message:', action)
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'MESSAGE_RECEIVED':
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ])
    default:
      return state
  }
}

// when a message is added by us, we add it to the list of messages
// when we receive a message from the server, we add it to our list of messages

export default messages