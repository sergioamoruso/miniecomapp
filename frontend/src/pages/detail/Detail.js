import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Error from "../../components/error/Error";

import apiClient from "../../services/apiClient";

import "./Detail.css";

const translateCondition = (condition) => {
  return condition == "new" ? "Nuevo" : "Usado";
};

const processDecimals = (decimals) => {
  let converted = decimals.toString();
  if (converted.length == 1) converted = converted.concat("0");
  return converted;
};

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
  const final = includeDecimals
    ? intSectionWithFloatingPoints.concat(",", decSection)
    : intSectionWithFloatingPoints;

  return final;
}

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
                  <div className="detail-price">{`$ ${formatAmount(
                    item.price.amount
                  )}`}</div>
                  <div className="detail-cents">{`${processDecimals(
                    item.price.decimals
                  )}`}</div>
                </div>
                <button className="detail-button">Comprar</button>
              </div>
            </div>
            <div className="detail-description-title-detail">
              <div className="detail-description-title">
                Descripción del producto
              </div>
              <div className="detail-description-detail">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
