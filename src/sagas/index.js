import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) { //take all types of add_message
  console.log("handleNewMessage", params)
  yield takeEvery(types.ADD_MESSAGE, (action) => { 
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}
// send message to websocket, passing action and author.username data
export default handleNewMessage