import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class ProductList extends React.Component {
  constructor(props) {
    super(props)

    }

    render() {
      return (
        <section>
          <h2>Products</h2>
          <h2>Products</h2>
          <h2>Products</h2>
        </section>
      )
    }
  }

export default connect(container.allState)(ProductList)
