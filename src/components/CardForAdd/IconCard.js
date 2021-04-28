import React, {useState} from 'react'
import Icon from '../icon/Icon'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'


export default function IconCard() {

    return (
        <div>
              <div order='2' id='h2'

            className="icon-container card">
            <div className="title-card"><span>Social media</span> </div>
              <Icon />

          </div>
        </div>
    )
}
//<SizeOfCard changeWidth={changeWidth}/> style={{ width:  state ? '820px' : '400px'  } } const [state,setState]= useState(false)

  // const changeWidth=()=>{
  //    setState(!state)
  //  }