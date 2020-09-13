import React from "react";
import { Link } from "react-router-dom";

import formatAmount from "../../helpers/formatAmount";

import "./Item.css";

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
              item.price.amount,
              true
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
      <div className="item-detail-line"></div>
    </div>
  );
}

export default Item;
