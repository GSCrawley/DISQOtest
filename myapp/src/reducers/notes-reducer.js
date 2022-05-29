import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from '../actions'

const notesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false

                }
            ]

        case EDIT_NOTE:
            return state.map((item, index) => {
                if (index !== action.payload.index) {
                    return item
                }
                return { ...item, ...action.payload}
            })
        
        case DELETE_NOTE:
            const { index } = action.payload
            return [...state.slice(0, index), ...state.slice(index + 1)]

        
        default:
            return state
    }
}

export default notesReducer