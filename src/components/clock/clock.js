import React from 'react';
import './clock.scss';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time:new Date().toLocaleString() }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString(),
        });
      }
    render() {
        return (
           <p className = "App-clock" >
           { this.state.time } </p>
        );
    }
}


export default Clock;

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let today = new Date(),
//   day = days[today.getDay()],
//   date = today.getDate(),
//   month = months[today.getMonth()],
//   hour = today.getHours(),
//   min = today.getMinutes(),
//   sec = today.getSeconds();

// // Set AM or PM
// const amPm = hour >= 12 ? 'PM' : 'AM';



// // Output Time
// time.innerHTML = `${day}<br>${month}<span> </span>${date}<br>${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
//   sec
// )} ${showAmPm ? amPm : ''}`;