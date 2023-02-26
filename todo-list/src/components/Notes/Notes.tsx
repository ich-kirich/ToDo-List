import { useContext, useState } from "react";
import { INote } from "../../types/types";
import {
  changePropertyNote,
  bodyProperty,
  saveNotes,
  statusProperty,
  Context,
} from "../../utils/notes";
import ControlPanel from "../ControlPanel/ControlPanel";
import EditFiled from "../EditFiled/EditField";
import styles from "./Notes.module.scss";

function Notes(props: { note: INote }) {
  const { note } = props;
  const { notes, setNotes } = useContext(Context);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(0);

  const deleteNote = (id: number) => {
    const updateListNotes = [...notes].filter((elem) => elem.id !== id);
    saveNotes(setNotes, updateListNotes);
  };

  const updateNote = (id: number) => {
    if (value) {
      changePropertyNote(notes, bodyProperty, id, setNotes, value);
    } else {
      deleteNote(id);
    }
    setEdit(0);
  };

  const changeStatus = (id: number) => {
    changePropertyNote(notes, statusProperty, id, setNotes);
  };

  const editNote = (id: number, body: string) => {
    setEdit(id);
    setValue(body);
  };

  return (
    <div className={styles.notes__note}>
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
      <ControlPanel
        note={note}
        deleteNote={deleteNote}
        changeStatus={changeStatus}
        editNote={editNote}
      />
    </div>
  );
}

export default Notes;
