import PropTypes from 'prop-types'
import React, {Component} from 'react'


class CurrencySelect extends Component {

  onCurrencySelect(e) {
    let currency = e.target.getAttribute("data-value");
    this.props.addCurrency(currency);
  }

  render() {
    const  currencies = this.props.currencies,
    currenciesList    = currencies.map((currency) => {
      return (
        <div
          key        = {currencies.indexOf(currency)}
          className  = "sixteen wide column centered currency__unit" >
          <div
            className  = "ui button"
            data-value = {currency.id}
            onClick    = {::this.onCurrencySelect} >
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



