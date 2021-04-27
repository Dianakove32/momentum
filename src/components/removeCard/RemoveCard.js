import React, {useState} from 'react'
import { CloseWidgets } from '../../components/dish/style'
import './RemoveCard.scss'
import dataCardContent from '../CardForAdd/dataCardContent'
export default function RemoveCard({deleteItem}) {
const [isState,isSetState]=useState(false)
const [state, setState] = useState(dataCardContent)
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
isSetState( !isState )
}

//const findItem = (arr, id) => arr.find((el) => el.id === id);
const delitWidget = (id) => {
    // let element = findItem(state, id);
    // const index = state.indexOf(element);
    // let copyOfItems = [...state];
    // copyOfItems.splice(index, 1);
    // setState({
    //    copyOfItems,
    // });
};




    return (
        <div onClick={deleteItem} className='delite-widget'>

            &#10006;

        </div>

    )
}
