import React from 'react';
import './news.scss';

export default function CardNew({ title, description, url, urlToImage }) {

  return (

    <div className="cardNew">
      <div className="cardNew-img">
        <img src={urlToImage} alt="news-pict" />
      </div>
      <div className='cardNew-content'>
        <h3>{title}</h3>
        <div>
          <p>{description}</p>
          <a href={url}>read more &gt;</a>
        </div>
      </div>
    </div>



  )

}