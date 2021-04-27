import React from 'react'
import AddCard from '../addCard/AddCard'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'

export default function Card2({ addWidget }) {
    return (
        <div id='e2' onClick={addWidget}>
            <div id='e2' style={{ background: '#426149' }} className="card-modal  ">
                <div className="title-card"><span>Title</span><SizeOfCard />  </div>

                <img  id='e2' className='img-calendar' src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154883148/original/6521bc9a3e1f962a89cf5b2c7336860b00179abb/translate-from-english-to-french-or-french-to-english.jpg' />


            </div>
        </div>
    )
}
