import React, { useState } from 'react';
import './Search.css';
import logo from '../../assets/ml-logo.png';

function Search() {
  const [searchText, setSearchText] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
      <form onSubmit={submitSearch} className="container">
        <img src={logo} className="logo"/>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          onChange={(e) => setSearchText(e.target.value)}
          className="searchBox"
        />
        <input
          type="submit"
          className="btn"
        />
      </form>
  );
}

export default Search;
