import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./Search.css";

function Search() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchText != "") history.push(`/items?search=${searchText}`);
  };

  return (
    <form onSubmit={onSubmit} className="search-container">
      <div className="logo-search-bar">
        <img src={logo} className="logo" alt="Mercado Libre Logo" />
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input type="submit" value="" />
      </div>
    </form>
  );
}

export default Search;
