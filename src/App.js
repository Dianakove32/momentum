import React from 'react';
import './App.scss';
import Clock from './components/clock/clock';
import Randomizer from './components/randomizer/Randomizer'
import Form from './components/weather/Form';
import Weather from './components/weather/Weather';
import ToDo from './components/toDo/toDo';
import data from './components/dataWeather'
const API_KEY= '8768da57bd891fa41359848c1665c9e4';


class App extends React.Component {

  state={

    icon:undefined,
    temp: undefined,
    city: undefined,
    country:undefined ,
    humidity: undefined,
    sunset: undefined,
    description: '...',
  }



  gettingWeather= async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
console.log(  'xbfc', city)
    if(city){
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
      const data = await api_url.json()
      console.log(data)

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

  render(){
      const  gettingWeather =this.gettingWeather
      const {city, country,temp,icon,sunset,humidity,description, }=this.state
    return (
      <div className='App'>
      <div className='wrapper'>
           <div className='weatherBlock'>
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
<Clock />
      </div>

        <div  >

        <Randomizer />
        <ToDo/>
      </div>
      </div>
    );
  }
}

export default App;
