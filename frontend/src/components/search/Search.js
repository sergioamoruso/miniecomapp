import React, { useState } from "react";
import "./Search.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Search({ executeSearchQueryRequest }) {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitSearch = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await executeSearchQueryRequest(searchText);
    await timeout(2000); // Timeout for UX purposes only (let the user know that the search is being processed)
    setIsLoading(false);
  };

  return (
    <form onSubmit={submitSearch} className="container">
      <img src={logo} className="logo" alt="Mercado Libre Logo" />
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <input type="submit" value="" />
      {isLoading && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}
    </form>
  );
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Search;
