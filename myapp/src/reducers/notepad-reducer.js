import { ADD_NOTEPAD, EDIT_NOTEPAD, DELETE_NOTEPAD } from "../actions";

const notepadReducer = (state = [], action) => {

    switch(action.type) {
        case ADD_NOTEPAD:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false

                }
            ]
        case EDIT_NOTEPAD:
            return state.map(( item, index) => {
                if (index !== action.payload.index) {
                    return item
                }
                return { ...item, ...action.payload}
            })

        case DELETE_NOTEPAD:
            const { index } = action.payload
            return [...state.slice(0, index), ...state.slice(index + 1)]   

        default:
            return state

    }         
}
export default notepadReducer