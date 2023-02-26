import ControlButton from "../ControlButton/ControlButton";
import styles from "./EditField.module.scss";

function EditFiled(props: {
  value: string;
  setValue: Function;
  updateNote: Function;
  id: number;
}) {
  const { value } = props;
  const { setValue } = props;
  const { updateNote } = props;
  const { id } = props;
  return (
    <div className={styles.editNote}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.editNote__inp}
      />
      <ControlButton
        type="button"
        onClick={() => updateNote(id)}
        className={styles.editNote__save}
      >
        &nbsp;
      </ControlButton>
    </div>
  );
}

export default EditFiled;
