import { useMemo } from "react";
import { INote } from "../types/types";
import { bodyProperty, statusProperty } from "../utils/notes";

export const useSortedNotes = (notes: INote[], type: string) => {
  const sortedNotes = useMemo(() => {
    if (type === bodyProperty) {
      return [...notes].sort((a, b) => a.body.localeCompare(b.body));
    }
    if (type === statusProperty) {
      return [...notes].sort((x, y) => {
        return Number(x.status) - Number(y.status);
      });
    }
    return notes;
  }, [notes, type]);
  return sortedNotes;
};

export default useSortedNotes;
