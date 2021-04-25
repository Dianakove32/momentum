import React from 'react';
import './news.scss';

export default function CardNew({ name, url,image}) {

  return (
    <div className="cardNew">
      <div className="cardNew-img">
        {/* <img src={image ? image : null} alt="news-pict" /> */}
      </div>
      <div className='cardNew-content'>
        <h3>{name}</h3>
        <div>

          <a href={url}>read more &gt;</a>
        </div>
      </div>
    </div>



  )

}