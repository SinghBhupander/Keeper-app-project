import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Notes from "./Notes";

function createNote(Notes) {
  return <Note title={Notes.title} desc={Notes.desc} />;
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(createNote)}
      <Footer />
    </div>
  );
}
export default App;
