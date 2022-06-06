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

const locStor = require('local-storage')
const gist_id = octokit.id

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
        // setNotes(formNotes(notes))
        // setTitle(formTitle(notes))
      })();
    }
  },[])
  

  const saveNotepad = async() => {
    console.log(title, gist_id)
    console.log(octokit)
    const savedState = loadState()
    if (savedState === undefined) {
      const state = [{title, time:Date.now(), gist_id}]
      saveState(state)
    } else {
      savedState.push({title, time:Date.now(), gist_id})
      saveState(savedState)
    }


  //   if (locStor(gist_id)) {
  //     const savedNotePad = await updateNotePad(locStor.get(gist_id),{});
     
  //     locStor(gist_id, savedNotePad)
  //   } else {
  //     const savedNotePad = await createNotePad({});
     
  //     locStor(gist_id, savedNotePad);
  //   }
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
          onSave={saveNotepad} 
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