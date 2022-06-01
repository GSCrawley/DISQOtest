// import React, { Component } from 'react'
// import {newNote} from './Notepad'


// const NotesList = ({ arr, deleteFn, editNote }) => {
//     return (
//       <>
//         {arr.map((note) => {
//           const index = arr.length - 1;
  
//           return (
//             <div className="each-note" key={newNote.id}>
//               <div className="each-title">
//                 <input
//                   className="noteTitle"
//                   type="text"
//                   value={newNote.title}
//                   onChange={(e) => editNote(index, e.target.value, "title")}
//                 />
//                 <button className="deleteBtn" onClick={() => deleteFn(newNote.id)}>
//                   Delete
//                 </button>
//               </div>
//               <br />
//               <textarea
//                 className="note"
//                 type="text"
//                 value={newNote.note}
//                 // onChange={(e) => editNote(index, e.target.value, "note")}
  
//                 onChange={(e) => console.log(e.target.value)}
//                 rows="10"
//                 cols="50"
//               ></textarea>
//               <br />
//               <br />
//             </div>
//           );
//         })}
//       </>
//     );
//   };
  
//   export default NotesList