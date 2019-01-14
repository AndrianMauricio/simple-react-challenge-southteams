import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Item from "./Item";

import "./Items.scss";

const Items = ({ items, action, onRemoveItem, loading }) =>
  loading ? (
    <div className="loading-items">
      <p>Retrieving Items...</p>
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  ) : (
    <div className="items">
      {items.map(item => (
        <Item
          name={item.name}
          key={item.id}
          loading={action === `removingItem-${item.id}`}
          onRemove={() => onRemoveItem(item.id)}
        />
      ))}
    </div>
  );

export default Items;
