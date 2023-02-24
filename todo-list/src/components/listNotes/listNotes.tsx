import { useState } from "react";
import { INote } from "../../types/types";
import styles from "./ListNotes.module.scss";
import EditFiled from "../EditFiled/EditField";
import ControlButtons from "../ControlButtons/ControlButtons";
import { useSortedPosts } from "../../hooks/useNotes";

function ListNotes(props: {
  listNotes: INote[];
  setListNotes: Function;
  typeSort: string;
}) {
  let { listNotes } = props;
  const { setListNotes } = props;
  const { typeSort } = props;
  const [edit, setEdit] = useState(0);
  const [value, setValue] = useState("");
  listNotes = useSortedPosts(listNotes, typeSort);

  const deleteNote = (id: number) => {
    const updateListNotes = [...listNotes].filter((note) => note.id !== id);
    setListNotes(updateListNotes);
    localStorage.setItem("notes", JSON.stringify(updateListNotes));
  };

  const changeStatus = (id: number) => {
    const updateListNotes = [...listNotes].map((note) => {
      if (note.id === id) {
        note.status = !note.status;
      }
      return note;
    });
    setListNotes(updateListNotes);
    localStorage.setItem("notes", JSON.stringify(updateListNotes));
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
      localStorage.setItem("notes", JSON.stringify(updateListNotes));
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
