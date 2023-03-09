import { IEditField } from "../../types/types";
import ControlButton from "../ControlButton/ControlButton";
import styles from "./EditField.module.scss";

function EditFiled(props: IEditField) {
  const { value } = props;
  const { setValue } = props;
  const { updateNote } = props;
  const { id } = props;
  return (
    <div className={styles.edit__note}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.note__inp}
      />
      <ControlButton
        type="button"
        onClick={() => updateNote(id)}
        className={styles.note__save}
      >
        &nbsp;
      </ControlButton>
    </div>
  );
}

export default EditFiled;
