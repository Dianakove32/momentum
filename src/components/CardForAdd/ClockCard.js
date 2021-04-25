import React    from 'react'
import Clock from '../clock/clock'
import RemoveCard from '../removeCard/RemoveCard'



export default function ClockCard() {




    return (
        <div>
           <div id='h4' className="clock-container card">
            <Clock/>
            <RemoveCard />
          </div>

        </div>
    )
}
