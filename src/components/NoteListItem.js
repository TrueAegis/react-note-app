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

function truncate(text)
{
    if(text.length > 200 && text !== ""){
        return `${text.substring(0, 200)}...`;
    } else if(text.length < 200 && text !== ""){
        return text;
    } else {
        return "No note text";
    }
}
NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}