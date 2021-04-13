import React from 'react';
import './news.scss';

export default function CardNew({title,description,url,urlToImage}) {
    
  return (

    <div className="cardNew">
    
      
        <h1>{title}</h1>
        <div>
       <p>{description}</p>
       <a href={url}>read more &gt;</a>
       </div>
       <img src={urlToImage} alt=""/>
      
     
    </div>



  )

}