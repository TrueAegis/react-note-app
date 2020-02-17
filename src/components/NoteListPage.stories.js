import React from "react";
import NoteListPage from "./NoteListPage";

export default {
    title: "NoteListPage",
    component: NoteListPage
};

export const ClickToEdit = () => { 
    return (
        <NoteListPage />
    );
};

//Add notes to page