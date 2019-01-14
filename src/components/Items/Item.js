import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button";

import "./Item.scss";

const Item = ({ loading, name, onRemove }) => (
  <div className="item">
    <span className="item__name">{name}</span>
    <span className="item__actions">
      <Button
        type="button"
        className="item__actions__delete"
        onClick={onRemove}
      >
        {loading ? (
          <FontAwesomeIcon icon="spinner" spin />
        ) : (
          <FontAwesomeIcon icon="trash" />
        )}
      </Button>
    </span>
  </div>
);

export default Item;
