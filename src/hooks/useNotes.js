import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext([]);

const reviver = (key, value) => {
    if (key === "createdAt") {
        return new Date(value);
    }
    return value;
};

const savedNotes = localStorage.getItem("notes");
const initialNotes = savedNotes ? JSON.parse(savedNotes, reviver) : [];

export function NotesProvider(props) {
    const [notes, setNotes] = useState(initialNotes);
    return (
        <NotesContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesContext.Provider>
    );
}

export default function useNotes() {
    const [notes, setNotes] = useContext(NotesContext);

    function saveNotes(updatedNotes) {
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }

    return {
        notes,
        createNote() {
            const id = String(notes.length + 1);

            const newNote = {
                id,
                createdAt: new Date(),
                text: ""
            }

            const updatedNotes = [newNote, ...notes];
            saveNotes(updatedNotes);

            return newNote;
        },
        deleteNote(id) {
            const deleteNote = notes.filter((note) => note.id !== id);
            saveNotes(deleteNote);
        },
        updateNote(id, updatedNoteText) {
            const updatedNotes = notes.map((note) => {
                if (note.id === id) {
                    //make change
                    return {
                        ...note,
                        text: updatedNoteText
                    };
                }
                return note;
            });
            saveNotes(updatedNotes);
        },
        archiveNote(id) {
            const updatedNotes = notes.map((note) => {
                if (note.id === id) {
                    //make change
                    return {
                        ...note,
                        isArchived: true
                    };
                }
                return note;
            });
            saveNotes(updatedNotes);
        }
    };
} //Each component will use this to access global state