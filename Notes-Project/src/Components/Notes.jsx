import React, { useState, useRef } from 'react'

export const Notes = () => {

    const [notes, setNotes] = useState([]);
    const noteRefs = useRef([]);

    const createNote = () => {
        const newNote = { id: Date.now(), content: '' };
        setNotes([...notes, newNote]);
        noteRefs.current.push(React.createRef());
    };

    const updateNote = (index) => {
        const newNotes = [...notes];
        newNotes[index].content = noteRefs.current[index].current.textContent;
        setNotes(newNotes);
    };

    return (
        <div>
            <div>
                <h1>Notes App</h1>
                <button onClick={createNote}>Create Note</button>
            </div>
            
            <div>
                {notes.map((note, index) => (
                    <div key={note.id} className='note-box'>
                        <p 
                            contentEditable='true'
                            ref={noteRefs.current[index]}
                            onInput={() => updateNote(index)}
                        >
                        </p>
                    </div>
                ))}
            </div>
        </div>
  )
}
