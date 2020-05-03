import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
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

const DELETE_NOTE = gql`
mutation deleteNote($id: ID!){
    deleteNote(id: $id){
        id
        createdAt
        updatedAt
        isArchived
        text  
    } 
}
`
const UPDATE_NOTE = gql`
mutation updateNote($id: ID!, $note: NOTE!) {
    updateNote(id: $id, note: $note){
        id
        createdAt
        updatedAt
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
    const [updateNote] = useMutation(UPDATE_NOTE);
    const [deleteNote] = useMutation(DELETE_NOTE);
    const { archiveNote } = useNotes();

    if (loading) {
        return "Loading...";
    }

    if (error) {
        return `${error}`;
    }

    const selectedNote = data && data.note;
    if (!selectedNote) return null;

    function handleOnArchive() {
        archiveNote(id);
        history.goBack();
    }

    function handleOnSave(updatedNoteText) {
        updateNote({
            variables: {
                id: id,
                text: ""
            }
        });
        history.goBack();
    }

    function handleDelete() {
        deleteNote({
            variables: {
                id
            }
        });
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