import React, { Component } from "react";

class ShoppingItem extends Component {
  render = () => {
    return (
      <h1 onClick={() => this.props.deleteShoppingItem(this.props.index)}>
        {this.props.shoppingItemName}
      </h1>
    );
  };
}

export default ShoppingItem;
