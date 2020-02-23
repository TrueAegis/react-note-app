import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import NoteEditPage from "./NoteEditPage";
import useNotes from "../hooks/useNotes";

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const [notes, setNotes] = useNotes();

    const selectedNote = notes.find((note) => note.id === id);
    if (!selectedNote) return null;

    function handleOnSave(updatedNoteText) {
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
        setNotes(updatedNotes);

        history.goBack();
    }

    function handleDelete() {
        const deleteNote = notes.filter((note) => note.id !== id);
        history.goBack();
        setNotes(deleteNote);
    }

    return (
        <NoteEditPage
            onSave={handleOnSave}
            onDelete={handleDelete}
            text={selectedNote.text}
        />
    );

}