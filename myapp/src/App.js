import "./App.css";
import React from 'react'
import Notepad from "./components/Notepad";
// import Stats from './components/Stats'
// import NotesList from "./components/NotesList";
import { loadState, saveState } from './local_storage';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'


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
});

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <p className="main-title">Notepad application</p>
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

// research Octokit vs simple-github-gist-api

// GET https://api.github.com/rate_limit 401
// DISPLAY NOTES IN GIST
// CREATE CHARTS FROM GIST DATA - ONE FOR NOTEPAD DATA, ONE FOR NOTES IN NOTEPADS (notepad = gist, notes = files in gist)
// FIX STYLING