import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import CartItem from './cart_item.js'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <h2>Your Cart</h2>
        { this.props.cartItems.map(function(cartItem) {
          return (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          )
        }) }
        <h2>Your Total</h2>
        ${ this.props.cartTotal }
      </section>

    )
  }
}

export default connect(container.allState)(Cart)
