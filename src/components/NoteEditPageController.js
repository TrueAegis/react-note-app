import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import NoteEditPage from "./NoteEditPage";
import { GET_NOTES } from "./NoteListPage";

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
mutation updateNote($id: ID!, $note: UpdateNoteInput!) {
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
    const [updateNote] = useMutation(UPDATE_NOTE, {
        onCompleted(data){
            if(data){
             history.goBack();   
            } 
        }
    });
    const [deleteNote] = useMutation(DELETE_NOTE, {
        onCompleted(data){
            if(data){
             history.goBack();   
            }
        },
        refetchQueries: [
            {
                query: GET_NOTES
            }
        ]
    });

    if (loading) {
        return "Loading...";
    }

    if (error) {
        return `${error}`;
    }

    const selectedNote = data && data.note;
    if (!selectedNote) return null;

    function handleOnArchive() {
        updateNote({
            variables: {
                id: id,
                note: {
                    isArchived: true
                }
            }
        });
    }

    function handleOnSave(updatedNoteText) {
        updateNote({
            variables: {
                id: id,
                note: {
                    text: updatedNoteText
                }
            }
        });
    }

    function handleDelete() {
        deleteNote({
            variables: {
                id
            }
        });
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