/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import formatDate from "../util/formateDate";

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick,
        text 
    } = props;

    const truncate = (text) => text.length > 200 ? `${text.substring(0, 200)}...` : text; 

    const handleItemClick = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick(id); 
        }
    }

    return (
        <div className="listItem" onClick={handleItemClick}>
            <ReactMarkdown source={truncate(text)} />
            <p>{formatDate(createdAt)}</p>
        </div>
    );
}

NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}