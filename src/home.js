
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



const API_KEY = '8768da57bd891fa41359848c1665c9e4';
// function getCityLocation (){


//   fetch('https://geolocation-db.com/json/639aa2f0-98c5-11eb-a996-0b3faf254bc0')
//   .then(res=>res.json())
//   .then(data=>console.log(data))

// }

// getCityLocation()

class Home extends React.Component {
  constructor(props) {
    super(props)
    // this.getlocation=this.getlocation.bind(this)
    // this.successCallback=this.getCoordinates.bind(this)
    // this.errorCallback=this.errorCallback.bind(this)
    this.getCityLocation = this.getCityLocation.bind(this)
    this.getCityLocation()


  }
  state = {

    icon: undefined,
    temp: undefined,
    city: 'Smile. Life is wonderfull',
    country: undefined,
    humidity: undefined,
    sunset: undefined,
    description: '...',
  }
  componentDidMount() {

    const name = localStorage.getItem('city')
    console.log('name', name)
    this.setState({
      city: name
    })


  }
  // componentDidUpdate(prev,cur){
  //   console.log('prev',prev)
  //    console.log('cur',cur)
  //      if (prev.city!==cur.city){
  //      const name =localStorage.getItem('city')
  //      console.log('name',name)
  //       this.setState({
  //         city: name
  //       })
  //     }
  // }

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
          console.log('res1', res)
          return res
        } else {
           console.log('res2', name)
          const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
          const res = await data.json()

          return res
        }
      })
      .then(data => this.setState({
        city: data.name,
        temp: Math.ceil(data.main.temp) + '°C',
        // icon:data.weather[0].icon,
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



        // var sunset = data.sys.sunset;
        // var date = new Date();
        // date.setTime(sunset);
        // var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

        this.setState({
          city: data.name,
          temp: Math.ceil(data.main.temp) + '°C',
          // icon:data.weather[0].icon,
          country: data.sys.country,
          humidity: data.main.humidity,
          // sunset: sunset_date,
          description: data.weather[0].description
        })

      }


    }
  }

  render() {
    console.log('city', this.state.city);
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

      //<div className='mainWrapper'>
      <div >

        <div className='wrapper'>
          {/* <div className="header card">
<ChangeScene/>
          </div> */}
          <div className="todo-container card">
            <div className="title-card">My todo list</div>
            <ToDo />
            <RemoveCard />
          </div>
          <div className="icon-container card">
            <div className="title-card">Social media</div>
            <Icon />
            <RemoveCard />
          </div>
          <div className="news-container card">
            <div className="title-card"> NEWS <div className="title-link"><NavLink to="/news">find more news</NavLink></div></div>
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
            <div className="title-card">Dish for today<div className="title-link"><NavLink to="/dish">find more recipy</NavLink></div></div>
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
            <div className="title-card">phrase of the day</div>
            <Randomizer />
            <RemoveCard />
          </div>
          <div className="footer card">
            <div className="title-card">settings</div>
            <div className="footer-content">
              <Footer />
              <ChangeScene />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


//    .then(data=>
  //       this.setState({
  //     city: data.name,
  //     temp: Math.ceil(data.main.temp) + '°C',
  //     // icon:data.weather[0].icon,
  //     country: data.sys.country,
  //     humidity: data.main.humidity,

  //     description: data.weather[0].description
  //   })
  //  )
//     getlocation() {
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(this.getCoordinates, this.errorCallback);
//     }else {alert('error')}
//   }
//   getCoordinates(position) {
//      let latitude=position.coords.latitude
//     console.log('a',latitude)
//     console.log(position.coords.longitude)

// }

//   errorCallback (error) {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         alert("User denied the request for Geolocation.")
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert("Location information is unavailable.")
//         break;
//       case error.TIMEOUT:
//         alert("The request to get user location timed out.")
//         break;
//       case error.UNKNOWN_ERROR:
//         alert("An unknown error occurred.")
//         break;
//     }
// }


 //<div className='mainWrapper'>
//  <div >
//  <div className="row row1">
//    <div className='wrapper'>
//      <div className='layout-2-column'>
//        <div className="todo-container">
//          <ToDo />
//        </div>
//        <div className="icon-container">

//          <Icon />
//        </div>
//      </div>
//    </div>
//  </div>
//  <div className="row">
//    <div className='wrapper'>
//      <div className='layout-3-column'>
//        <div className="news-container">
//          <Currency />
//          <NavLink to="/news"> <h3>NEWS </h3></NavLink>
//        </div>
//        <div className="clock-container">
//          <Clock />
//        </div>
//        <div className="dish-container">
//          <NavLink to="/dish"> <h3>Dish for today</h3></NavLink>
//          <div className='dishForToday'><DishForToday /></div>
//        </div>
//      </div>
//    </div>
//  </div>
//  <div className="row row1">
//    <div className='wrapper'>
//      <div className='layout-2-column'>
//        <div className="weather-container"
//          style={{ backgroundImage: `url(${imageModal})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: 'auto' }}>
//          <div className='weatherBlock'>
//            <Form data={data} gettingWeather={gettingWeather} />
//            <Weather city={city}
//              country={country}
//              temp={temp}
//              sunset={sunset}
//              icon={icon}
//              humidity={humidity}
//              description={description}
//              data={data} />
//          </div>
//        </div>
//        <div className="quote-container">
//          <Randomizer />
//        </div>
//      </div>
//    </div>
//  </div>



// </div>
// );
// }
// }