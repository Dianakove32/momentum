import React from 'react';
import './App.scss';
import Home from './home';
import News from './components/news/news';

import {Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import DishList from './components/dish/DishList';

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
        <DishList />
     </Route>
     </Switch>

     </div>

   )

      }

}
export default App;
