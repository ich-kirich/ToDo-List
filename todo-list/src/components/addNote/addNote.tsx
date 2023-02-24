import { useState } from "react";
import { INote } from "../../types/types";
import styles from "./AddNote.module.scss";

function AddNote(props: { listNotes: INote[]; setListNotes: Function }) {
  const [value, setValue] = useState("");
  const { listNotes } = props;
  const { setListNotes } = props;

  function saveNote() {
    if (value) {
      const updateListNotes = [
        ...listNotes,
        {
          id: Date.now(),
          body: value,
          status: false,
        },
      ];
      setListNotes(updateListNotes);
      localStorage.setItem("notes", JSON.stringify(updateListNotes));
    }
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
      <button type="button" onClick={saveNote} className={styles.add__btn}>
        Add note
      </button>
    </div>
  );
}

export default AddNote;
