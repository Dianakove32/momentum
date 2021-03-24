import React from 'react';
import './clock.scss';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          timer: setInterval(this.setDate.bind(this), 1000),
          secondDegrees: 0,
          minuteDegress: 0,
          hourDegrees: 0
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    setDate() {
      const deg = 6;
      const hr = document.querySelector('#hr');
      const mn = document.querySelector('#mn');
      const sc = document.querySelector('#sc');

      setInterval(() =>{

           let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
      });
    }
    render() {
      const secondStyle = {
          transform: `rotate(${this.state.secondDegrees}deg)`
      };
      const minuteStyle = {
          transform: `rotate(${this.state.minuteDegrees}deg)`
      };
      const hourStyle = {
          transform: `rotate(${this.state.hourDegrees}deg)`
      };
        return (
            <div className="clock">

            <div className="hour"style={hourStyle}>
                <div className="hr" id="hr"></div>
            </div>

            <div className ="min" style= {minuteStyle} >
                <div className="mn" id="mn"></div>
            </div>

            <div className="sec" style= {secondStyle} >
                <div className="sc" id="sc"></div>
            </div>

        </div>
        )
    }
}

export default Clock;
