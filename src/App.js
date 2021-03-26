import React from 'react';
import './App.scss';
import Home from './home';
import News from './components/news/news';
import Dish from './components/dish/dishRandom';
import {Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/navbar';

class App extends React.Component {

 
  render(){
      return(        
        <div>
        <Navbar />  

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/dish">
        <Dish />
      </Route>
    </Switch>
    </div>
    )
   
      }

}
export default App;
