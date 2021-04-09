import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Form.scss'

// const successCallback= (position)=> {
//     console.log(position)
// }

// const errorCallback= (error) =>{
//     console.error(error)
// }

// const watchId=navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// const getlocation=() =>{
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(getCoordinates, errorCallback);
//     }else {alert('error')}
//   }
//   getCoordinates(position) {
//      let a=position.coords.latitude
//     console.log('a',a)
//     console.log(position)

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
export default class Form extends Component {

    render() {
        const {gettingWeather}=this.props
        return (
            <div>

                <form onSubmit={gettingWeather}>
                {/*  <TextField id="outlined" name= "city" label="Enter city" variant="outlined" />*/}
                   <input className=" input-weather " type = "text" name= "city" placeholder="Enter city..."/>

                </form>
            </div>
        )
    }
}
