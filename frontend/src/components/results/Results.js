import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import Item from "../item/Item";
import Error from "../../components/error/Error";

import apiClient from "../../services/apiClient";

import "./Results.css";

function Results() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [serverError, setServerError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getItems = async () => {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get("search");
      const data = await apiClient.getItems(query);
      if (data) {
        setCategories(data.categories);
        setItems(data.items);
        setDataRetrieved(true);
      } else {
        setServerError(true);
      }
    };

    getItems();
  }, [location]);

  if (serverError) return <Error />;

  return (
    <div>
      <Breadcrumb categories={categories} />
      {!dataRetrieved && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}
      <div className="item-list">
        {dataRetrieved &&
          items.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default Results;
