import styles from "./SortInput.module.scss";
import { InputProps } from "../../types/types";
import { bodyProperty } from "../../utils/notes";

function SortInput({ id, checked, ...props }: InputProps) {
  const alphabeticalSortText = "Alphabetical sorting";
  const statusSort = "Sorting by status";
  return (
    <div className={styles.chooseSort__typeSort}>
      <input type="radio" name="sort" id={id} checked={checked} {...props} />
      <span className={styles.typeSort__text}>
        {id === bodyProperty ? alphabeticalSortText : statusSort}
      </span>
    </div>
  );
}

export default SortInput;
