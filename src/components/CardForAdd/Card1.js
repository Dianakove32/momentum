import React, {useState} from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'
import dataExtraCard from '../footer/dataExtraCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'

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
        <div onClick={props.addWidget}>
            <div id='e1'  style={{ width:  state ? '820px' : '400px',background:'#a99ee3'  } }  className=" card-modal " >
                <div className="title-card"><span>Calendar</span><SizeOfCard changeWidth={changeWidth}/> </div>

                {/* <AddCard /> */}


            </div>
        </div>
    )
}
