import { useMemo } from "react";
import { INote } from "../types/types";

export const useSortedPosts = (notes: INote[], type: string) => {
  const sortedPosts = useMemo(() => {
    if (type === "body") {
      return [...notes].sort((a, b) => a.body.localeCompare(b.body));
    }
    if (type === "status") {
      return [...notes].sort((x, y) => {
        return Number(x.status) - Number(y.status);
      });
    }
    return notes;
  }, [notes, type]);
  return sortedPosts;
};

export default useSortedPosts;
