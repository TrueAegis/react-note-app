import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButtons,
    IonButton
} from "@ionic/react";
import { add, funnel } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gql, useMutation, useQuery } from "@apollo/client";
import NoteListItem from "./NoteListItem";
import "./NoteEditPage.module.css";

const GET_NOTES = gql`
    {
        notes {
            id
            createdAt
            updatedAt
            isArchived
            text
  }
}
`;

const CREATE_NOTE = gql`
    mutation createNote($note: CreateNoteInput!){
        createNote(note: $note) {
                id
                createdAt
                updatedAt
                isArchived
                text
            }
        }
`;

export default function NoteListPage() {
    const [createNote] = useMutation(CREATE_NOTE, {
        onCompleted(data) {
            if(data && data.createNote) {
                const id = data.createNote.id;
                history.push(`./notes/edit/${id}`)
            }
        },
        refetchQueries: [
            {
                query: GET_NOTES
            }
        ]
    });
    const { data, error, loading } = useQuery(GET_NOTES, {
        pollInterval: 5000
    }); //First run { null, null, true }
    //const { createNote } = useNotes();
    const history = useHistory();
    const { t } = useTranslation();
    const [isArchived, setIsArchived] = useState(true);

    if (loading) {
        return "Loading..."; //TODO: loading spinner
    }

    if (error) {
        return `${error}`; //Displays on page for now
    }

    const notes = (data && data.notes) || [];

    const filteredNotes = notes.filter((note) => {
        return note.isArchived !== isArchived;
    })

    function handleListItemClick(id) {
        history.push(`/notes/edit/${id}`);
    }

    const handleNewNoteClick = () => {
        createNote({
            variables: {
                note: {
                    text: ""
                }
            }
        });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t("noteListPageTitle")}</IonTitle>
                    <IonButtons slot="secondary">
                        <IonButton color="secondary" onClick={() => setIsArchived(!isArchived)}>
                            <IonIcon slot="icon-only" icon={funnel} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonList lines="full">
                    {
                        filteredNotes.map((note) => {
                            return (
                                <NoteListItem
                                    createdAt={new Date(note.createdAt)}
                                    id={note.id}
                                    key={note.id}
                                    onClick={handleListItemClick}
                                    text={note.text}
                                />
                            );
                        })
                    }
                </IonList>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={handleNewNoteClick}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );

}

