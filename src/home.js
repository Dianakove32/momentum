
import React from 'react';
import './App.scss';
import './components/home/homeStyle.scss'
import Clock from './components/clock/clock';
import Randomizer from './components/randomizer/Randomizer'
import Form from './components/weather/Form';
import Weather from './components/weather/Weather';
import ToDo from './components/toDo/toDo';
import data from './components/dataWeather';
import Navbar from './components/navbar/navbar';

import { NavLink } from "react-router-dom";
import News from './components/news/news'
import Dish from './components/dish/dishRandom'
import Currency from './components/currency/currency'
import Icon from './components/icon/Icon';
import DishForToday from './components/dish/DishForToday';

const API_KEY = '8768da57bd891fa41359848c1665c9e4';



class Home extends React.Component {
constructor(props){
  super(props)
}
  state = {

    icon: undefined,
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    sunset: undefined,
    description: '...',
  }
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    console.log('xbfc', city)
    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
      const data = await api_url.json()
      console.log(data)

      var sunset = data.sys.sunset;

      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()



      this.setState({

        city: data.name,
        temp: Math.ceil(data.main.temp) + '°C',
        // icon:data.weather[0].icon,
        country: data.sys.country,
        humidity: data.main.humidity,
        sunset: sunset_date,
        description: data.weather[0].description
      })
    }

  }





  render() {
    console.log('sd',this.props.label)
    const gettingWeather = this.gettingWeather
    const { city, country, temp, icon, sunset, humidity, description, } = this.state
    return (
      <>

        <div className='layout-2-column'>
          <div className="todo-container">
            <ToDo />
          </div>
          <div className="icon-container">
            <Currency />
            <Icon/>
          </div>
        </div>

        <div className='layout-3-column'>
          <div className="news-container">
          <NavLink to="/dish"> <h3>NEWS </h3></NavLink>

          </div>
          <div className="clock-container">
            <Clock />
          </div>
          <div className="dish-container">
          <NavLink to="/dish"> <h3>Dish for today</h3></NavLink>

          <div className='dishForToday'><DishForToday/></div>

          </div>
        </div>
        <div className='layout-2-column'>
          <div className="weather-container">
              <div className='weatherBlock'>
                <Form data={data} gettingWeather={gettingWeather} />
                <Weather city={city}
                  country={country}
                  temp={temp}
                  sunset={sunset}
                  icon={icon}
                  humidity={humidity}
                  description={description}
                  data={data} />
              </div>
            </div>
          <div className="quote-container">
                 <Randomizer />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
