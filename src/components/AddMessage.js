import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input
  console.log(props)
  return (
    <section id="new-message">
      <input
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            props.dispatch(input.value, 'Me') 
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