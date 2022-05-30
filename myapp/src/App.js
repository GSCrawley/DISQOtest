import "./App.css";
import { React } from 'react'
import Notepad from "./components/Notepad";
// import NotesList from "./components/NotesList";
import {loadState, saveState } from './local_storage';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'


// import { BrowserRouter, Routes, Route } from "react-router-dom";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

const App = () => {
    return (
        <div className = "container">
            <p className = "main-title">Notepad application</p>
            <Provider store={store}>
                <div className="App">
                    <Notepad />
                    {/* <NotesList />   */}
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            </Provider>
        </div>
    );
};

export default App;