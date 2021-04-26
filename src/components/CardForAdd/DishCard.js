import React from 'react'
import { NavLink } from 'react-router-dom'
import DishForToday from '../dish/DishForToday'

import RemoveCard from '../removeCard/RemoveCard'

export default function DishCard() {
    return (
        <div>
              <div className="dish-container card">
            <div className="title-card"><span>Dish for today</span><div className="title-link"><NavLink to="/dish">find more recipy</NavLink></div></div>
            <div className='dishForToday'><DishForToday /></div>

          </div>
        </div>
    )
}
