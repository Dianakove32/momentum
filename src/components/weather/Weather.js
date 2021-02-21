import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {city,country,temp,icon,sunrise,sunset}= this.props
        return (
            <div>

            <div>
               <p>City: {city}</p>
               <p>country: {country}</p>
<p>Temp: {icon}{temp}</p>
<p>Sunrise: {sunrise}</p>
<p>Sunset: {sunset}</p>
            </div>


            </div>
        )
    }
}
