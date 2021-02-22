import React, { Component } from 'react'
import Modal from 'react-modal'

export default class Modalweather extends Component {
    constructor (props){
        super(props)
    }
    render() {
        const { city, country, temp, icon, sunrise, sunset } = this.props
        return (
            <div>
<Modal>
<p>City: {city}</p>
               <p>country: {country}</p>
<p>Temp: {icon}{temp}</p>
<p>Sunrise: {sunrise}</p>
<p>Sunset: {sunset}</p>
</Modal>
            </div>
        )
    }
}
