import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([{ name: action.name, id: action.id }])
    case types.USERS_LIST:
      return action.users
    default:
      return state
  }
}
// when we add a user, we put it in the users list
// when we get an updated users list from the server, we return new list 

export default users