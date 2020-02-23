import React from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList
} from "@ionic/react";
//import { add } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import NoteListItem from "./NoteListItem";
import useNotes from "../hooks/useNotes";

export default function NoteListPage() {
    const [notes] = useNotes();
    const history = useHistory();

    function handleListItemClick(id) {
        history.push(`/notes/edit/${id}`);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                  <IonTitle>Note List</IonTitle>  
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList lines ="full">
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
                </IonList>
            </IonContent>
        </IonPage>
    );

}

