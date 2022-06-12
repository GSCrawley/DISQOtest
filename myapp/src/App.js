import "./App.css";
import React from 'react'
import Notepad from "./components/Notepad";
// import Stats from './components/Stats'
// import NotesList from "./components/NotesList";
import { loadState, saveState } from './local_storage';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
// import { listAll } from './GistAPI'


import { BrowserRouter, Routes, Route } from "react-router-dom";

const persistedState = loadState();
const store = configureStore({
    persistedState,
    reducer: {
        rootReducer
    }
});

store.subscribe(() => {
  saveState({
      Notepad: store.getState().Notepad
    });
})

function App() {
  // const [data, setData] = useState([])
    return (
        <Provider store={store}>
            <div className="container">
                
                <BrowserRouter>
                <Routes>
                   
                    <Route path="/" element = {<Notepad/>}/>

                </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;

// TO FIX: 
// MAKE LIST #1
// Test app
// fix onSave( it's not a function )
// CREATE A NOTEPAD THAT CONTAINS THE NOTES
// ADD DELETE BUTTON, 
// MAKE SAVE AND DELETE BUTTONS FUNCTIONAL


// GET https://api.github.com/rate_limit 401
// DISPLAY NOTES IN GIST
// CREATE CHARTS FROM GIST DATA - ONE FOR NOTEPAD DATA, ONE FOR NOTES IN NOTEPADS (notepad = gist, notes = files in gist)
// FIX STYLING 

// make a component that lists all the gists
// write the function, 
//export the function, 
// set up tester button, 
// call function and console log the results. 
// set up 'try/catch block
// gistAPI functions need to be async / await 