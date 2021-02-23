import React, { Component } from 'react'
import Modalweather from './Modalweather'


export default class Weather extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { city, country, temp,   sunrise, sunset } = this.props
        return (
            <div>


<p>City:  {city   } Temp: {temp} </p>
             <Modalweather
                city={city}
    country ={country}
    temp = {temp}
    sunrise={sunrise}
    sunset = {sunset}

          />

            </div>




        )
    }
}
