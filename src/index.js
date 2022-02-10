import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/customBootstrap.scss';
import App from './App';
import AppContext from './context/AppContext';
import { initState } from 'state/reducer';

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={initState}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
