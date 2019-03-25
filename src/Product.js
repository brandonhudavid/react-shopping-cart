import React from "react";
import "./styles/cart.css";

class Product extends React.Component {

    render() {
        return (
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                        <div class="header">{this.props.productName}</div>
                        <div class="description">
                            Price: ${this.props.price}
                        </div>
                    </div>
                    <div class="ui bottom attached button" onClick={() => addToCart(this.props)}>
                        <i class="add icon"></i>
                        Add to Cart
                    </div>
                </div>
            </div>
        );
    }
}

let counter = {};

function addToCart(props) {
    if (!counter[props.productName]) {
        counter[props.productName] = 0;
    }
    counter[props.productName]++;
    if (counter[props.productName] > props.limit) {
        counter[props.productName]--;
        alert(`There are too many ${props.productName}s in your cart!`)
    }
    else if (counter[props.productName] === 1) {
        alert(`There is ${counter[props.productName]} ${props.productName} in your cart!`);
    } else {
        alert(`There are ${counter[props.productName]} ${props.productName}s in your cart!`);
    }
}

export default Product;