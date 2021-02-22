import React from 'react';
import './App.scss';
import Clock from './components/clock';
import Form from './components/weather/Form';
import Modalweather from './components/weather/Modalweather';
import Weather from './components/weather/Weather';
  const API_KEY= '8768da57bd891fa41359848c1665c9e4';

class App extends React.Component {

  state={
    icon:undefined,
    temp: undefined,
  city: undefined,
  country:undefined ,
  sunrise: undefined,
  sunset: undefined,
  }

  gettingWeather= async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;

if(city){
   const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
  const data = await api_url.json()
console.log(data)

var sunset=data.sys.sunset;

var date = new Date();
date.setTime(sunset);
var sunset_date = date.getHours()+ ":" + date.getMinutes()+ ":"+date.getSeconds()

  this.setState({
    city: data.name,
  temp: data.main.temp,
  // icon:data.weather[0].icon,
country:data.sys.country,
  sunrise: data.sys.sunrise,
  sunset:  sunset_date,
})
}




  }

  render(){
    const  gettingWeather =this.gettingWeather
    const {city, country,temp,icon,sunrise,sunset}=this.state
  return (
    <div className="App">
    <Form gettingWeather={gettingWeather}/>
    <Weather  city={city}
    country ={country}
    temp = {temp}
    sunrise={sunrise}
    sunset = {sunset}
    icon={icon} />
<Modalweather/>
    <Clock />
    </div>
  );
}
}
export default App;
