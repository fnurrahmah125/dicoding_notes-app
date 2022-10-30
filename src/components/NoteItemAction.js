function NoteItemAction({ id, archived, onDelete, onArchived }) {
  return (
    <div className="note-item__action">
      <div className="note-item__delete-button">
        <button onClick={() => onDelete(id)}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <span class="tooltiptext">Hapus</span>
      </div>

      <div className="note-item__archive-button">
        <button onClick={() => onArchived(id)}>{archived === false ? <i class="fa-solid fa-box-archive"></i> : <i class="fa-solid fa-folder"></i>}</button>
        {archived === false ? <span class="tooltiptext">Arsipkan</span> : <span class="tooltiptext">Pindahkan</span>}
      </div>
    </div>
  );
}

export default NoteItemAction;
