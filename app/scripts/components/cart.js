import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

    );
  }
}

export default connect(container.allState)(Cart)
