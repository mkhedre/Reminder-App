
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reminder from './reducers/reducer';
import App from './App';
import './index.css'
//import reportWebVitals from './reportWebVitals';

const store =createStore(reminder)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);