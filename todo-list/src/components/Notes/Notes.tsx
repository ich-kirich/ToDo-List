import { useContext, useState } from "react";
import { CONTEXT, BODY_PROPERTY, STATUS_PROPERTY } from "../../libs/constants";
import { changePropertyNote, saveNotes } from "../../libs/notes";
import { INotes } from "../../types/types";
import ControlPanel from "../ControlPanel/ControlPanel";
import EditFiled from "../EditFiled/EditField";
import styles from "./Notes.module.scss";

function Notes(props: INotes) {
  const { note } = props;
  const { notes, setNotes } = useContext(CONTEXT);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(0);

  const deleteNote = (id: number) => {
    const updateListNotes = [...notes].filter((item) => item.id !== id);
    saveNotes(setNotes, updateListNotes);
  };

  const updateNote = (id: number) => {
    if (value) {
      changePropertyNote(notes, BODY_PROPERTY, id, setNotes, value);
    } else {
      deleteNote(id);
    }
    setEdit(0);
  };

  const changeStatus = (id: number) => {
    changePropertyNote(notes, STATUS_PROPERTY, id, setNotes);
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
            note.status ? styles.note__completedText : styles.note__text
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
