import { INote } from "../types/types";

function ListNotes(props: { listNotes: INote[]; setListNotes: Function }) {
  const { listNotes } = props;
  const { setListNotes } = props;

  function deleteNote(id: number) {
    const updateListNotes = [...listNotes].filter((note) => note.id !== id);
    setListNotes(updateListNotes);
  }

  function changeStatus(id: number) {
    const updateListNotes = [...listNotes].map((note) => {
      if (note.id === id) {
        note.status = !note.status;
      }
      return note;
    });
    setListNotes(updateListNotes);
  }

  return (
    <div>
      {listNotes.map((note) => (
        <div key={note.id}>
          <div>{note.body}</div>
          <button type="button" onClick={() => deleteNote(note.id)}>
            Удалить
          </button>
          <button type="button" onClick={() => changeStatus(note.id)}>
            Закрыть задачу / Открыть задачу
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListNotes;
