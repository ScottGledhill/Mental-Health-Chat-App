import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)

//connect() to map the stores messages from the state
//export provides const MessagesList to messagesList component