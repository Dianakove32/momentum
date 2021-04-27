import React, {useState} from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'
import dataExtraCard from '../footer/dataExtraCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'
import './CardForAdd.scss'
export default function Card1(props ) {
    const [state,setState]= useState(false)

 const changeWidth=()=>{
    setState(!state)
  }
// const    addWidget = (e) => {

//         const item = dataExtraCard.find(el => el.id.toString() === e.target.id)
//         console.log(item)
       // console.log(item)
       // let copyOfItems = [...this.state.newWidget]
       // if (copyOfItems.includes(item)) {
       //     alert('You have added this icon already')
       // } else {
       //     copyOfItems.push(item)
       //     this.setState({ newWidget: copyOfItems })
       // }
 //  }
    return (
        <div id='e1' onClick={props.addWidget}>
            <div id='e1' className='img-calendar' style={{ width:  state ? '820px' : '400px',background:'#a99ee3'  } }  className=" card-modal " >
                <div className="title-card"><span>Calendar</span><SizeOfCard changeWidth={changeWidth}/> </div>
<img id='e1' className='img-calendar' src='https://c.tadst.com/gfx/1200x630/12month-calendar.png?1'/>
                {/* <AddCard /> */}


            </div>
        </div>
    )
}
