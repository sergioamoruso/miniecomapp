import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";

function formatAmount(amount) {
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
  const final = intSectionWithFloatingPoints.concat(",", decSection);

  return final;
}

function Item({ item }) {
  return (
    <div className="item-container">
      <Link to={`/items/${item.id}`}>
        <img className="item-image" src={item.picture} />
      </Link>

      <div className="item-detail">
        <div className="item-price-icon-title">
          <div className="item-price-icon">
            <div className="item-price">{`$ ${formatAmount(
              item.price.amount
            )}`}</div>
            {item.free_shipping && (
              <div className="icon" alt="Free Shipping"></div>
            )}
          </div>
          <Link to={`/items/${item.id}`}>
            <div className="item-title">{item.title}</div>
          </Link>
        </div>
        <div className="item-state">{item.state_name}</div>
      </div>
    </div>
  );
}

export default Item;
