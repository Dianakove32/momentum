import React from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'

export default function Card2({onClick}) {
    return (
        <div id='12'>
              <div  onClick={onClick} className="dish-container card-modal ">
                                    <div className="title-card">Title</div>

                                    <AddCard />
                                    2
                                    <RemoveCard />
                                </div>
        </div>
    )
}
