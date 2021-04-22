import React, {useState} from 'react'
import { CloseWidgets } from '../../components/dish/style'
import './RemoveCard.scss'
export default function RemoveCard() {
const [isState,isSetState]=useState(true)
    // const onClick = (id) => {

    //     const item = data.find(el => el.id== id)

    //     let copyOfItems = [...state.cart]
    //     if (copyOfItems.includes(item)) {
    //         return
    //     } else
    //         copyOfItems.push(item)
    // setState({
    //         ...state,
    //         cart: copyOfItems
    //     })

    // }
const onMouseMove=()=>{
isSetState(!isState)
}
const onMouseOut=()=>{
isSetState(!isState)
}



    return (
        <div onMouseOver={onMouseMove} onMouseOut={onMouseOut}  className={isState ? 'delite-block' : 'delite-none'}>
 Close
        </div>
    )
}
