import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext([]);

const oneHourAgo = Date.now() - (1 * 60 * 60 * 1000);
const oneWeekAgo = Date.now() - (60 * 60 * 24 * 6.999 * 1000);
const oneMonthAgo = Date.now() - (60 * 60 * 24 * 30.5 * 1000);

const initialNotes = [
    {
        id: "1",
        createdAt: new Date(oneHourAgo),
        text: "This is a note 1"

    },
    {
        id: "2",
        createdAt: new Date(oneWeekAgo),
        text: "This is a note 2"
    },
    {
        id: "3",
        createdAt: new Date(oneMonthAgo),
        text: "React _is_ **fun**!"
    }
];

export function NotesProvider(props){
    const [notes, setNotes] = useState(initialNotes);
    return(
        <NotesContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesContext.Provider>
    );
}

export default function useNotes() {
    const [notes, setNotes] = useContext(NotesContext);

    return [notes,setNotes];
} //Each component will use this to access global state