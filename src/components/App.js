import React, { Component } from 'react'
import { connect }          from 'react-redux'
import DropdownSelect       from '../containers/DropdownSelect'
import CurrencyList         from '../containers/CurrencyList'

class App extends Component {
  render() {
    return (
      <div className="ui equal width center aligned padded grid">
        <h1 className="sixteen wide column">Currencies parser</h1>
        <div  className="sixteen wide column"> Привет из App, { this.props.user }!! </div>
        <DropdownSelect />
        <CurrencyList />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
