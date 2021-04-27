import React,{ useState }   from 'react'
import Clock from '../clock/clock'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'




export default function ClockCard() {



    return (
        <div>
           <div id='h4' className="clock-container card">

            <Clock/>

          </div>

        </div>
    )
}
