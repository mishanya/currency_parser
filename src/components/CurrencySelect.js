import PropTypes from 'prop-types'
import React, {Component} from 'react'
// import { connect } from 'react-redux'
// import * as currencyActions from '../actions/currencyActions'

// const mapStateToProps = (state) => {
//   return {
//     currencies: state.currencies
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   onCurrencySelect(currency) {
//     dispatch(selectCurrency(currency));
//   }
// });


class CurrencySelect extends Component {


  onCurrencySelect(e) {
    let currency = e.target.getAttribute("data-value");
    this.props.addCurrency(currency);
  }


  render() {
    const  currencies  = this.props.currencies,
    currenciesList     = currencies.map((currency) => {
      return (
        <div
          className  = "sixteen wide column centered currency__unit" >
          <div
            className="ui button"
            data-value = {currency.id}
            key        = {currencies.indexOf(currency)}
            onClick    = {::this.onCurrencySelect}
          >
            {currency.title}
          </div>
        </div>
      )
    });

    return (
      <div className="eight wide column">
        <div id="currency-select" className="ui grid currency-select">
          <h2 className="sixteen wide column centered">Currency</h2>
          {currenciesList}
        </div>
      </div>
    )
  }
}



export default CurrencySelect;



