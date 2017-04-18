import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
  }

  removeItem() {
    console.log('delete, delete');
  }

  render() {
    return (
      <div className="cartItem">
        <h3>{this.props.cartItem.name}</h3>
        <div className="cartItem-price">${this.props.cartItem.price}</div>
        <button onClick={this.removeItem}>remove from cart</button>
      </div>
    )
  }
}

export default connect(container.allState)(CartItem)
