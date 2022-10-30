import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteBody({ notes, keyword, addNote, onDelete, onArchived }) {
  const newNotes = notes.filter((note) => {
    let newTitle = note.title.toLowerCase();
    let newKeyword = keyword.toLowerCase();

    if (keyword) {
      if (newTitle.includes(newKeyword)) {
        return note;
      }
      return null;
    }

    return notes;
  });

  const activeNotes = newNotes.filter((note) => {
    return note.archived === false;
  });

  const archiveNotes = newNotes.filter((note) => {
    return note.archived === true;
  });

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2 className="note-app__title">
        <span>{activeNotes.length}</span> Catatan Aktif
      </h2>
      {activeNotes.length > 0 ? <NotesList notes={activeNotes} onDelete={onDelete} onArchived={onArchived} /> : <p className="notes-list__empty-message">Tidak ada catatan</p>}
      <h2 className="note-app__title">
        <span>{archiveNotes.length}</span> Arsip
      </h2>
      {archiveNotes.length > 0 ? <NotesList notes={archiveNotes} onDelete={onDelete} onArchived={onArchived} /> : <p className="notes-list__empty-message">Tidak ada catatan</p>}
    </div>
  );
}

export default NoteBody;
