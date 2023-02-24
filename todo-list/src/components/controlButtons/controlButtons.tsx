import { INote } from "../../types/types";
import styles from "./ControlButtons.module.scss";

function ControlButtons(props: {
  note: INote;
  deleteNote: Function;
  changeStatus: Function;
  editNote: Function;
}) {
  const { note } = props;
  const { deleteNote } = props;
  const { changeStatus } = props;
  const { editNote } = props;
  return (
    <div className={styles.management}>
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
  );
}

export default ControlButtons;
