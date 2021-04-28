import React, {useState} from 'react'
import Randomizer from '../randomizer/Randomizer'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'
import '../../constant.scss'

export default function QuoteCard() {

    return (
        <div>
             <div  className="quote-container card">
            <div className="title-card"><span>phrase of the day</span>   </div>
            <Randomizer />

          </div>
        </div>
    )
}
//<SizeOfCard changeWidth={changeWidth}style={{ width:  state ? '820px' : '400px'  } }
// const [state,setState]= useState(true)

//  const changeWidth=()=>{
//     setState(!state)
//   }