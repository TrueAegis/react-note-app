import React from "react";
import NoteEditPage from "./NoteEditPage";
import { action } from "@storybook/addon-actions";

export default {
    title: "NoteEditPage",
    component: NoteEditPage
};

export const OnSave = () => {
    const text = "Text for testing component";
    return (
        <NoteEditPage onSave={action()} onCancel={action("handleCancel")} onDelete={action("handleDelete")} text={text} />
    );
};