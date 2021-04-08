import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Form.scss'

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
