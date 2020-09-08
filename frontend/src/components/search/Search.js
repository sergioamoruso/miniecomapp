import React, { useState } from "react";
import "./Search.css";
import logo from "../../assets/logo.png";

function Search({ setSearchText, submitSearch }) {

  const onSubmit = async (e) => {
    e.preventDefault();
    await submitSearch();
  }

  return (
    <form onSubmit={onSubmit} className="container">
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
