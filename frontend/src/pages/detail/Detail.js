import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Error from "../../components/error/Error";

import apiClient from "../../services/apiClient";
import formatAmount from "../../helpers/formatAmount";
import formatDecimals from "../../helpers/formatDecimals";
import formatCondition from "../../helpers/formatCondition";

import "./Detail.css";

function Detail() {
  const [item, setItem] = useState({});
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [serverError, setServerError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getItemDetail = async () => {
      const data = await apiClient.getItemDetail(id);
      if (data) {
        setItem(data.item);
        setDataRetrieved(true);
      } else {
        setServerError(true);
      }
    };

    getItemDetail();
  }, []);

  if (serverError) return <Error />;

  return (
    <div>
      {!dataRetrieved && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}
      {dataRetrieved && (
        <div>
          <Breadcrumb categories={item.categories} />
          <div className="detail-container">

            <div className="detail-image-description">
              <img className="detail-image" src={item.picture} />
              <div className="detail-description-title-detail">
                <div className="detail-description-title">
                  Descripción del producto
              </div>
                <div className="detail-description-detail">
                  {item.description}
                </div>
              </div>
            </div>

            <div className="detail-condition-sold-title-price-button">
              <div className="detail-condition-sold">
                {`${formatCondition(item.condition)} - ${item.sold_quantity
                  } vendidos`}
              </div>
              <div className="detail-title">{item.title}</div>
              <div className="detail-price-cents">
                <div className="detail-price">{`$ ${formatAmount(
                  item.price.amount
                )}`}</div>
                <div className="detail-cents">{`${formatDecimals(
                  item.price.decimals
                )}`}</div>
              </div>
              <button className="detail-button">Comprar</button>
            </div>


          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
