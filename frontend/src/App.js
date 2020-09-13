import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./components/search/Search";
import Results from "./pages/results/Results";
import Detail from "./pages/detail/Detail";
import NoMatch from "./pages/nomatch/NoMatch";

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

          <Route path="*" render={() => <NoMatch />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
