import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Button.scss";

const Button = ({ styled, full, loading, children, ...props }) => (
  <button
    className={`button ${full ? "button--full" : ""} ${
      styled ? `button--${styled}` : ""
    }`}
    {...props}
  >
    <span>{children}</span>
    {loading && <FontAwesomeIcon icon="spinner" spin />}
  </button>
);

export default Button;
