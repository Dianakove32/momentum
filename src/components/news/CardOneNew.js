import React from 'react';
import './news.scss';

export default function CardOneNew({ name, url, image }) {

  return (
    <div className="CardOneNew">
      <div className="CardOneNew-img">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_UNESCO.svg/1200px-Flag_of_UNESCO.svg.png' } alt="news-pict" />
      </div>
      <div className='CardOneNew-content'>
        <h3>News Decoder teams up with UNESCO to promote press freedom </h3>
        <p>News Decoder is helping UNESCO promote press freedom with a global webinar on how threats to journalists’ safety imperil the public’s right to know.</p>
        <div>
          <a href={'https://news-decoder.com/news-decoder-teams-up-with-unesco-to-promote-press-freedom/'}>read more &gt;</a>
        </div>
      </div>
    </div>



  )

}