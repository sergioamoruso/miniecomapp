import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Main from "./components/main/Main";
import Results from "./components/results/Results";
import Detail from "./components/detail/detail";

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
        <Switch>
          <Route exact path="/">
            <Main executeSearchQueryRequest={executeSearchQueryRequest} />
          </Route>

          <Route
            path="/items"
            render={(props) => {
              const params = new URLSearchParams(props.location.search);
              const search = params.get("search");
              console.log({
                msg: "Received GET /items?search=",
                value: search,
              });

              return (
                <Results
                  history={props.history}
                  executeSearchQueryRequest={executeSearchQueryRequest}
                  search={search}
                  items={items}
                />
              );
            }}
          />

          <Route path="/items/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
