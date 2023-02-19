import { useState } from "react";
import { INote } from "../types/types";

function ListNotes(props: { listNotes: INote[]; setListNotes: Function }) {
  const { listNotes } = props;
  const { setListNotes } = props;
  const [edit, setEdit] = useState(0);
  const [value, setValue] = useState("");

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

  function editNote(id: number, body: string) {
    setEdit(id);
    setValue(body);
  }

  function updateNote(id: number) {
    const updateListNotes = [...listNotes].map((note) => {
      if (note.id === id) {
        note.body = value;
      }
      return note;
    });
    setListNotes(updateListNotes);
    setEdit(0);
  }

  return (
    <div>
      {listNotes.map((note) => (
        <div key={note.id}>
          {edit === note.id ? (
            <div>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="button" onClick={() => updateNote(note.id)}>
                Сохранить
              </button>
            </div>
          ) : (
            <div>{note.body}</div>
          )}
          <button type="button" onClick={() => deleteNote(note.id)}>
            Удалить
          </button>
          <button type="button" onClick={() => changeStatus(note.id)}>
            Закрыть задачу / Открыть задачу
          </button>
          <button type="button" onClick={() => editNote(note.id, note.body)}>
            Редактировать
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListNotes;
