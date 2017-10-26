import React, { Component } from 'react'
// import { connect } from 'react-redux'

class CurrencyList extends Component {

  onCurrencyUpdate(e) {
    let currency = e.target.parentNode.getAttribute("data-value");
    this.props.updateRate(currency);
  }

  render() {
    let updatingCurrencies     = this.props.updatingCurrencies,
    isFetchingData,
    updatingCurrenciesList     = updatingCurrencies.map((currency) => {
      return(
        <div
          data-value={currency.id}
          className = "sixteen wide column centered currency__unit ui centered grid"
          key       = {updatingCurrencies.indexOf(currency)  }>
          <div className="currency__prop two wide column"> {currency.title} </div>
          <div className="currency__prop six wide column">{currency.rate}</div>
          <div className="currency__prop two wide column">
            <i  onClick    = {::this.onCurrencyUpdate}
              className={`refresh icon currency__prop currency__prop_rotator ${currency.isUpdating == true ? 'animated' : ''}`}></i>
          </div>
          <div className="currency__prop two wide column">
            <i className="trash icon currency__prop"></i>
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
