
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
import axios from 'axios'
import { NavLink } from "react-router-dom";
import News from './components/news/news'

import Currency from './components/currency/currency'
import Icon from './components/icon/Icon';
import DishForToday from './components/dish/DishForToday';
import CardNews from './components/news/cardNew'
import CardNew from './components/news/cardNew';
import CardOneNew from './components/news/CardOneNew';
import ChangeScene from './components/changeScene/changeScene';
import RemoveCard from './components/removeCard/RemoveCard';
import Footer from './components/footer/footer';
import NewList from './components/addCard/NewList';
import Card2 from './components/CardForAdd/Card2';
import Card1 from './components/CardForAdd/Card1';



const API_KEY = '8768da57bd891fa41359848c1665c9e4';


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.getCityLocation = this.getCityLocation.bind(this)
    this.getCityLocation()


  }
  state = {
    widgetItem:[],
    icon: undefined,
    temp: undefined,
    city: 'Enter the city to find out the weather',
    country: undefined,
    humidity: undefined,
    sunset: undefined,
    description: '...',
  }


  getCityLocation() {

    fetch('https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          city: data.city
        })
        return data.city

      }
      )
      .then(async (city) => {
        const name =JSON.parse(localStorage.getItem('city'))

        if (!name) {
          const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
          const res = await data.json()
          return res
        } else {

          const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
          const res = await data.json()
          return res
        }
      })
      .then(data => this.setState({
        city: data.name,
        temp: Math.ceil(data.main.temp) + '°C',

        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      }))
  }




  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    localStorage.setItem('city', JSON.stringify(city))
    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
      const data = await api_url.json()
      if (data.message == "city not found") {
        alert('City not found. Please enter correct data')
      } else {


        this.setState({
          city: data.name,
          temp: Math.ceil(data.main.temp) + '°C',

          country: data.sys.country,
          humidity: data.main.humidity,

          description: data.weather[0].description
        })

      }


    }
  }




  render() {
    const gettingWeather = this.gettingWeather
    const { city, country, temp, icon, sunset, humidity, description, } = this.state
    let imageModal = null;
    let phrase = null;
    data.forEach(el => {

      if (description.includes(el.descriptionData)) {
        imageModal = el.image
        phrase = el.text
        return (imageModal, phrase)
      }
    })

    return (


      <div >

        <div className='wrapper'>

          <div className="todo-container card">
            <div className="title-card"><span>My todo list</span> </div>
            <ToDo />
            <RemoveCard />
          </div>
          <div className="icon-container card">
            <div className="title-card"><span>Social media</span></div>
            <Icon />
            <RemoveCard />
          </div>
          <div className="news-container card">
            <div className="title-card"><span>NEWS </span><div className="title-link"><NavLink to="/news">find more news</NavLink></div></div>
            <CardOneNew />
            {/* <Currency />
                 */}
            <RemoveCard />
          </div>
          <div className="clock-container card">
            <Clock />
            <RemoveCard />
          </div>
          <div className="dish-container card">
            <div className="title-card"><span>Dish for today</span><div className="title-link"><NavLink to="/dish">find more recipy</NavLink></div></div>
            <div className='dishForToday'><DishForToday /></div>
            <RemoveCard />
          </div>

          <div className="weather-container card"
            style={{ backgroundImage: `url(${imageModal})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundWidth: '400', backgroundHeight: '300' }}>
            <div className="title-card">weather</div>

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
            <RemoveCard />
          </div>
          <div className="quote-container card">
            <div className="title-card"><span>phrase of the day</span></div>
            <Randomizer />
            <RemoveCard />
          </div>

          <div className="footer card">
            <div className="title-card"><span>settings</span></div>
            <div className="footer-content">
              <Footer  onClick={this.onClick}/>

              <ChangeScene />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;



