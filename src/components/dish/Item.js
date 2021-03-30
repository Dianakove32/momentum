import React, {useState,useEffect, useContext} from 'react'
import {CloseIcon, DishWrapper,WrapperContent} from './style'

export default function Item({ label,image,calories,ingredientLines,quantity}) {
    return (

 <DishWrapper>

<img  src={image} alt={label} />


<WrapperContent>
<h2>{label}</h2>
<p>Calories: <i>{Math.ceil(calories)} </i> </p>
<p>{ingredientLines.map(el=><li>{el}</li>)}</p>
<span>{`${quantity} X`}</span>
 <CloseIcon  />
</WrapperContent>

</DishWrapper>

    )
}
