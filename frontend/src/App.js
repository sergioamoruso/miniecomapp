import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Search from "./components/search/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
