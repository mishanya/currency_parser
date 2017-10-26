import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrencySelect         from '../components/CurrencySelect'
import CurrencyList           from '../components/CurrencyList'
import * as currencyActions   from '../actions/currencyActions'


class App extends Component {

  render() {
    const {addCurrency, updateRate}        = this.props.currencyActions;
    const {currencies, updatingCurrencies} = this.props;
    return (
      <div className="ui equal width center aligned padded grid">
        <h1 className="sixteen wide column">Currency rates parser</h1>
        <CurrencySelect
          currencies         = {currencies}
          addCurrency        = {addCurrency} />
        <CurrencyList
          updatingCurrencies = {updatingCurrencies}
          updateRate         = {updateRate} />
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
    currencies:         state.currencies,
    updatingCurrencies: state.updatingCurrencies,
    addCurrency:        state.addCurrency,
    updateRate:         state.updateRate
  }
}

function mapDispatchToProps(dispatch) {
  return {
    currencyActions: bindActionCreators(currencyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
