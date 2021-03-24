import React, { Component } from 'react'
import Modalweather from './Modalweather'
import SimpleSlide from './SwitcherWeather';
import data from '../dataWeather'
export default class Weather extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { city, country, temp, sunrise, description, humidity,image,  data } = this.props
        let imageModal=null;
        let phrase = null;
      data.forEach(el=>{

        if(description.includes(el.descriptionData)){
        imageModal= el.image
        phrase = el.text

          return (imageModal, phrase)

        } })

        return (
            <div>
            <p>Today is  {description}</p>
            <p>  {phrase}</p>
                <p> {city} <b> {temp} </b>   </p>

                <SimpleSlide city={city}
                    country={country}
                    temp={temp}
                    sunrise={sunrise}
                    humidity={humidity}
                    description={description}
                    image={image}
                    data={data}
                    imageModal={imageModal} />
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
