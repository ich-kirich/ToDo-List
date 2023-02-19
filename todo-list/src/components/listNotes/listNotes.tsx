import { useState } from "react";
import { INote } from "../../types/types";
import styles from "./listNotes.module.scss";

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
    if (value) {
      const updateListNotes = [...listNotes].map((note) => {
        if (note.id === id) {
          note.body = value;
        }
        return note;
      });
      setListNotes(updateListNotes);
    } else {
      deleteNote(id);
    }
    setEdit(0);
  }

  return (
    <div className={styles.notes}>
      {listNotes.map((note) => (
        <div
          key={note.id}
          className={[styles.notes__note, styles.note].join(" ")}
        >
          {edit === note.id ? (
            <div className={[styles.note__editNote, styles.editNote].join(" ")}>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={styles.editNote__inp}
              />
              <button
                type="button"
                onClick={() => updateNote(note.id)}
                className={styles.editNote__save}
              >
                &nbsp;
              </button>
            </div>
          ) : (
            <div
              className={
                !note.status ? styles.note__text : styles.note__completedText
              }
            >
              {note.body}
            </div>
          )}
          <div
            className={[styles.management, styles.note__management].join(" ")}
          >
            <button
              type="button"
              onClick={() => deleteNote(note.id)}
              className={styles.management__delete}
            >
              &nbsp;
            </button>
            <button
              type="button"
              onClick={() => changeStatus(note.id)}
              className={
                !note.status
                  ? styles.management__statusOk
                  : styles.management__statusClose
              }
            >
              &nbsp;
            </button>
            <button
              type="button"
              onClick={() => editNote(note.id, note.body)}
              className={styles.management__edit}
            >
              &nbsp;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListNotes;
