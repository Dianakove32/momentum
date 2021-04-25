
import React from 'react';
import './App.scss';
import './components/home/homeStyle.scss'
import Clock from './components/clock/clock';
import Randomizer from './components/randomizer/Randomizer'
import Form from './components/weather/Form';
import Weather from './components/weather/Weather';
import ToDo from './components/toDo/toDo';
import data from './components/dataWeather';

import { NavLink } from "react-router-dom";
import News from './components/news/news'

import Currency from './components/currency/currency'
import Icon from './components/icon/Icon';
import DishForToday from './components/dish/DishForToday';

import CardOneNew from './components/news/CardOneNew';
import ChangeScene from './components/changeScene/changeScene';
import RemoveCard from './components/removeCard/RemoveCard';
import Footer from './components/footer/footer';

// let dropObg = [];
// dropObg = JSON.parse(localStorage.getItem('cards'));
//     if(dropObg.length <= 0){
//       console.log(document)
//       let cards = Array.from(document.querySelectorAll('.card'));
//       console.log(cards)
//       localStorage.setItem('cards', JSON.stringify(cards));
//       dropObg = localStorage.getItem('cards');
//     }

const sortCards= (a,b)=>{
  if(a.order>b.order){
    return 1
  }else return -1
}
let dropObg = Array.from(document.querySelectorAll('.card'));
let newDrop= dropObg.sort(sortCards).map((el,i)=> {return { id: i+1, cont:el, order:i+5}})



console.log(newDrop);

const API_KEY = '8768da57bd891fa41359848c1665c9e4';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.getCityLocation = this.getCityLocation.bind(this)
    this.getCityLocation()

  }
  state = {
    cardList: newDrop,
    curentCard: null,
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
        const name = JSON.parse(localStorage.getItem('city'))

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

  dragStartHandler = (  card) => {
  //   e.preventDefault();

    this.setState({
      ...this.state,
      curentCard:card})
  console.log('drug2', this.state.curentCard)
  }
  dragEndHandler = (e) => {
      e.preventDefault();
    e.target.style.opacity = 1;;
    console.log()
  }
  dragOverHandler = (e) => {
      e.preventDefault();
    e.target.style.opacity = .5;;


  }
  dropHandler = (  card) => {
//e.preventDefault();
     this.setState({
       ...this.state,
       cardList: newDrop.map(el=>{
         if(el.id===card.id){
           return {...el, order:this.state.curentCard.order}
         }if(el.id===this.state.curentCard.id){
          return {...el, order:card.order}
        }
       }
       )
    })
    console.log('drop', card)
  }


  render() {
    const gettingWeather = this.gettingWeather
    const { city, country, temp, icon, sunset, humidity, description, } = this.state
    //console.log(this.state.cardList)
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
          <div order='1' id='h1'
            onDragStart={() => this.dragStartHandler( this.state.cardList[0])}
            onDragLeave={(e) => this.dragEndHandler(e)} onDragEnd={(e) => this.dragEndHandler(e)} onDragOver={(e) => this.dragOverHandler(e)}
            onDrop={() => this.dropHandler(this.state.cardList[0])}
            draggable={true}
            className="todo-container card">
            <div className="title-card">My todo list</div>
            <ToDo />
            <RemoveCard />
          </div>
          <div order='2' id='h2'
            onDragStart={ ()  => this.dragStartHandler(  this.state.cardList[1])}
            onDragLeave={(e) => this.dragEndHandler(e)} onDragEnd={(e) => this.dragEndHandler(e)} onDragOver={(e) => this.dragOverHandler(e)}
            onDrop={() => this.dropHandler(this.state.cardList[1])}
            draggable={true}
            className="icon-container card">
            <div className="title-card">Social media</div>
            <Icon />
            <RemoveCard />
          </div>
          <div draggable={true}
            id='h3' className="news-container card">
            <div className="title-card"> NEWS <div className="title-link"><NavLink to="/news">find more news</NavLink></div></div>
            <CardOneNew />
            {/* <Currency />
                 */}
            <RemoveCard />
          </div>
          <div id='h4' className="clock-container card">
            <Clock />
            <RemoveCard />
          </div>
          <div className="dish-container card">
            <div className="title-card"><span>Dish for today</span><div className="title-link"><NavLink to="/dish">find more recipy</NavLink></div></div>
            <div className='dishForToday'><DishForToday /></div>
            <RemoveCard />
          </div>

          <div id='h6' className="weather-container card"
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
<div className="title-card"><span>settings</span></div>
          <div className="footer card">

            <div className="title-card"><span>settings</span></div>
            <div className="footer-content">
              <Footer  onClick={this.onClick}/>
              <ChangeScene />
            <div className="contacts">
            <h3 className="footer__dev-desc">
            Created&nbsp;by
            Wild&nbsp;Code&nbsp;School
            Students
          </h3>
          <ul className="footer__contacts">
            <li className="footer__contacts-item">
              <span className="footer__contacts-name">Diana Kovaleva</span>
              <div className="footer__contacts-list">
                <a className="footer__contacts-github" href="https://github.com/Dianakove32" target="_blank" rel="noreferrer">GitHub</a>
                <span role="separator">|</span>
                <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/dziana-kavaleva-5347051aa/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </li>
            <li className="footer__contacts-item">
              <span className="footer__contacts-name">Tatsiana Horbatsevich</span>
              <div className="footer__contacts-list">
                <a className="footer__contacts-github" href="https://github.com/gortatka" target="_blank" rel="noreferrer">GitHub</a>
                <span role="separator">|</span>
                <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/tatsiana-horbatsevich/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </li>
            <li className="footer__contacts-item">
              <span className="footer__contacts-name">Natalia Lapitskaya</span>
              <div className="footer__contacts-list">
                <a className="footer__contacts-github" href="https://github.com/LapitskayaN" target="_blank" rel="noreferrer">GitHub</a>
                <span role="separator">|</span>
                <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/nataliya-lapitskaya-a61a96197/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </li>
          </ul>
          </div>

              {/* <ChangeScene /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


