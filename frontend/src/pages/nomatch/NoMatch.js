import React from "react";
import { useLocation } from "react-router-dom";

import "./NoMatch.css";

function NoMatch() {
  let location = useLocation();

  return (
    <div className="nomatch-container">
      <div className="nomatch-title">Error 404</div>
      <div className="nomatch-description">
        La ruta "<code>{location.pathname}</code>" no existe. Las rutas soportadas
        son:
      </div>
      <div className="nomatch-description-list">
        <ul>
          <li>
            <code>/</code>
          </li>
          <li>
            <code>/items?search=</code>
          </li>
          <li>
            <code>/items/:id</code>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NoMatch;
