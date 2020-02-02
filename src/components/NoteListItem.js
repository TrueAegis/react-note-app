/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";

export default function NoteListPage(props) {
    const { id, text, dateTimeText, onClick } = props;
    const truncate = (text) => text.length > 200 ? `${text.substring(0, 200)}...` : text;
    
    return (
        //jsx
        <div className="listItem">
            <h1>Note</h1>
            <div className="item">
                <p onClick = {onClick} id = {id}>{truncate(text)}</p>
                <p>{dateTimeText}</p>
            </div>
        </div>
    );
}

NoteListPage.PropTypes={
    id : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    dateTimeText : PropTypes.string.isRequired,
    onClick : PropTypes.func
}