import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import Item from "../item/Item";

import "./Results.css";

function Results() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getItems = async () => {
      setDataRetrieved(false);
      const query = new URLSearchParams(location.search);
      const requestUrl = `/api/items?q=${query.get("search")}`;
      console.log({ msg: "Executing request...", value: requestUrl });
      const response = await axios.get(requestUrl);
      console.log({
        msg: "Request successful",
        categories: response.data.categories,
        items: response.data.items,
      });
      setCategories(response.data.categories);
      setItems(response.data.items);
      setDataRetrieved(true);
    };

    getItems();
  }, [location]);

  return (
    <div>
      <Breadcrumb categories={categories} />
      {!dataRetrieved && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}
      <div className="item-list">
        {dataRetrieved && items.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default Results;
