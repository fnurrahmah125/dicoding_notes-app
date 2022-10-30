import { showFormattedDate } from "../utils";

function NoteItemContent({ title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
