import { useContext, useState } from "react";
import { CONTEXT } from "../../libs/constants";
import { saveNoteToList } from "../../libs/notes";
import styles from "./AddNote.module.scss";

function AddNote() {
  const [value, setValue] = useState("");
  const { notes, setNotes } = useContext(CONTEXT);

  function addToList() {
    saveNoteToList(notes, setNotes, value);
    setValue("");
  }

  return (
    <div className={styles.add}>
      <input
        type="text"
        placeholder="Write a note..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.add__inp}
      />
      <button type="button" onClick={addToList} className={styles.add__btn}>
        Add note
      </button>
    </div>
  );
}

export default AddNote;
