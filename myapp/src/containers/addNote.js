import React from 'react'
import { connect } from 'react-redux'
import { addNotepad, addNote } from '../actions'

export const AddNote = ({ dispatch }) => {
    let input

    return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(addNote(input.value))
              input.value = ''
            }}
          >
            <input ref={node => (input = node)} />
            <button type="submit">Add Note</button>
          </form>
        </div>
      )
    }
    
    export default connect()(AddNote)