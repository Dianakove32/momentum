import React from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'

export default function Card2({onClick}) {
    return (
        <div id='12'>
              <div  onClick={onClick} style={{background:'#e3be9e'}} className="card-modal ">
                                    <div className="title-card">Title</div>

                                    <AddCard />


                                </div>
        </div>
    )
}
