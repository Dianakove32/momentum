import React from 'react'

export default function Reset() {
    const cleanLocalStoradge= () =>{
        console.log('localStorage.clear()')
        localStorage.clear()
    }
    return (
        <div>
            <div className="last" onClick={cleanLocalStoradge} style={{fontSize:'16px', marginLeft:'10px'}} > Reset </div>
        </div>
    )
}
