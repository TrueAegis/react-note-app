import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import NoteEditPage from "./NoteEditPage";
import useNotes from "../hooks/useNotes";

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const {notes, deleteNote, updateNote } = useNotes();

    const selectedNote = notes.find((note) => note.id === id);
    if (!selectedNote) return null;

    function handleOnSave(updatedNoteText) {
        updateNote(id, updatedNoteText);
        history.goBack();
    }

    function handleDelete() {
        deleteNote(id);
        history.goBack();
    }

    return (
        <NoteEditPage
            onSave={handleOnSave}
            onDelete={handleDelete}
            text={selectedNote.text}
        />
    );

}