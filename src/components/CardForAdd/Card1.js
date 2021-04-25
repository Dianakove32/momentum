import React from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'

export default function Card1({ onClick }) {
    return (
        <div id='11'>
            <div onClick={onClick} style={{background:'#a99ee3'}} className=" card-modal">
                <div className="title-card">Title</div>
                <AddCard />


            </div>
        </div>
    )
}
