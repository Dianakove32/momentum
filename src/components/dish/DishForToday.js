import React, { useContext  }from 'react'
import {ApiContext} from '../context/Context'


export default function DishForToday({label}) {
    const context=useContext(ApiContext)
console.log('context',context.state.cart)
    return (
        <div>

{context.state.cart.map((el,i)=><li key={i}>  {el.recipe.label}</li>)}
        </div>
    )
}
