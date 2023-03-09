import { KEY_NOTES } from "./constants";
import { INote } from "../types/types";

export function saveNotes(setListNotes: Function, updateListNotes: INote[]) {
  setListNotes(updateListNotes);
  localStorage.setItem(KEY_NOTES, JSON.stringify(updateListNotes));
}

export function saveNoteToList(
  listNotes: INote[],
  setListNotes: Function,
  value: string,
) {
  if (value) {
    listNotes = [
      ...listNotes,
      {
        id: Date.now(),
        body: value,
        status: false,
      },
    ];
  }
  saveNotes(setListNotes, listNotes);
}

export function changePropertyNote(
  listNotes: INote[],
  propertyToChange: keyof INote,
  id: number,
  setListNotes: Function,
  value?: string,
) {
  const updateListNotes = [...listNotes].map((item: INote) => {
    if (item.id === id) {
      if (value) {
        (item[propertyToChange] as string) = value;
      } else {
        (item[propertyToChange] as boolean) = !item[propertyToChange];
      }
    }
    return item;
  });
  saveNotes(setListNotes, updateListNotes);
}
