import React from 'react';
import './news.scss';

export default function CardNew({ name, url,image}, {thumbnail}) {
console.log(thumbnail)
  return (
    <div className="cardNew">
      <div className="cardNew-img">
        {/* <img src={image.thumbnail.contentUrl} alt="news-pict" /> */}
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