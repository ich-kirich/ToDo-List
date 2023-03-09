import { useMemo, useState } from "react";
import AddNote from "./components/AddNote/AddNote";
import ListNotes from "./components/ListNotes/ListNotes";
import Header from "./components/Header/Header";
import "./styles/style.scss";
import { INote } from "./types/types";
import SortList from "./components/SortList/SortList";
import useSortedPosts from "./hooks/useNotes";
import { KEY_NOTES, BODY_PROPERTY, CONTEXT } from "./libs/constants";

function App() {
  const loadNotesFromStorage = () => {
    let notes: INote[] = [];
    if (localStorage.getItem(KEY_NOTES)) {
      notes = JSON.parse(localStorage.getItem(KEY_NOTES) as string);
    }
    return notes;
  };

  const loadNotes: INote[] = loadNotesFromStorage();
  const [typeSort, setTypeSort] = useState(BODY_PROPERTY);
  const sortedNotes = useSortedPosts(loadNotes, typeSort);
  const [listNotes, setListNotes] = useState(sortedNotes);
  const contextValue = useMemo(
    () => ({ notes: listNotes, setNotes: setListNotes }),
    [listNotes, setListNotes],
  );

  return (
    <CONTEXT.Provider value={contextValue}>
      <div className="App">
        <Header />
        <AddNote />
        <SortList typeSort={typeSort} setTypeSort={setTypeSort} />
        <ListNotes typeSort={typeSort} />
      </div>
    </CONTEXT.Provider>
  );
}

export default App;
