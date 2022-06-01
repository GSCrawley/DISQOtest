import { combineReducers } from "redux";
import notepadReducer from "./notepad-reducer";
import notesReducer from "./notes-reducer"

export const rootReducer = () => combineReducers({
    notepadReducer,
    notesReducer
})

