import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'


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
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
