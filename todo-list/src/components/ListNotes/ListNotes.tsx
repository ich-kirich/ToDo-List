import { useContext } from "react";
import styles from "./ListNotes.module.scss";
import { useSortedNotes } from "../../hooks/useNotes";
import Notes from "../Notes/Notes";
import { Context } from "../../utils/notes";

function ListNotes(props: { typeSort: string }) {
  const { typeSort } = props;
  const { notes } = useContext(Context);
  const listNotes = useSortedNotes(notes, typeSort);

  return (
    <div className={styles.notes}>
      {listNotes.map((note) => (
        <Notes key={note.id} note={note} />
      ))}
    </div>
  );
}

export default ListNotes;
