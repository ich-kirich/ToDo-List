import { useState } from "react";
import AddNote from "./components/addNote/addNote";
import ListNotes from "./components/listNotes/listNotes";
import Header from "./UI/header/Header";
import "./styles/style.scss";
import { INote } from "./types/types";

function App() {
  let loadNotes: INote[] = [];
  if (localStorage.getItem("notes")) {
    loadNotes = JSON.parse(localStorage.getItem("notes") as string);
  } else {
    loadNotes = [];
  }
  const [listNotes, setListNotes] = useState(loadNotes);
  return (
    <div className="App">
      <Header />
      <AddNote listNotes={listNotes} setListNotes={setListNotes} />
      <ListNotes listNotes={listNotes} setListNotes={setListNotes} />
    </div>
  );
}

export default App;
