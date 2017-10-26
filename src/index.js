import 'babel-polyfill'
import React, { Component, PropTypes  } from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './containers/App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'


const store = configureStore();

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
