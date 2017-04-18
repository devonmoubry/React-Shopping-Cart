import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'
import Cart from './cart.js'
import ProductList from './product_list.js'

const NavBar = () => {
  return (
    <nav>
    </nav>
  )
}

class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <NavBar/>
        <section>
          <h1>Shopping Cart</h1>
          <Cart />
          <ProductList />
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
