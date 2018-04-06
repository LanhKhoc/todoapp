import * as React from "react";
import { hydrate } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";


import App from "../shared/containers/App";
import rootReducer from '../shared/reducers';

// initialState
const initialState = {};

// Create store
const store = createStore(rootReducer, initialState);

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)