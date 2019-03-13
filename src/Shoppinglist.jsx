import React, { Component } from "react";
import ShoppingItem from "./ShoppingItem";

class ShoppingList extends Component {
  state = { shoppingItems: ["apple", "banana", "beer"] };

  updateShoppingList = index => {
      let newShoppingItems = [...this.state.shoppingItems];
      newShoppingItems.splice(index, 1);
      this.setState({shoppingItems : newShoppingItems})

  };

  render() {
    return (
      <div>
        <h1>Shopping List for {this.props.name}</h1>

        <div>
          {this.state.shoppingItems.map((shoppingItem, index) => (
            <ShoppingItem
              index={index.toString()}
              deleteShoppingItem={this.updateShoppingList}
              key={shoppingItem + index}
              shoppingItemName={shoppingItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ShoppingList;

// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }
