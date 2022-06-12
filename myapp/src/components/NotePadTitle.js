
import React from 'react'
import {createNotePad, deleteNotePad} from '../GistAPI'

function NotePadTitle({title, onTitleChange}) {
    const onSave = createNotePad
    const onDelete = deleteNotePad
    return (
    <div className="notePadTitle">
		<div className="notePadTitleInput">
			<label>
			Notepad Title
			<input type="text" 
            placeholder="My notepad title..." 
            defaultValue={title} 
            onChange={(value) =>
            onTitleChange(value.target.value)}
            />
			</label>
		</div>
		<div className="notePadTitleBtnGroup">
            <button className="formSaveBtn"
                onClick={onSave}>
                Save
                </button> 
			<button className="formDeleteBtn" 
                onClick={onDelete}>
                Delete
                </button>
		</div>
	</div>
)}

export default NotePadTitle