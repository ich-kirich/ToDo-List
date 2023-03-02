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
