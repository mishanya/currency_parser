import React, { Component, PropTypes  } from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './containers/App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import {loadState, saveState} from './store/localStorage'

const persistedState = loadState(),
store                = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default;
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app')
    );
  });
}
