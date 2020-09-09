import React from "react";

import "./Breadcrumb.css";

function Breadcrumb({ categories }) {
  return <div className="breadcrumb">{categories.join(" > ")}</div>;
}

export default Breadcrumb;
