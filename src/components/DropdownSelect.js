import PropTypes from 'prop-types'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addCurrency} from '../actions/currencyActions'

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


class DropdownSelect extends Component {

  componentWillMount(){
  }

  onCurrencySelect(e) {
    this.props.onCurrencySelect(+e.target.innerText)
  }


  render() {
    const  currencies  = this.props.currencies,
    currenciesList     = currencies.map((currency) => {
      return (
        <div
          className = "sixteen wide column centered"
          key       = {currencies.indexOf(currency)}
          onClick   = {::this.onCurrencySelect} >
          {currency.title}
        </div>
      )
    });

    return (
      <div className="eight wide column">
        <div id="currency_select" className="ui grid">
          <h2 className="sixteen wide column centered">Currency</h2>
          {currenciesList}
        </div>
      </div>
    )
  }
}



export default  DropdownSelect;



