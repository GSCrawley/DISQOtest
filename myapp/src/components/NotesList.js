import React from 'react'
import { listAll } from '../GistAPI'

export default function NotesList({notes, deleteNote}) {
	return (
		<div className="noteslist">
			{notes && notes.map(({title, note, id}) => (
				<div 
                key={id}>
					<div 
                    className="noteItem" 
                    key={note.id}>
						<input 
                        maxLength="255" 
                        id='title' 
                        placeholder="Enter Note Title..." 
                        type="text" 
                        value={title} />
						<textarea 
                        placeholder="Enter Note..." 
                        id='note' 
                        value={note} />
					</div>
					<div className = "allNotes">
						{listAll.id}
						</div>
					<div className="noteBtn">
						<button onClick={(id) => deleteNote()}>
                            Delete
                            </button>
					</div>
				</div>
				
			))}
		</div>
	)
}