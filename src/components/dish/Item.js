import React, { useState, useEffect, useContext } from 'react'
import { CloseIcon, DishWrapper, WrapperContent } from './style'

export default function Item({ label, image, calories, ingredientLines, quantity, onClick }) {
    return (

        <DishWrapper>
            <img src={image} alt={label} />
            <WrapperContent>
                <CloseIcon onClick={() => onClick(label)} />
                <h3>{label}</h3>
                <p>Calories: <i>{Math.ceil(calories)} </i> </p>
                <p>{ingredientLines.map(el => <li>{el}</li>)}</p>
            </WrapperContent>
        </DishWrapper>
    )
}
