import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Breadcrumb from "../breadcrumb/Breadcrumb";

import "./Detail.css";

const translateCondition = (condition) => {
  return condition == "new" ? "Nuevo" : "Usado";
};

const processDecimals = (decimals) => {
  if (!decimals) return '00';

  let converted = decimals.toString();

  if (converted.length == 1)
    converted = converted.concat('0');

  return converted;
}

function formatAmount(amount, includeDecimals = false) {
  const withCents = amount.toFixed(2);
  const [intSection, decSection] = withCents.split(".");
  const intSectionArray = intSection.split("");
  const intSectionReverseArray = intSectionArray.reverse();

  const pointPositions = [];
  for (let i = 0; i < intSectionReverseArray.length; i++) {
    const remainder = i % 3;
    if (i > 2 && remainder == 0) pointPositions.push(i);
  }

  const intSectionReverseArrayWithFloatingPoints = intSectionReverseArray.reduce(
    (acc, cur, idx) => {
      if (pointPositions.includes(idx)) {
        acc.push(".");
        acc.push(cur);
      } else acc.push(cur);
      return acc;
    },
    []
  );

  const orderedArrayWithFloatingPoints = intSectionReverseArrayWithFloatingPoints.reverse();
  const intSectionWithFloatingPoints = orderedArrayWithFloatingPoints.join("");
  const final = includeDecimals ? intSectionWithFloatingPoints.concat(",", decSection) : intSectionWithFloatingPoints;

  return final;
}

function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const categories = [];

  useEffect(() => {
    const getItemDetail = async () => {
      const requestUrl = `/api/items/${id}`;
      console.log({ msg: "Executing request...", value: requestUrl });
      const response = await axios.get(requestUrl);
      console.log({
        msg: "Request successful",
        item: response.data.item,
      });
      setItem(response.data.item);
      setDataRetrieved(true);
    };

    getItemDetail();
    
  }, []);

  return (
    <div>
      <Breadcrumb categories={categories} />
      {!dataRetrieved && (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin size="3x" />
      )}
      {dataRetrieved && (
        <div className="detail-container">
          <div className="detail-image-condition-sold-title-price-button">
            <img className="detail-image" src={item.picture} />
            <div className="detail-condition-sold-title-price-button">
              <div className="detail-condition-sold">
                {`${translateCondition(item.condition)} - ${
                  item.sold_quantity
                } vendidos`}
              </div>
              <div className="detail-title">{item.title}</div>
              <div className="detail-price-cents">
              <div className="detail-price">{`$ ${formatAmount(item.price.amount)}`}</div>
              <div className="detail-cents">{`${processDecimals(item.price.decimals)}`}</div>
              </div>
              <button className="detail-button">Comprar</button>
            </div>
          </div>
          <div className="detail-description-title-detail">
          <div className="detail-description-title">
            Descripción del producto
          </div>
          <div className="detail-description-detail">{item.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
