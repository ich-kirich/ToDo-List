import { useState } from "react";
import AddNote from "./components/AddNote/AddNote";
import ListNotes from "./components/ListNotes/ListNotes";
import Header from "./components/Header/Header";
import "./styles/style.scss";
import { INote } from "./types/types";
import SortList from "./components/SortList/SortList";
import useSortedPosts from "./hooks/useNotes";
import { keyNotes, defaultTypeSort } from "./utils/notes";

function App() {
  let loadNotes: INote[] = [];
  if (localStorage.getItem(keyNotes)) {
    loadNotes = JSON.parse(localStorage.getItem(keyNotes) as string);
  } else {
    loadNotes = [];
  }
  const [typeSort, setTypeSort] = useState(defaultTypeSort);
  loadNotes = useSortedPosts(loadNotes, typeSort);
  const [listNotes, setListNotes] = useState(loadNotes);
  return (
    <div className="App">
      <Header />
      <AddNote listNotes={listNotes} setListNotes={setListNotes} />
      <SortList typeSort={typeSort} setTypeSort={setTypeSort} />
      <ListNotes
        listNotes={listNotes}
        setListNotes={setListNotes}
        typeSort={typeSort}
      />
    </div>
  );
}

export default App;
