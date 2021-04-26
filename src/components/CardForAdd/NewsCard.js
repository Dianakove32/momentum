import React from 'react'
import { NavLink } from 'react-router-dom'
import CardOneNew from '../news/CardOneNew'
import RemoveCard from '../removeCard/RemoveCard'

export default function NewsCard() {
    return (
        <div>
                 <div draggable={true}
            id='h3' className="news-container card">
            <div className="title-card"><span> NEWS </span> <div className="title-link"><NavLink to="/news">find more news</NavLink></div></div>
              <CardOneNew />

            <RemoveCard />
          </div>
        </div>
    )
}
