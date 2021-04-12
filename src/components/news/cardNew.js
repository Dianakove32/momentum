import React from 'react';

export default function CardNew({title,description,url,urlToImage}) {
    
  return (

    <div className="cardNew">
    
      
        <h1>{title}</h1>
       <p>{description}</p>
       <a href={url}>read more</a>
       
      
     
    </div>



  )

}