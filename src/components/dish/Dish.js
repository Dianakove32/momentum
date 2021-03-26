import React from 'react'

export default function Dish({
    label,image,calories,ingredientLines
}) {


    return (
        <div>
<h2>{label}</h2>
      <img src={image} alt={label} />
      <p>{calories}</p>
      <p>{ingredientLines}</p>
      <p>{calories}</p>
        </div>
    )
}
