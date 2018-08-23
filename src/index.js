import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AcornApp from './reducers/index';
import App from './App';

const store = createStore(AcornApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
