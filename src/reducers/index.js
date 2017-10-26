import omit from 'lodash';
import assign from 'lodash';
import mapValues from 'lodash';
import update from 'react-addons-update';


const listOfCurrencies = [
  {
    id: "USDRUB",
    rate: '',
    title: 'USD',
    isUpdating: false
  },
  {
    id: "EURRUB",
    rate: '',
    title: 'EUR',
    isUpdating: false
  },
  {
    id: "GBPRUB",
    rate: '',
    title: 'GBP',
    isUpdating: false
  }
],
updatingCurrencies = [],

initialState = {
  currencies:         listOfCurrencies,
  updatingCurrencies: updatingCurrencies
};




export default function currencies(state = initialState, action) {
  var thisCurrency      = state.currencies.find(currency => currency.id ==  action.payload),
  thisCurrencyIndex     = state.currencies.indexOf(thisCurrency),
  thisUpdatingCurrency  = state.updatingCurrencies.find(currency => currency.id ==  action.payload),
  updatingCurrencyIndex = state.updatingCurrencies.indexOf(thisUpdatingCurrency);

  switch (action.type) {
    case 'ADD_CURRENCY':
      return  update(state, {
        currencies: {
          $splice: [[thisCurrencyIndex, 1]]
        }, updatingCurrencies: {
            $push: [thisCurrency]
          }
        }
      )

    case 'START_GETTING_RATE':
      return  update(state, {
          updatingCurrencies: {
            [updatingCurrencyIndex]: {
              isUpdating: {
                $set: true
              }
            }
          }
        }
      )
    case 'GOT_RATE':
      return  update(state, {
          updatingCurrencies: {
            [updatingCurrencyIndex]: {
              rate: {
                $set: action.rate
              },
              isUpdating: {
                $set: false
              }
            }
          }
        }
      )
    case 'UPDATE_FAIL':
      return update(state, {
          updatingCurrencies: {
            [updatingCurrencyIndex]: {
              isUpdating: {
                $set: false
              }
            }
          }
        }
      )
    default:
      return state;
  }

}

// export default function currencies(state = initialState){
//   return state;
// }
