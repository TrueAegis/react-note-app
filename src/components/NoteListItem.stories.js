import React from "react";
import { action } from "@storybook/addon-actions";
import NoteListItem from "./NoteListItem";

export default {
    title: "NoteListItem",
    component: NoteListItem
};

// Short text test
export const ShortText = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="This is a note to test short" />
    );
};

// Long Text test (Overflow test)
export const LongTest = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ex dictum, dignissim justo fringilla, dignissim leo. Nam in vestibulum orci, non egestas lectus. Aenean fringilla leo id lorem egestas cras amet." />
    );
};

// Markdown text
export const MarkdownTest = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="This is a **test** of the international _Markdown_ system!" />
    );
};

// Created less than 1 week ago
export const LessWeekTest = () => {
    const oneWeekAgo = Date.now() - (60 * 60 * 24 * 6 * 1000);
    return (
        <NoteListItem id="1" createdAt={new Date(oneWeekAgo)} text="Note made less than a week ago." />
    );
};
// Created more than 1 week ago
export const MoreWeekTest = () => {
    const oneMonthAgo = Date.now() - (60 * 60 * 24 * 30.5 * 1000);
    return (
        <NoteListItem id="1" createdAt={new Date(oneMonthAgo)} text="Note made a month ago." />
    );
};
// click action
export const ClickActionTest = () => {

    return (
        <NoteListItem
         id="1" 
         createdAt={new Date()}
         onClick={action("onClick")}
         text="This can be clicked" />
    );
};
// Empty state
export const EmptyTextTest = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="" />
    );
};
// Error
export const ErrorTest = () => {
    const onClick = () =>{
        throw new Error("You've created an error for fun.");
    };
    return (
        <NoteListItem
         id="1" 
         createdAt={new Date()}
         onClick={onClick}
         text="This can be clicked" />
    );
};