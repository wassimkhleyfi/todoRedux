import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Todo from './todoComponents/index'
import { Provider } from 'react-redux'
//import reducer from './store/reducers'
//import { createStore } from 'redux';
import store from "./JS/store/store";
//const store = createStore(reducer);
//const app = (
 // <Provider store={store}>
//      <Todo />
//  </Provider>
//);
//ReactDOM.render(app, document.getElementById('root'));



ReactDOM.render(
  <Provider store={store}>
  <Todo />
  </Provider>,
  document.getElementById("root")
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
