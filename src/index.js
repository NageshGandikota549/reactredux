import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxStore from "../../reduxapp/src/Redux/store";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={reduxStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

