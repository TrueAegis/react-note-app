/* eslint-disable react/no-typos */
import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactMarkdown from "react-markdown";

dayjs.extend(relativeTime);

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick,
        text //test if text prop is empty
    } = props;

    const truncate = (text) => text.length > 200 ? `${text.substring(0, 200)}...` : text; //Test short text or long text

    const handleItemClick = (event) => {
        event.preventDefault();
        
        if (onClick) {
            onClick(id); //Test click actions
        }
    }

    return (

        <div className="listItem" onClick={handleItemClick}>
            <ReactMarkdown source={truncate(text)} />
            <p>{formatDate(createdAt)}</p>
        </div>
    );
}

const formatDate = (date) => { // Test different date formats
    if (date >= (Date.now() - 60 * 60 * 24 * 7 * 1000)) {
        return dayjs(date).fromNow();
    } else {
        return dayjs(date).format("h:m a on M/D/YYYY");
    }
}

NoteListItem.PropTypes = {
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}