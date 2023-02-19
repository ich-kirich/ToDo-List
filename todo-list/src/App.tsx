import { useState } from "react";
import AddNote from "./components/addNote";
import ListNotes from "./components/listNotes";
import Header from "./UI/header/Header";

function App() {
  const [listNotes, setListNotes] = useState([
    {
      id: 1,
      body: "fist Note",
      status: true,
    },
    {
      id: 2,
      body: "second Note",
      status: true,
    },
    {
      id: 3,
      body: "third Note",
      status: false,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <AddNote />
      <ListNotes listNotes={listNotes} setListNotes={setListNotes} />
    </div>
  );
}

export default App;
