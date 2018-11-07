import * as types from '../constants/ActionTypes'

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})
//add 1 to messageId

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

//give user unique id so react relax