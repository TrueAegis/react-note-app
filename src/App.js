import React from 'react';
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { ApolloProvider } from "@apollo/client";
import NoteEditPageController from "./components/NoteEditPageController.js";
import NoteListPage from "./components/NoteListPage.js";
import { NotesProvider } from "./hooks/useNotes";
import apolloClient from "./apolloClient";
import "./App.css";
import "./ionicStyles";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NotesProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/notes/edit/:id" component={NoteEditPageController} />
              <Route exact path="/notes" component={NoteListPage} />
              <Redirect exact from="/" to="/notes" />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </NotesProvider>
    </ApolloProvider>
  );
}

export default App;
