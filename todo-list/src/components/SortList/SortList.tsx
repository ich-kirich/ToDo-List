import styles from "./SortList.module.scss";
import { bodyProperty, statusProperty } from "../../utils/notes";
import SortInput from "../SortInput/SortInput";

function SortList(props: { typeSort: string; setTypeSort: Function }) {
  const { typeSort } = props;
  const { setTypeSort } = props;
  const sortTypeBody = typeSort === bodyProperty;
  const sortTypeStatus = !sortTypeBody;
  return (
    <div className={styles.chooseSort}>
      <SortInput
        id={bodyProperty}
        onChange={(e) => setTypeSort(e.currentTarget.id)}
        checked={sortTypeBody}
      />
      <SortInput
        id={statusProperty}
        onChange={(e) => setTypeSort(e.currentTarget.id)}
        checked={sortTypeStatus}
      />
    </div>
  );
}

export default SortList;
