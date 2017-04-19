import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.addProduct = this.addProduct.bind(this)
  }

  addProduct() {
    this.props.dispatch({ type: "ADD_ITEM", product: this.props.product });
    this.props.dispatch({ type: "UPDATE_TOTAL" });
  }

  render() {
    return (
      <div className="product">
        <h3>{this.props.product.name}</h3>
        <div className="product-price">${this.props.product.price}</div>
        <button onClick={this.addProduct}>add to cart</button>
      </div>
    )
  }
}

export default connect(container.allState)(Product)
