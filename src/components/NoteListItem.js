/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

export default function NoteListPage(props) {
    const { id, text, createdAt, onClick } = props;
    const truncate = (text) => text.length > 200 ? `${text.substring(0, 200)}...` : text;
    
    return (
        //jsx
        <div className="listItem" onClick = {() => onClick(id)}>
                <p>{truncate(text)}</p>
                <p>{dayjs(createdAt).format("h:m a on M/D/YYYY")}</p>
            
        </div>
    );
}

NoteListPage.PropTypes={
    id : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    createdAt : PropTypes.string.isRequired,
    onClick : PropTypes.func
}