import { useMemo, useState } from "react";
import AddNote from "./components/AddNote/AddNote";
import ListNotes from "./components/ListNotes/ListNotes";
import Header from "./components/Header/Header";
import "./styles/style.scss";
import { INote } from "./types/types";
import SortList from "./components/SortList/SortList";
import useSortedPosts from "./hooks/useNotes";
import { keyNotes, bodyProperty, Context } from "./utils/notes";

function App() {
  const loadNotesFromStorage = () => {
    let notes: INote[] = [];
    if (localStorage.getItem(keyNotes)) {
      notes = JSON.parse(localStorage.getItem(keyNotes) as string);
    }
    return notes;
  };

  const loadNotes: INote[] = loadNotesFromStorage();
  const [typeSort, setTypeSort] = useState(bodyProperty);
  const sortedNotes = useSortedPosts(loadNotes, typeSort);
  const [listNotes, setListNotes] = useState(sortedNotes);
  const contextValue = useMemo(
    () => ({ notes: listNotes, setNotes: setListNotes }),
    [listNotes, setListNotes],
  );

  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <Header />
        <AddNote />
        <SortList typeSort={typeSort} setTypeSort={setTypeSort} />
        <ListNotes typeSort={typeSort} />
      </div>
    </Context.Provider>
  );
}

export default App;
