import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./components/search/Search";
import Results from "./components/results/Results";
import Detail from "./components/detail/Detail";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Search />
        <Switch>
          <Route exact path="/" render={() => <div></div>} />

          <Route exact path="/items" render={() => <Results />} />

          <Route exact path="/items/:id" render={() => <Detail />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
