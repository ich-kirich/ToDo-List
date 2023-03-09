export type ControlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface INote {
  id: number;
  body: string;
  status: boolean;
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

export interface IContextNote {
  notes: INote[];
  setNotes: Function;
}

export interface ISortListProps {
  typeSort: string;
  setTypeSort: Function;
}

export interface INotes {
  note: INote;
}

export interface IListNotes {
  typeSort: string;
}

export interface IEditField {
  value: string;
  setValue: Function;
  updateNote: Function;
  id: number;
}

export interface IControlPanel {
  note: INote;
  deleteNote: Function;
  changeStatus: Function;
  editNote: Function;
}
