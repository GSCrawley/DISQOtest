import { combineReducers } from "redux";
import notepadReducer from "./notepad-reducer";
import notesReducer from "./notes-reducer"

export default combineReducers({
    notepadReducer,
    notesReducer
})