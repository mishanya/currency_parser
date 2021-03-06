import request from 'axios';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk  from 'redux-thunk';
import * as reducers from '../reducers';
import store from '../store/configureStore';

export function addCurrency(currency) {
  return  (dispatch) => {
    dispatch({
      type:    'ADD_CURRENCY',
      payload: currency
    })
    dispatch(updateRate(currency))
  }
}

export function removeCurrency(currency){
  return {
    type: 'REMOVE_CURRENCY',
    payload: currency
  }
}

export function updateRate(currency){
  let urlAPI = `https://query.yahooapis.com/v1/public/yql?q=env 'store://datatables.org/alltableswithkeys'; select * from yahoo.finance.xchange where pair in ('${currency}')&format=json`;
  return  (dispatch) => {
    dispatch(startGettingRate(currency));
    return fetch(urlAPI)
      .then(
        response =>  {
          try {
            return response.json()
          } catch (error){
            dispatch(failedUpdate(currency, error));
            return;
          }
        },
        error => {
          dispatch(failedUpdate(currency, error));
          return;
        }
      ).then(json => {
        if (json == undefined) {
          dispatch(failedUpdate(currency, 'JSON is undefined'))
          return;
        }
        let rate = json.query.results.rate.Bid;
        dispatch(gotUpdate(currency, rate));
      })
  }
}

export function startGettingRate(currency){
  return {
    type: 'START_GETTING_RATE',
    payload: currency
  }
}

export function failedUpdate(currency, result){
  console.log(`Such a respond: \n${result} \n: (`);
  return {
    type: 'UPDATE_FAIL',
    payload: currency,
    rate: 'Error'
  }
}

export function gotUpdate(currency, result){

  return  (dispatch, getState) => {
    dispatch({
      type: 'GOT_RATE',
      payload: currency,
      rate: result
    })
    setTimeout(() => {
      if (getState().updatingCurrencies.length > 0) {
        dispatch(updateRate(currency));
      } else {
        return
      }
    }, 10000)
  }
}
