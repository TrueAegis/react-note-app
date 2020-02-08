import React, { useState } from "react";
import NoteListItem from "./NoteListItem";
import NoteEditPage from "./NoteEditPage";

const oneHourAgo = Date.now() - (1 * 60 * 60 * 1000);

const initialNotes = [
    {
        id: "1",
        createdAt: new Date(oneHourAgo),
        text: "This is a note 1"

    },
    {
        id: "2",
        createdAt: new Date(oneHourAgo),
        text: "This is a note 2"
    },
    {
        id: "3",
        createdAt: new Date(oneHourAgo),
        text: "This is a note 3"
    }
];

export default function NoteListPage() {
    const [selectedNoteID, setSelectedNoteID] = useState(null);
    const [notes, setNotes] = useState(initialNotes);

    function handleListItemClick(id) {
        setSelectedNoteID(id);
    }

    function handleOnSave(updatedNoteText) {
        const updatedNotes = notes.map((note) => {
            if (note.id === selectedNoteID) {
                //make change
                return {
                    ...note,
                    text: updatedNoteText
                };
            }
            return note;
        });
        setNotes(updatedNotes);

        setSelectedNoteID(null);
    }

    if (selectedNoteID) {
        const selectedNote = notes.find((note) => note.id === selectedNoteID);
        return (
            <NoteEditPage onSave={handleOnSave} text={selectedNote.text} />
        );
    }

    return (
        //JSX
        <div className="page">
            <h1>Note List</h1>
            <div className="list">
                {
                    notes.map((note) => {
                        return (
                            <NoteListItem
                                createdAt={note.createdAt}
                                id={note.id}
                                key={note.id}
                                onClick={handleListItemClick}
                                text={note.text}
                            />
                        );
                    })
                }
            </div>
        </div>
    );

}

