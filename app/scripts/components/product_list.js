import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import Product from './product.js'

class ProductList extends React.Component {
  constructor(props) {
    super(props)

    }

    render() {
      return (
        <section>
          <h2>Products</h2>
          { this.props.products.map(function(product) {
            return (
              <Product key={product.id} product={product} />
            )
          }) }
        </section>
      )
    }
  }

export default connect(container.allState)(ProductList)
