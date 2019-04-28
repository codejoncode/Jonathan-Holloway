import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; 
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './Components/common/util/ScrollToTop';

ReactDOM.render(
<BrowserRouter>
  <ScrollToTop>
    <App />
  </ScrollToTop>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
