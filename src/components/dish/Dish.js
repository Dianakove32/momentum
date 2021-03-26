import React from 'react'
import { DishWrapper,WrapperContent, } from "./style";
export default function Dish({
    label,image,calories,ingredientLines
}) {


    return (
        <DishWrapper>

            <img  src={image} alt={label} />


      <WrapperContent>
      <h2>{label}</h2>
      <p>Calories: {Math.ceil(calories)}</p>
      <p>{ingredientLines}</p>

      </WrapperContent>

        </DishWrapper>
    )
}
