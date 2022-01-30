import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
// import { store } from './Store/Store'
import reducers from './Store/Reducers/Index';
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={createStore(reducers)}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();