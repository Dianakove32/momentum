import React from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'

export default function Card2({addWidget }) {
    return (
        <div id='e2'  onClick={addWidget}>
              <div id='e2'  style={{background:'#e3be9e'}} className="card-modal  ">
                                    <div className="title-card"><span>Title</span><SizeOfCard/>  </div>




                                </div>
        </div>
    )
}
