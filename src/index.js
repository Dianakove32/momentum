import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter } from "react-router-dom";
import ContextProvider from './components/context/Context';
import ApiProvider from "./context/ApiContext";
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
  <HashRouter >
    <ApiProvider>
      <ContextProvider>
        <CookiesProvider>
         <App />
        </CookiesProvider>
      </ContextProvider>
    </ApiProvider>
  </HashRouter>,
  document.getElementById('root')
);



