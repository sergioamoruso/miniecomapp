import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Search from "../search/Search";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import "./Detail.css";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Detail({ executeSearchQueryRequest, categories }) {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false); // indicates whether to display loading icon or not
  const [searchSubmitted, setSearchSubmitted] = useState(false); // indicates whether to redirect to results page or not
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getItemDetail = async () => {
      setIsLoading(true);
      const requestUrl = `/api/items/${id}`;
      const response = await axios.get(requestUrl);
      setItem(response.data.item);
      setIsLoading(false);
    };

    getItemDetail();
  }, []);

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
      <Breadcrumb categories={categories} />
      {isLoading && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}
      {!isLoading && (
        <div className="detail-container">
          <img className="detail-image" src={item.picture} />
        </div>
      )}
    </div>
  );
}

export default Detail;
