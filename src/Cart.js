import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }

  render() {
    return (
      <div className="page-content">
        <div class="ui cards">
          {ProductData.products.map(product =>
            <Product productName={product.name} cost={product.cost.toFixed(2)}
              onAddToCart={() => this.handleAddToCart(product.name, product.cost)}
              onRemove={() => this.handleRemove(product.name)} />)}
        </div>
        <Receipt items={this.state.cartItems} />
      </div>
    );
  }

  handleRemove(productName) {
    let items = [...this.state.cartItems].filter(word => word["productName"] !== productName);
    this.setState({"cartItems": items});
    // console.log(items);
    return;
  }

  handleAddToCart(productName, price) {
    let items = [...this.state.cartItems];
    for (let i=0; i<items.length; i++) {
      let product = items[i];
      if (productName === product["productName"]) {
        items[i]["count"]++;
        this.setState({"cartItems": items});
        // console.log(items);
        return;
      }
    }
    let newProduct = {
      "productName": productName,
      "cost": price,
      "count": 1
    };
    items.push(newProduct);
    this.setState({"cartItems": items});
    // console.log(items);
    return;
  }
}

export default Cart;
