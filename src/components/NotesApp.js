import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from "../utils/index";
import Swal from "sweetalert2";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: "Delete?",
      text: "Data yang sudah dihapus tidak bisa dikembalikan lagi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Data berhasil dihapus.", "success");

        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
      }
    });
  }

  onArchivedHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    this.setState({ notes });
  }

  onSearchHandler(title) {
    this.setState(() => {
      return {
        keyword: title,
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="notes-app">
        <NoteHeader onSearchHandler={this.onSearchHandler} />
        <NoteBody notes={this.state.notes} keyword={this.state.keyword} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
      </div>
    );
  }
}

export default NotesApp;
