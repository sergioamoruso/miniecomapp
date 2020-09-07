import React, { useState } from "react";
import "./Search.css";
import logo from "../../assets/logo.png";

function Search({ executeSearchQueryRequest }) {
  const [searchText, setSearchText] = useState("");

  const submitSearch = async (e) => {
    e.preventDefault();
    await executeSearchQueryRequest(searchText);
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
    </form>
  );
}

export default Search;
