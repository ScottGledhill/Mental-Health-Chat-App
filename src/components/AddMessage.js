import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input
  console.log(props.dispatch)
  return (
    <section id="new-message">
      <input
        onKeyPress={(event) => {
        if (event.key === 'Enter') {
          props.dispatch(input.value, 'Me') //dispatch to trigger state change
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}
// create new message when enter hit 

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}


export default AddMessage