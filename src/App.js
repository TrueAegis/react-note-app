import React from 'react';
import NoteListPage from "./components/NoteListPage.js";
import NoteEditPage from './components/NoteEditPage.js';
import './App.css';


function App() {
  return (
    <div className = "App">
      <NoteListPage/>
      {/*<NoteEditPage text ="React is a fun prop!"/>*/}
    </div>
  );
}

export default App;
