import React, { useState } from "react";
import "./Search.css";
import logo from "../../assets/logo.png";

function Search() {
  const [searchText, setSearchText] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <form onSubmit={submitSearch} className="container">
      <img src={logo} className="logo" alt="Mercado Libre Logo"/>
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
