/* eslint-disable react/no-typos */
import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
            <p>{truncate(text)}</p>
            <p>{dayjs(createdAt).fromNow()}</p>
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