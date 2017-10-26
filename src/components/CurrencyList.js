import React, { Component } from 'react'

class CurrencyList extends Component {

  componentDidMount(){


  }

  onCurrencyUpdate(e) {
    let currency = e.target.getAttribute("data-value");
    this.props.updateRate(currency);
  }

  onCurrencyRemove(e) {
    let currency = e.target.getAttribute("data-value");
    this.props.removeCurrency(currency);
  }

  render() {
    let updatingCurrencies = this.props.updatingCurrencies,
    updatingCurrenciesList = updatingCurrencies.map((currency) => {
      return(
        <div
          className = "sixteen wide column centered currency__unit ui centered grid"
          key       = {updatingCurrencies.indexOf(currency)  }>
          <div className="currency__prop two wide column"> {currency.title} </div>
          <div className="currency__prop six wide column">{currency.rate}</div>
          <div className="currency__prop two wide column">
            <i  onClick    = {::this.onCurrencyUpdate}
                data-value = {currency.id}
                className  = {`refresh icon currency__prop currency__prop_rotator ${currency.isUpdating == true ? 'animated' : ''}`}></i>
          </div>
          <div className="currency__prop two wide column">
            <i  onClick    = {::this.onCurrencyRemove}
                data-value ={currency.id}
                className  ="trash icon currency__prop"></i>
          </div>
        </div>
      )
    });
    return (
      <div className="eight wide column">
        <div id="currency-list" className="ui grid currency-list">
          <h2 className="sixteen wide column centered"> Updating currency</h2>
          {updatingCurrenciesList }
        </div>
      </div>
    )
  }
}

export default CurrencyList
