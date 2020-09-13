import React from "react";

import "./Error.css";

function Error() {
  return (
    <div className="error-container">
      <div className="error-title">Error 500</div>
      <div className="error-description">
        El servidor ha respondido con error, por favor verifique que la URL
        ingresada y los parametros sean correctos y vuelva a intentarlo.
      </div>
    </div>
  );
}

export default Error;
