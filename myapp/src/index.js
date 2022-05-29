import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {loadState, saveState } from './local_storage';
import { createStore } from 'redux'


const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
  
);