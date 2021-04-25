import React from 'react'
import Icon from '../icon/Icon'
import RemoveCard from '../removeCard/RemoveCard'


export default function IconCard() {
    return (
        <div>
              <div order='2' id='h2'

            className="icon-container card">
            <div className="title-card">Social media</div>
              <Icon />
            <RemoveCard />
          </div>
        </div>
    )
}
