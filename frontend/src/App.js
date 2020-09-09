import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Main from "./components/main/Main";
import Results from "./components/results/Results";
import Detail from "./components/detail/Detail";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const executeSearchQueryRequest = async (query) => {
    const requestUrl = `/api/items?q=${query}`;
    console.log({ msg: "Executing request...", value: requestUrl });
    const response = await axios.get(requestUrl);
    console.log({
      msg: "Request successful",
      categories: response.data.categories,
      items: response.data.items,
    });
    setCategories(response.data.categories);
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
            exact
            path="/items"
            render={(props) => {
              const params = new URLSearchParams(props.location.search);
              const query = params.get("search");
              console.log({
                msg: "Received GET /items?search=",
                value: query,
              });

              return (
                <Results
                  history={props.history}
                  executeSearchQueryRequest={executeSearchQueryRequest}
                  query={query}
                  categories={categories}
                  items={items}
                />
              );
            }}
          />

          <Route
            exact
            path="/items/:id"
            render={() => (
              <Detail
                executeSearchQueryRequest={executeSearchQueryRequest}
                categories={categories}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
