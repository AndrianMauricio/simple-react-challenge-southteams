import React, { Component } from "react";

import Button from "../Button";

import "./Modal.scss";

class Modal extends Component {
  state = {
    itemName: "",
    validItemName: false,
  };

  handleItemChange = e => {
    const value = e.target.value;

    this.setState({
      itemName: value,
      validItemName: value !== "",
    });
  };

  render() {
    const {
      props: { action, onCancel, onSubmit },
      state: { itemName, validItemName },
      handleItemChange,
    } = this;
    return (
      <div className="modal">
        <div className="modal__content">
          <h2>Add item</h2>
          <form
            action="#"
            onSubmit={e => {
              e.preventDefault();
              onSubmit(itemName);
            }}
          >
            <input
              type="text"
              value={itemName}
              onChange={handleItemChange}
              disabled={action === "addingItem"}
            />
            <div className="modal__content__actions">
              <Button type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button
                type="submit"
                styled={validItemName ? "primary" : "disabled"}
                loading={action === "addingItem"}
                disabled={!validItemName}
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
