import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  addProduct() {
    console.log(('add product to cart'));
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
