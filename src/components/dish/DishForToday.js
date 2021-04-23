import React, { useContext  }from 'react'
import {ApiContext} from '../context/Context'
import Dish from './Dish'
import DishOneForToday from './DishOneForToday'
import './style.scss'

export default function DishForToday( ) {
    const context=useContext(ApiContext)
    return (
        <div>

 {/* {context.state.cart.map((el,i)=>{
     return <div className= "circul-img"><img   src = {el.recipe.image} />
     <p key={i}>  {el.recipe.label}</p> </div>

 } ) } */}
{
       !context.state.cart.length ? (<div>  <DishOneForToday/>  </div>):(context.state.cart.map((el,i)=>{
     return <div key={i} className= "circul-img"><img   src = {el.recipe.image} />
     <p>   {el.recipe.label}</p> </div>

 } ))
 }
        </div>
    )
}
