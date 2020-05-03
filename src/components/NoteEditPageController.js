import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import NoteEditPage from "./NoteEditPage";
import useNotes from "../hooks/useNotes";

const GET_ONE_NOTE = gql`
query note($id: ID!){
    note(id: $id) {
        id
        createdAt
        isArchived
        text
    }
}
`
export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const { data, error, loading } = useQuery(GET_ONE_NOTE, {
        variables: {
            id
        }
    });
    const { deleteNote, updateNote, archiveNote } = useNotes();

    if (loading){
        return "Loading...";
    }

    if (error){
        return `${error}`;
    }

    const selectedNote = data && data.note;
    if (!selectedNote) return null;

    function handleOnArchive() {
        archiveNote(id);
        history.goBack();
    }

    function handleOnSave(updatedNoteText) {
        updateNote(id, updatedNoteText);
        history.goBack();
        
        // if (updatedNoteText === "") {
        //     handleDelete();
        // } else {
        //     updateNote(id, updatedNoteText);
        //     history.goBack();
        // }
    }

    function handleDelete() {
        deleteNote(id);
        history.goBack();
    }

    return (
        <NoteEditPage
            onArchive={handleOnArchive}
            onSave={handleOnSave}
            onDelete={handleDelete}
            text={selectedNote.text}
        />
    );

}