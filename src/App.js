import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { getList, addItem, removeItem } from "./api";

import Button from "./components/Button";
import Modal from "./components/Modal";
import Items from "./components/Items";

import "./App.scss";

library.add(faTrash, faSpinner);

class App extends Component {
  state = {
    items: [],
    modal: false,
    action: "gettingItems",
  };

  componentDidMount = () => {
    getList().then(list => {
      this.setState({
        action: "",
        items: list,
      });
    });
  };

  removeItem = id => {
    this.setState({
      action: `removingItem-${id}`,
    });

    removeItem(id).then(list => {
      this.setState({
        action: "",
        items: list,
      });
    });
  };

  addItem = name => {
    this.setState({
      action: "addingItem",
    });

    addItem(name).then(list => {
      this.setState({
        action: "",
        items: list,
        modal: false,
      });
    });
  };

  changeModal = state => {
    this.setState({
      modal: state,
    });
  };

  render() {
    const {
      state: { items, modal, action },
      removeItem,
      addItem,
      changeModal,
    } = this;

    return (
      <div className="app">
        <header>
          <h1>Supermarket List</h1>
          <p>{items.length} ITEMS</p>
        </header>
        <Items
          items={items}
          action={action}
          onRemoveItem={removeItem}
          loading={action === "gettingItems"}
        />
        {action !== "gettingItems" && (
          <Button full styled="primary" onClick={() => changeModal(true)}>
            Add item
          </Button>
        )}
        {modal && (
          <Modal
            action={action}
            onCancel={() => changeModal(false)}
            onSubmit={itemName => addItem(itemName)}
          />
        )}
      </div>
    );
  }
}

export default App;
