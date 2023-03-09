import { IControlPanel } from "../../types/types";
import ControlButton from "../ControlButton/ControlButton";
import styles from "./ControlPanel.module.scss";

function ControlPanel(props: IControlPanel) {
  const { note } = props;
  const { deleteNote } = props;
  const { changeStatus } = props;
  const { editNote } = props;
  return (
    <div className={styles.management}>
      <ControlButton
        onClick={() => deleteNote(note.id)}
        className={styles.management__delete}
      >
        &nbsp;
      </ControlButton>
      <ControlButton
        onClick={() => changeStatus(note.id)}
        className={
          note.status
            ? styles.management__statusClose
            : styles.management__statusOk
        }
      >
        &nbsp;
      </ControlButton>
      <ControlButton
        onClick={() => editNote(note.id, note.body)}
        className={styles.management__edit}
      >
        &nbsp;
      </ControlButton>
    </div>
  );
}

export default ControlPanel;
