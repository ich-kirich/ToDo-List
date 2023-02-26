import React from "react";
import { IContextNote, INote } from "../types/types";

export const keyNotes = "notes";
export const bodyProperty = "body";
export const statusProperty = "status";

export function saveNotes(setListNotes: Function, updateListNotes: INote[]) {
  setListNotes(updateListNotes);
  localStorage.setItem(keyNotes, JSON.stringify(updateListNotes));
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
  const updateListNotes = [...listNotes].map((note: INote) => {
    if (note.id === id) {
      if (value) {
        (note[propertyToChange] as string) = value;
      } else {
        (note[propertyToChange] as boolean) = !note[propertyToChange];
      }
    }
    return note;
  });
  saveNotes(setListNotes, updateListNotes);
}

export const Context = React.createContext({} as IContextNote);
