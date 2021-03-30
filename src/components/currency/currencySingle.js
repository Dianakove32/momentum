import React from 'react';

export default function CurrencySingle(props) {
    console.log(props)
  return (

    <div className="currency">
      
        {props.Cur_Abbreviation}
        {props.Cur_OfficialRate}
    
     
    </div>



  )

}
