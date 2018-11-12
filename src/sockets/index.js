import * as types from '../constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../actions'

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8989') //from server
  socket.onopen = () => {
    socket.send(JSON.stringify({ //send add user 
      type: types.ADD_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    console.log('inside socket', event)
    const data = JSON.parse(event.data) //check event for type of action
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }

  return socket
}

export default setupSocket