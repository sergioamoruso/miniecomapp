import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Search from "../search/Search";
import Item from "../item/Item";

import "./Results.css";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Results({ history, executeSearchQueryRequest, search, items }) {
  const [isLoading, setIsLoading] = useState(false); // indicates whether to display loading icon or not
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const submitUrlSearch = async () => {
      if (history.action !== "REPLACE") {
        await submitSearch(search);
      }
    };

    submitUrlSearch();
  }, []);

  const submitSearch = async (input) => {
    setIsLoading(true);
    await executeSearchQueryRequest(input || searchText);
    await timeout(2000); // Timeout for UX purposes only (let the user know that the search is being processed)
    setIsLoading(false);
    input || history.push({
      pathname: "/items",
      search: `?search=${searchText}`,
    });
  };

  return (
    <div>
      <Search setSearchText={setSearchText} submitSearch={submitSearch} />
      <h1>Results</h1>

      {isLoading && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}

      {!isLoading && items.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
}

export default Results;
