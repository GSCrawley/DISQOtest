import { useState } from "react";
import { Link } from "react-router-dom";

import "./Notepad.css";


const Notepad = ({onSave}) => {
  const [text, setText] = useState('');
  const [deleteFn, setDeleteFn] = useState('');
  const onSubmit = (e) => {
    // e.preventDefault();
    // if (!text) {

    // } else {
    onSave({text});
  
    setText('');
  }
    return (
      <>
      <form className="add-form" onSubmit={onSubmit}>
        <p className="padTitle">Notepad title</p>

        <div className="form-control">
          <input
            type="text"
            placeholder="My notepad title..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        <div className="buttons">
          <Link to="/stats">
            <button className="statsBtn">
              View Stats
              </button>
          </Link>
          <button className="saveBtn" onClick={() => setText}>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        <div className="noteField">
          <input
            type="text"
            placeholder="Enter note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
      </div>
      </div>
      </div>
      </div>
      <input type="submit" className="btn btn-block" value="Save Task"/>
    </form>
    </>
  );
};

    
export default Notepad