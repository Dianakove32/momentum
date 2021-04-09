import React from 'react'
import { DishWrapper,WrapperContent, } from "./style";
export default function Dish({
    label,image,calories,ingredientLines,onClick
}) {

    return (
        <DishWrapper>

            <img  src={image} alt={label} />


      <WrapperContent>
      <h2>{label}</h2>
      <p>Calories: <i>{Math.ceil(calories)} </i> </p>
      <p>{ingredientLines.map(el=><li>{el}</li>)}</p>
<button onClick= {( )=>onClick(label)}>add</button>
      </WrapperContent>

        </DishWrapper>
    )
}
