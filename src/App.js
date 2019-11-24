import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Entries from './pages/Entries'
import EntryContextProvider from './contexts/EntryContext';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import AboutButton from './components/About-Button'

export default function App() {
  return (
    <div className="bg-grid ">
      <AboutButton className="float" />
      <PerfectScrollbar>
        <div className="container cont shadow-lg border my-0">
          <EntryContextProvider>

            <Header />

            <Switch>
              <Route exact path="/" component={Entries} />
            </Switch>

          </EntryContextProvider>
        </div>
      </PerfectScrollbar>
    </div>
  )
}
