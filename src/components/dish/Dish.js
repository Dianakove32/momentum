import React from 'react'
import { DishWrapper, WrapperContent, Btn, WrapperImage } from "./style";

export default function Dish({
    label, image, calories, ingredientLines, onClick
}) {

    return (
        <DishWrapper>
            <WrapperImage>
                <img src={image} alt={label} />
                <Btn onClick={() => onClick(label)}>Add recipy
            </Btn>
            </WrapperImage>

            <WrapperContent>
                <h3>{label}</h3>
                <p>Calories: <i>{Math.ceil(calories)} </i> </p>
                <p>{ingredientLines.map(el => <li>{el}</li>)}</p>
            </WrapperContent>
        </DishWrapper>
    )
}
