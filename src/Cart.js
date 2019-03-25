import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data"

class Cart extends React.Component {

  render() {
    return (
      <div className="page-content">
        {ProductData.products.map(product =>  <Product productName={product.name} price={product.cost} limit={product.stock} />)}
      </div>
    );
  }

}

export default Cart;
