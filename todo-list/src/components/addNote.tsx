import { useState } from "react";
import { INote } from "../types/types";

function AddNote(props: { listNotes: INote[]; setListNotes: Function }) {
  const [value, setValue] = useState("");
  const { listNotes } = props;
  const { setListNotes } = props;

  function saveNote() {
    setListNotes([
      ...listNotes,
      {
        id: listNotes.length + 1,
        body: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Напишите заметку..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={saveNote}>
        Сохранить
      </button>
    </div>
  );
}

export default AddNote;
