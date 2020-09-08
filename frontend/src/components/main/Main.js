import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";

import Search from "../search/Search";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Main({ executeSearchQueryRequest }) {
  
  const [isLoading, setIsLoading] = useState(false); // indicates whether to display loading icon or not
  const [searchSubmitted, setSearchSubmitted] = useState(false); // indicates whether to redirect to results page or not
  const [searchText, setSearchText] = useState("");

  const submitSearch = async () => {
    setIsLoading(true);
    await executeSearchQueryRequest(searchText);
    await timeout(2000); // Timeout for UX purposes only (let the user know that the search is being processed)
    setIsLoading(false);
    setSearchSubmitted(true);
  };

  if (searchSubmitted) {
    return (
      <Redirect
        to={{
          pathname: "/items",
          search: `?search=${searchText}`,
        }}
      />
    );
  }

  return (
    <div>
    <Search setSearchText={setSearchText} submitSearch={submitSearch} />
      {isLoading && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}
    </div>
  );
}

export default Main;
