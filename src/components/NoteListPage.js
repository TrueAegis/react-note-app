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
import NoteListItem from "./NoteListItem";
import useNotes from "../hooks/useNotes";
import "./NoteEditPage.module.css";

export default function NoteListPage() {
    const { notes, createNote } = useNotes();
    const history = useHistory();
    const [isArchived, setIsArchived] = useState(true);

    const filteredNotes = notes.filter((note) => {
        return note.isArchived !== isArchived;
    })

    function handleListItemClick(id) {
        history.push(`/notes/edit/${id}`);
    }

    const handleNewNoteClick = () => {
        const { id } = createNote();
        history.push(`./notes/edit/${id}`)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Note List</IonTitle>
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
                                    createdAt={note.createdAt}
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

