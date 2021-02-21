import React, { Component } from 'react'



export default class Form extends Component {
    render() {
        const {gettingWeather}=this.props
        return (
            <div>
                <h2>The weather</h2>
                <form onSubmit={gettingWeather}>
                    <input type = "text" name= "city" placeholder="City"/>
                    <button>Enter</button>
                </form>
            </div>
        )
    }
}
