import { useState } from "react";
import { INote } from "../../types/types";
import styles from "./listNotes.module.scss";
import EditFiled from "../editFiled/editField";
import ControlButtons from "../controlButtons/controlButtons";

function ListNotes(props: { listNotes: INote[]; setListNotes: Function }) {
  const { listNotes } = props;
  const { setListNotes } = props;
  const [edit, setEdit] = useState(0);
  const [value, setValue] = useState("");

  const deleteNote = (id: number) => {
    const updateListNotes = [...listNotes].filter((note) => note.id !== id);
    setListNotes(updateListNotes);
  };

  const changeStatus = (id: number) => {
    const updateListNotes = [...listNotes].map((note) => {
      if (note.id === id) {
        note.status = !note.status;
      }
      return note;
    });
    setListNotes(updateListNotes);
  };

  const editNote = (id: number, body: string) => {
    setEdit(id);
    setValue(body);
  };

  const updateNote = (id: number) => {
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
  };

  return (
    <div className={styles.notes}>
      {listNotes.map((note) => (
        <div
          key={note.id}
          className={[styles.notes__note, styles.note].join(" ")}
        >
          {edit === note.id ? (
            <EditFiled
              value={value}
              setValue={setValue}
              updateNote={updateNote}
              id={note.id}
            />
          ) : (
            <div
              className={
                !note.status ? styles.note__text : styles.note__completedText
              }
            >
              {note.body}
            </div>
          )}
          <ControlButtons
            note={note}
            deleteNote={deleteNote}
            changeStatus={changeStatus}
            editNote={editNote}
          />
        </div>
      ))}
    </div>
  );
}

export default ListNotes;
