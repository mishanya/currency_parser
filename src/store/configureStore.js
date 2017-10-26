import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
import * as currencyActions from '../actions/currencyActions';


export default function configureStore(initialState) {
  const store                = compose(applyMiddleware(thunk))(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

