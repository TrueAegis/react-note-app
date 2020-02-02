/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";

export default function NoteEditPage(props) {
    const { text } = props;

    return (
        //JSX
        <div className="page">
            <h1>Note Edit</h1>
            <textarea>
                {text}
            </textarea>
        </div>
    );
}

NoteEditPage.PropTypes = {
    text: PropTypes.string.isRequired
};