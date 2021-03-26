import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter } from "react-router-dom";
import ContextProvider from './components/context/Context';



ReactDOM.render(
  <HashRouter >
  <ContextProvider>
     <App />
  </ContextProvider>

    </HashRouter>,
  document.getElementById('root')
);



