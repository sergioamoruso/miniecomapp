import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Search from "./components/search/Search";

function App() {
  const [items, setItems] = useState([]);

  const executeSearchQueryRequest = async (query) => {
    const requestUrl = `/api/items?q=${query}`;
    console.log({ msg: "Executing request...", value: requestUrl });
    const response = await axios.get(requestUrl);
    console.log({ msg: "Request successful", value: response.data.items });
    setItems(response.data.items);
  };

  return (
    <Router>
      <div className="app">
        <Route exact path="/">
          <Search executeSearchQueryRequest={executeSearchQueryRequest} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
