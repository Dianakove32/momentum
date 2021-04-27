import React, {useState} from 'react'
import Randomizer from '../randomizer/Randomizer'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'
import '../../constant.scss'

export default function QuoteCard() {
const [state,setState]= useState(true)

 const changeWidth=()=>{
    setState(!state)
  }
    return (
        <div>
             <div style={{ width:  state ? '820px' : '400px'  } } className="quote-container card">
            <div className="title-card"><span>phrase of the day</span>  <SizeOfCard changeWidth={changeWidth}/></div>
            <Randomizer />

          </div>
        </div>
    )
}
