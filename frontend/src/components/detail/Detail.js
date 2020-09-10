import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Breadcrumb from "../breadcrumb/Breadcrumb";

import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false); // indicates whether to display loading icon or not
  const categories = [];

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

  return (
    <div>
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
