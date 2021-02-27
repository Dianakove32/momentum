import React, { Component } from 'react'
import Modalweather from './Modalweather'
import SimpleSlide from './SwitcherWeather';

export default class Weather extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { city, country, temp, sunrise, sunset, humidity } = this.props
        return (
            <div>
                <p> {city} <b> {temp} </b> °C           </p>

                <SimpleSlide city={city}
                    country={country}
                    temp={temp}
                    sunrise={sunrise}
                    humidity={humidity} />
                {/* <Modalweather
                city={city}
    country ={country}
    temp = {temp}
    sunrise={sunrise}

    humidity={humidity}

          /> */}

            </div>
        )
    }
}
