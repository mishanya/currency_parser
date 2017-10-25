import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import DropdownSelect         from '../components/DropdownSelect'
import CurrencyList           from '../components/CurrencyList'
import * as currencyActions   from '../actions/currencyActions'

class App extends Component {


  render() {
    return (
      <div className="ui equal width center aligned padded grid">
        <h1 className="sixteen wide column">Currency rates parser</h1>
        <DropdownSelect
          currencies       = {this.props.currencies}
          addCurrency      = {this.props.currencyActions} />
        <CurrencyList />
      </div>
    )
  }



  onCurrencyDelete(currency) {
  };

  onCurrencyUpdate(currency) {
  };
}



function mapStateToProps (state) {
  return {
    currencies:  state.currencies,
    addCurrency: state.addCurrency
  }
}

function mapDispatchToProps(dispatch) {
  return {
    currencyActions: bindActionCreators(currencyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
