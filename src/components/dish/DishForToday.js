import React, { useContext  }from 'react'
import {ApiContext} from '../context/Context'


export default function DishForToday( ) {
    const context=useContext(ApiContext)


    return (
        <div>

{context.state.cart.map((el,i)=><li key={i}>  {el.recipe.label}</li>)}
        </div>
    )
}
