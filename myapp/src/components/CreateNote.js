import React, {useState} from 'react'
import { createNote } from '../GistAPI'



const CreateNote = ({onSave}) => {
	
    const [title, setTitle] = useState('');
	const [note, setNote] = useState('');

	const clearFields = () => {
		setTitle('');
		setNote('');
	}

	return (
		<div className="createNoteForm">
			<h1 style={{fontSize: '18px'}}>
                My Notes
                </h1>
			<input maxLength="255" 
            id='title' 
            placeholder="Enter Note Title..." 
            type="text" 
            value={title} 
            onChange={(value) => setTitle(value.target.value)} 
            />
			<textarea placeholder="Enter Note..." 
            id='note' 
            value={note} 
            onChange={(value) => 
                setNote(value.target.value)} 
            />
			<button onClick={() => {
                onSave({title, note}); 
                createNote(CreateNote)
                clearFields(); 
                 }}>Add</button>
		</div>
	)
}

export default CreateNote;
