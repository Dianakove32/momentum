import React from 'react'

export default function AutoLocataion() {
    function getCityLocation (){


        fetch('https://geolocation-db.com/json/639aa2f0-98c5-11eb-a996-0b3faf254bc0')
        .then(res=>res.json())
        .then(data=>console.log(data))

      }
      getCityLocation()
    return (
        <div>

        </div>
    )
}
