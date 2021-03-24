import React from 'react';
import './App.scss';
import Clock from './components/clock/clock';
import Randomizer from './components/randomizer/Randomizer'
import Form from './components/weather/Form';
import Weather from './components/weather/Weather';
import ToDo from './components/toDo/toDo';

import dataBG from './components/dataBG'
import pict from './assets/bg/22.jpg'
import data from './components/dataWeather';
import {Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import News from './components/news/news'
const API_KEY= '8768da57bd891fa41359848c1665c9e4';

let sectionStyle = {

  backgroundImage: `url(${ pict})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

class App extends React.Component {
constructor(){
  super()
this.getPict(dataBG)
}




  state={
    imgBG:pict ,
    icon:undefined,
    temp: undefined,
    city: undefined,
    country:undefined ,
    humidity: undefined,
    sunset: undefined,
    description: '...',
  }
// componentDidMount(){
//   giveRandomIndex(dataBG)
// }


  gettingWeather= async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
console.log(  'xbfc', city)
    if(city){
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
      const data = await api_url.json()


      var sunset=data.sys.sunset;

      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours()+ ":" + date.getMinutes()+ ":" + date.getSeconds()



      this.setState({

        city: data.name,
        temp: Math.ceil(data.main.temp)+ '°C',
      // icon:data.weather[0].icon,
        country:data.sys.country,
        humidity: data.main.humidity,
        sunset:  sunset_date,
        description: data.weather[0].description
      })
    }

  }





//    giveRandomIndex(arr) {
//     let randNumber = Math.floor(Math.random() * arr.length);
//     return randNumber;
// }

  getPict(arr){
//    arr.forEach(el=>{

//     imageBG=el[0]
//     console.log(imageBG )
//  return imageBG

//     })

 }
  render(){
    let imageBG =null;


      const  gettingWeather =this.gettingWeather
      const {city, country,temp,icon,sunset,humidity,description,imgBG }=this.state
    return (
      <div className='App' style={ {backgroundImage:`url(${dataBG[0][0]})`, width:'100%'}}>
      <div className='wrapper'>
           <div className='weatherBlock' >
         <Form   data={data} gettingWeather={gettingWeather}/>
        <Weather  city={city}
        country ={country}
        temp = {temp}
        sunset = {sunset}
        icon={icon}
        humidity={humidity}
        description={description}
         data={data} />
      </div>
<Clock  style={ {backgroundImage:`url(${imageBG})`}}/>
      </div>
      <NavLink to="/news">News</NavLink>
      <Switch>
      <Route  path="/news">
            <News/>
          </Route>
</Switch>


        <Randomizer />

        <ToDo/>


      </div>
    );
  }
}

export default App;


// style={{bacgraund:`${imgBG}`}}