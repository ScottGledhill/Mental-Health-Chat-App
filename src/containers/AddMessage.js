import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => { 
    dispatch(addMessage(message, author)) 
  }
})
//dispatch to trigger state change 
//add message component for presentation

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)

