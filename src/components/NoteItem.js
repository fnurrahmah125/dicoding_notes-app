import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchived={onArchived} />
    </div>
  );
}

export default NoteItem;
