import React from 'react';
import { IonApp } from "@ionic/react";
import NoteListPage from "./components/NoteListPage.js";
import "./ionicStyles";

function App() {
  return (
    <IonApp>
      <div className="App">
        <NoteListPage />
      </div>
    </IonApp>
  );
}

export default App;
