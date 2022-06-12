import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { nanoid } from 'nanoid' // this will generate id for each new note

import { createNotePad, updateNotePad, deleteNotePad, getNotePad,
  updateNote, deleteNote, getNote, octokit } from "../GistAPI";

import CreateNote from './CreateNote'
import NotePadTitle from './NotePadTitle'
import NotesList from './NotesList';

import {} from 'local-storage'
import { loadState, saveState } from '../local_storage'

import "./Notepad.css";
import timeStamp from 'console';

const locStor = require('local-storage')
const gist_id = octokit

function Notepad() {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const formNotes = (data) => JSON.parse((data.files.note.content)).notes
  const formTitle = (data) => JSON.parse((data.files.note.content)).title
  
  useEffect(() => {
    if (locStor(gist_id)) {
      let notes = [];
      (async function getNotes() {
        notes = await getNotePad(locStor.get(gist_id));
        console.log(notes)
        setNotes(formNotes(notes))
        setTitle(formTitle(notes))
      })();
    }
  },[])
  
// the following saves new notepad to local storage
const SaveNotepad = async(gist_id) => {
    console.log(gist_id)

    const savedState = loadState()
    if (savedState === undefined) {        
      const state = [{NotePadTitle}]
      saveState(state)
      
      console.log(state)
    } else {
      savedState.push({NotePadTitle})
      saveState(savedState)
      
      console.log(savedState)
    }
  }
    
const delNotePad = async() => {
    if (locStor(gist_id)) {
      const deletedNote = await deleteNotePad(locStor.get(gist_id));
      console.log(deletedNote);
    }
    locStor.remove(gist_id);
    setNotes([]);
    setTitle('');
  }

  // const deleteNote = id => setNotes(() => notes.filter((note) => note.id !== id))
  
  return (
      <div className="notePad">
        <NotePadTitle 
          onTitleChange={(title) => setTitle(title)} 
          onSave={SaveNotepad} 
          onDelete={delNotePad} 
          title={title} 
        />
        <CreateNote 
          onSave={() => 
            setNotes(() => 
            [...notes, {id: nanoid(), ...CreateNote}])}
        />
        <NotesList 
          notes={notes.id} 
          onDelete={deleteNote}
        />
        </div>
  );
        }

export default Notepad
