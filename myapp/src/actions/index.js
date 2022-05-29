export const ADD_NOTEPAD = "ADD_NOTEPAD"
export const EDIT_NOTEPAD = "EDIT_NOTEPAD"
export const DELETE_NOTEPAD = "DELETE_NOTEPAD"

export const ADD_NOTE = "ADD_NOTE"
export const EDIT_NOTE = "EDIT_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"

let nextNotepadId = 0
export const addNotepad = text => ({
    type: ADD_NOTEPAD,
    id: nextNotepadId++,
    text
})

export const editNotepad = (index, name) => {
    return {
        type: EDIT_NOTEPAD,
        payload: { index, name }
    }
}

export const deleteNotepad = ( index ) => {
    return {
        type: DELETE_NOTEPAD,
        payload: { index }
    }
}

let nextNoteId = 0
export const addNote = text => ({
    type: ADD_NOTE,
    id: nextNoteId++,
    text
})

export const editNote = (index, name) => {
    return {
        type: EDIT_NOTE,
        payload: { index, name }
    }
}

export const deleteNote = ( index ) => {
    return {
        type: DELETE_NOTE,
        payload: { index }
    }
}