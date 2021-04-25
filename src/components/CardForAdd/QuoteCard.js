import React from 'react'
import Randomizer from '../randomizer/Randomizer'
import RemoveCard from '../removeCard/RemoveCard'

export default function QuoteCard() {
    return (
        <div>
             <div className="quote-container card">
            <div className="title-card"><span>phrase of the day</span></div>
            <Randomizer />
            <RemoveCard />
          </div>
        </div>
    )
}
