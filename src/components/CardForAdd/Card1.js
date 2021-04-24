import React from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'

export default function Card1({ onClick }) {
    return (
        <div id='11'>
            <div onClick={onClick} className="dish-container card-modal">
                <div className="title-card">Title</div>
                <AddCard />
                                   1
                <RemoveCard />
            </div>
        </div>
    )
}
