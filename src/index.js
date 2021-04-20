import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { HashRouter } from "react-router-dom";
import ContextProvider from './components/context/Context';
import ApiProvider from "./context/ApiContext";



ReactDOM.render(
  <HashRouter >
    <ApiProvider>
      <ContextProvider>

         <App />

      </ContextProvider>
    </ApiProvider>
  </HashRouter>,
  document.getElementById('root')
);



