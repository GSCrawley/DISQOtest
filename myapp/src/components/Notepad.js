import { React, useState } from "react";
import { Link } from "react-router-dom";
// import gist from "simple-github-gist-api";
import { githubGist } from "../GistAPI";
// import { AddNote } from "../containers"
import "./Notepad.css";


const Notepad = ({onSave}) => {
  const [mainTitle, setMainTitle] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('')
  const onSubmit = (e) => {
   
    onSave({mainTitle, noteTitle, noteText});
  
    setMainTitle('');
    setNoteTitle('');
    setNoteText('');
  }
    return (
      <>
      <form className="add-form" onSubmit={onSubmit}>
        <p className="padTitle">Notepad Title</p>

        <div className="form-control">
          <input
            className="mainTitle"
            type="text"
            placeholder="My notepad title..."
            value={mainTitle}
            onChange={(e) => setMainTitle(e.target.value)}
            {...console.log(mainTitle)}

          />
        <div className="buttons">
          <Link to="/stats">
            <button className="statsBtn">
              View Stats
              </button>
          </Link>
          <button className="saveBtn" onClick={() => setMainTitle}>
            Save
            </button>
            
          {/* <button className="deleteBtn" value={deleteFn} onClick={() => setDeleteFn}>
            Delete
          </button>  */}
        
        <p className="myNotesHeading">My Notes</p>
        <div className="noteTitleField">
          <input
            type="text"
            placeholder="Enter note title..."
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            {...console.log(noteTitle)}
          />
        <div className="noteField">
          <input
            type="text"
            placeholder="Enter note..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            {...console.log(noteText)}
          />
      </div>
      </div>
      </div>
      </div>
      <button type="submit" className="btn btn-block" value="Save Task" onClick={() => githubGist.save()}>
      Add
      </button>
    </form>

    
    </>
  );
        }
  


export default Notepad