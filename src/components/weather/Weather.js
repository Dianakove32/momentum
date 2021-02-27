import React, { Component } from 'react'
import Modalweather from './Modalweather'
import SimpleSlide from './SwitcherWeather';

export default class Weather extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { city, country, temp, sunrise, description, humidity } = this.props
        return (
            <div>
            <p>Today is  {description}</p>
                <p> {city} <b> {temp} </b>   </p>

                <SimpleSlide city={city}
                    country={country}
                    temp={temp}
                    sunrise={sunrise}
                    humidity={humidity}
                    description={description} />
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
