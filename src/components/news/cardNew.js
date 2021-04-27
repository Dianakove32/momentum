import React from 'react';
import './news.scss';

export default function CardNew({ name, url,image}) {

  return (
    <div className='dataCardNews'>
      {/* <div className="cardNew-img">
        {/* <img src={image ? image : null} alt="news-pict" />
      </div> */}
      {/* <div className='cardNew-content'>

        <div> */}
  <h3>{name}</h3>
          <a href={url}>read more &gt;</a>

    </div>



  )

}