import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


export default class Form extends Component {
    render() {
        const {gettingWeather}=this.props
        return (
            <div>
                <h2>The weather</h2>
                <form onSubmit={gettingWeather}>
                <TextField id="outlined-basic" name= "city" label="Choose city" variant="outlined" />
                    {/* <input type = "text" name= "city" placeholder="City"/> */}

                </form>
            </div>
        )
    }
}
