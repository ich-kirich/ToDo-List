import styles from "./SortInput.module.scss";
import { InputProps } from "../../types/types";
import { BODY_PROPERTY } from "../../libs/constants";

function SortInput({ id, checked, ...props }: InputProps) {
  const alphabeticalSortText = "Alphabetical sorting";
  const statusSort = "Sorting by status";
  return (
    <div className={styles.choose__typeSort}>
      <input type="radio" name="sort" id={id} checked={checked} {...props} />
      <span className={styles.typeSort__text}>
        {id === BODY_PROPERTY ? alphabeticalSortText : statusSort}
      </span>
    </div>
  );
}

export default SortInput;
