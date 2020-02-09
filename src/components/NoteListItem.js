/* eslint-disable react/no-typos */
import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactMarkdown from "react-markdown";

dayjs.extend(relativeTime);

export default function NoteListPage(props) {
    const {
        createdAt,
        id,
        onClick,
        text
    } = props;

    // const [stateVariable, setStateVariable] = useState(initialValue);
    const [timesClicked, setTimesClicked] = useState(0);

    const truncate = (text) => text.length > 200 ? `${text.substring(0, 200)}...` : text;

    const formatDate = (date) => {
        if (date >= (Date.now() - 60 * 60 * 24 * 7 * 1000)){
            return dayjs(date).fromNow();
        } else{
            return dayjs(date).format("h:m a on M/D/YYYY");
        }
    }

    const handleItemClick = (event) => {
        event.preventDefault();
        setTimesClicked(timesClicked + 1);
        if(onClick) {
            onClick(id);
        }
    }
    //dayjs(createdAt).format("h:m a on M/D/YYYY")
    return (
        //jsx
        <div className="listItem" onClick={handleItemClick}>
            <ReactMarkdown source = {truncate(text)} />
            <p>{formatDate(createdAt)}</p>
            <p>Number of clicks: {timesClicked} times</p>
        </div>
    );
}

NoteListPage.PropTypes = {
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}