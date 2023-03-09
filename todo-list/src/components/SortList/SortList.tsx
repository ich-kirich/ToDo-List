import styles from "./SortList.module.scss";
import SortInput from "../SortInput/SortInput";
import { ISortListProps } from "../../types/types";
import { BODY_PROPERTY, STATUS_PROPERTY } from "../../libs/constants";

function SortList(props: ISortListProps) {
  const { typeSort } = props;
  const { setTypeSort } = props;
  const sortTypeBody = typeSort === BODY_PROPERTY;
  return (
    <div className={styles.choose__sort}>
      <SortInput
        id={BODY_PROPERTY}
        onChange={(e) => setTypeSort(e.currentTarget.id)}
        checked={sortTypeBody}
      />
      <SortInput
        id={STATUS_PROPERTY}
        onChange={(e) => setTypeSort(e.currentTarget.id)}
        checked={!sortTypeBody}
      />
    </div>
  );
}

export default SortList;
