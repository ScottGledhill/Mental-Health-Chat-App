import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"

const chat = combineReducers({
  messages,
  users
});

// 'calls reducers' to gets messages and users
// use chat in src/index.js to createstore

export default chat