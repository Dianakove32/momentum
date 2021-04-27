import React, {useState} from 'react'
import Icon from '../icon/Icon'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'


export default function IconCard() {
  const [state,setState]= useState(false)

  const changeWidth=()=>{
     setState(!state)
   }
    return (
        <div>
              <div order='2' id='h2' style={{ width:  state ? '820px' : '400px'  } }

            className="icon-container card">
            <div className="title-card"><span>Social media</span> <SizeOfCard changeWidth={changeWidth}/></div>
              <Icon />

          </div>
        </div>
    )
}
