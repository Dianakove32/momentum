import React from 'react';
import RemoveCard from '../removeCard/RemoveCard';
import Form from '../weather/Form';
import Weather from '../weather/Weather';

//import RemoveCard from '../removeCard/RemoveCard'
import data from '../../components/dataWeather';

const API_KEY = '8768da57bd891fa41359848c1665c9e4';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widgetItem: [],
      icon: undefined,
      temp: undefined,
      city: 'Enter the city to find out the weather',
      country: undefined,
      humidity: undefined,
      sunset: undefined,
      description: '...',
    }
    this.getCityLocation = this.getCityLocation.bind(this)
    this.getCityLocation()

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
render(){
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
        <div   >
                   <div className="weather-container card"
            style={{ backgroundImage: `url(${imageModal})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <div className="title-card"><span>weather</span></div>

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
            {/* <RemoveCard /> */}
          </div>
        </div>
    )
}

}
export default WeatherCard