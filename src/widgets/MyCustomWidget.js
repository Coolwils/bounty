import React, { useState } from "react";

export default function MyCustomWidget() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index, editedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-widget">
      <h3>Notes</h3>
      <div className="notes-widget-content">
        <input
          className="note-input"
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a new note..."
        />
        <button onClick={addNote}>Add Note</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <input
                type="text"
                value={note}
                onChange={(e) => editNote(index, e.target.value)}
              />
              <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
