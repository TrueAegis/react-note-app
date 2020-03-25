/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { IonItem, IonLabel } from "@ionic/react";
import formatDate from "../util/formateDate";
import formatNoteItemText from "../util/formatNoteItemText";

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick,
        text
    } = props;

    const handleItemClick = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick(id);
        }
    }

    return (
        <IonItem onClick={handleItemClick}>
            <IonLabel>
                <ReactMarkdown source={formatNoteItemText(text)} />
                <p>{formatDate(createdAt)}</p>
            </IonLabel>
        </IonItem>
    );
}

NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}