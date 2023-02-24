import styles from "./SortList.module.scss";
import { defaultTypeSort } from "../../utils/notes";

function SortList(props: { typeSort: string; setTypeSort: Function }) {
  const { typeSort } = props;
  const { setTypeSort } = props;
  let sortBody;
  let sortStatus;
  if (typeSort === defaultTypeSort) {
    sortBody = true;
    sortStatus = false;
  } else {
    sortBody = false;
    sortStatus = true;
  }
  return (
    <div className={styles.chooseSort}>
      <div className={styles.chooseSort__typeSort}>
        <input
          type="radio"
          name="sort"
          id="body"
          onChange={(e) => setTypeSort(e.currentTarget.id)}
          checked={!!sortBody}
        />
        <span className={styles.typeSort__text}>Сортировка по алфавиту</span>
      </div>
      <div className={styles.chooseSort__typeSort}>
        <input
          type="radio"
          name="sort"
          id="status"
          onChange={(e) => setTypeSort(e.currentTarget.id)}
          checked={!!sortStatus}
        />
        <span className={styles.typeSort__text}>Сортировка по статусу</span>
      </div>
    </div>
  );
}

export default SortList;
