import { useMemo } from "react";
import { BODY_PROPERTY, STATUS_PROPERTY } from "../libs/constants";
import { INote } from "../types/types";

export const useSortedNotes = (notes: INote[], type: string) => {
  const sortedNotes = useMemo(() => {
    if (type === BODY_PROPERTY) {
      return [...notes].sort((a, b) => a.body.localeCompare(b.body));
    }
    if (type === STATUS_PROPERTY) {
      return [...notes].sort((x, y) => {
        return Number(x.status) - Number(y.status);
      });
    }
    return notes;
  }, [notes, type]);
  return sortedNotes;
};

export default useSortedNotes;
