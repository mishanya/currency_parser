import * as types from '../constants/ActionTypes';
import omit from 'lodash';
import assign from 'lodash';
import mapValues from 'lodash';
import { combineReducers } from 'redux';
import * as currencyActions from '../actions/currencyActions'

// const currencies = (state = [], someAction) => {
//   switch (someAction.type) {
//     case types.ADD_CURRENCY:
//       return [ ...state, someAction.currency];
//     default:
//       return state;
//   }
// };

const listOfCurrencies = [
  {
    id: 'RUBUSD',
    rate: '',
    title: 'USD',
    autoUpdate: false
  },
  {
    id: 'RUBEUR',
    rate: '',
    title: 'EUR',
    autoUpdate: false
  },
  {
    id: 'RUBGBP',
    rate: '',
    title: 'GBP',
    autoUpdate: false
  }
],
initialState = {
  currencies: listOfCurrencies,
  updatingCurrencies: []
};




export default function currencies(state = initialState, action) {

  switch (action.type) {
    case 'ADD_CURRENCY':
      return { ...state, updatingCurrencies: updatingCurrencies.push(action.payload)  }

    default:
      return state;
  }

}

// export default function currencies(state = initialState){
//   return state;
// }
