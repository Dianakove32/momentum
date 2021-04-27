import React from 'react';
import './news.scss';

export default function CardOneNew({ name, url, image }) {

  return (
    <div className="CardOneNew">
      {/* <div className="CardOneNew-img">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_UNESCO.svg/1200px-Flag_of_UNESCO.svg.png' } alt="news-pict" />
      </div> */}
      <div className='CardOneNew-content'>
    <div className='CardOneNew-content-item'>
       <h3>News Decoder teams up with UNESCO to promote press freedom </h3>
        <p>News Decoder is helping UNESCO promote press freedom with a global webinar on how threats to journalists’ safety imperil the public’s right to know.</p>
        <div>
          <a href={'https://news-decoder.com/news-decoder-teams-up-with-unesco-to-promote-press-freedom/'}>read more &gt;</a>
        </div>
    </div>
    <div className='CardOneNew-content-item'>
       <h3>Marcus Rashford's budget cookery serves up fish finger sandwich </h3>
        <p>That's one of the cheap and simple recipe ideas in a project the footballer is launching to help families cook "pocket friendly" meals.</p>
        <div>
          <a href={'https://www.bbc.com/news/education-56825700'}>read more &gt;</a>
        </div>
    <div className='CardOneNew-content-item'>
       <h3>Back to school: 'I'm ready for a coffee in peace'</h3>
        <p>While some say they are happy to wave goodbye to home-schooling and are ready to reclaim their own lives, others feel anxious at the thought of their children mixing with classmates again.</p>
        <div>
          <a href={'https://www.bbc.com/news/education-56282879'}>read more &gt;</a>
        </div>
    </div>
    </div>


      </div>

    </div>



  )

}