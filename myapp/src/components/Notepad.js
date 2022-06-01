import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Octokit } from '@octokit/core'
// import { githubGist, token } from "../GistAPI";
import NewNote from './NewNote'
import "./Notepad.css";

const token = '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'

const octokit = new Octokit({
  auth: token
})

const Notepad = () => {
  const [mainTitle, setMainTitle] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('')
  const [deleteFn, setDeleteFn] = useState('')
  const [list, setList] = useState([]);
  const [locStor, setLocStor] = useState(localStorage);

  const createNotepad = () => {
    octokit.request('POST /gists', {mainTitle})
    console.log('create notepad!', mainTitle)
  }

  const createNote = () => {
    octokit.request('PATCH /gists/{gist_id}', {
      gist_id: NewNote
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
  
    setMainTitle('');
    setNoteTitle('');
    setNoteText('');
    setDeleteFn('');
    setList((e) => {
      return [...e, NewNote];
    
    });
    setLocStor({title: mainTitle, list: list});
    // locStor = localStorage
    locStor.setItem(
      token,
      JSON.stringify({list})
    );
    locStor.getItem(token);
    
  }

    return (
      <>
      <form className="add-form" onSubmit={onSubmit}>
        <p className="padTitle">{mainTitle}</p>
        
        <div className="form-control">
          <input
            className="mainTitle"
            type="text"
            placeholder="My notepad title..."
            value={mainTitle}
            onChange={(e) => setMainTitle(e.target.value)}
            maxLength="255"

          />
        <div className="buttons">
          <Link to="/stats">
            <button className="statsBtn">
              View Stats
              </button>
          </Link>
          <button className="saveBtn" onClick={createNotepad}>
            Save
            </button>
            
          <button className="deleteBtn" value={deleteFn} onClick={() => setDeleteFn}>
            Delete
          </button> 
        
        <p className="myNotesHeading">My Notes</p>
        <div className="noteTitleField">
          <input
            type="text"
            placeholder="Enter note title..."
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            maxLength="255"
          />
        <div className="noteField">
          <textarea
            type="text"
            id="note"
            placeholder="Enter note..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            rows="10"
            cols="50"
            maxLength="1000"
          ></textarea>
      </div>
      </div>
      </div>
      </div>
      <button type="submit" className="btn btn-block" value="Save Task" onClick={createNote}>
      Add
      </button>
    </form>
      <div className="notesList">
        list
      </div>
    
    </>
  );
        }
  


export default Notepad