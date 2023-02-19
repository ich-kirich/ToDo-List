import { useState } from "react";
import AddNote from "./components/addNote/addNote";
import ListNotes from "./components/listNotes/listNotes";
import Header from "./UI/header/Header";
import "./styles/style.scss";

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
      <AddNote listNotes={listNotes} setListNotes={setListNotes} />
      <ListNotes listNotes={listNotes} setListNotes={setListNotes} />
    </div>
  );
}

export default App;
