import { combineReducers } from "redux";
import notepadReducer from "./notepad-reducer";
import notesReducer from "./notes-reducer"

const rootReducer = () => combineReducers({
    notepadReducer,
    notesReducer
})

export default rootReducer