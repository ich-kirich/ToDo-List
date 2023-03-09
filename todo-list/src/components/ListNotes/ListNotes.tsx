import { useContext } from "react";
import styles from "./ListNotes.module.scss";
import { useSortedNotes } from "../../hooks/useNotes";
import Notes from "../Notes/Notes";
import { IListNotes } from "../../types/types";
import { CONTEXT } from "../../libs/constants";

function ListNotes(props: IListNotes) {
  const { typeSort } = props;
  const { notes } = useContext(CONTEXT);
  const listNotes = useSortedNotes(notes, typeSort);

  return (
    <div className={styles.notes}>
      {listNotes.map((item) => (
        <Notes key={item.id} note={item} />
      ))}
    </div>
  );
}

export default ListNotes;
