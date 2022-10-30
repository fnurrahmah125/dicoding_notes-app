import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ onSearchHandler }) {
  return (
    <div className="note-app__header ">
      <h1>Notes</h1>
      <NoteSearch onSearchHandler={onSearchHandler} />
    </div>
  );
}

export default NoteHeader;
