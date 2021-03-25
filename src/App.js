import React from 'react';
import './App.scss';
import Home from './home';
import News from './components/news/news'
import {Route, Switch } from "react-router-dom";


class App extends React.Component {

 
  render(){
      return(
   
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <News />
      </Route>
    </Switch>)
      }

}
export default App;
