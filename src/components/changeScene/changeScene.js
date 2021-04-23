import React, {useState} from 'react';
import './changeScene.scss'
export default class ChangeScene extends React.Component {
constructor(){
  super()
  this.state={
color:'#dad1d1'
  }
}


//   changeBg = () => {
//     let btn = document.querySelector( '#selectColor' )
//     document.body.style.backgroundColor = btn.options[btn.selectedIndex].text

// };
componentDidMount(){
  if(!JSON.parse(localStorage.getItem('color'))){
    document.body.style.backgroundColor = '#dad1d1'
  } else {
     let btn = document.querySelector( '#selectColor' )
  document.body.style.backgroundColor = btn.options[JSON.parse(localStorage.getItem('color'))].text
  }

}

    render() {

        let changeBg = () => {

        let btn = document.querySelector( '#selectColor' )
        localStorage.setItem('color', JSON.stringify(btn.selectedIndex ))
        document.body.style.backgroundColor = btn.options[JSON.parse(localStorage.getItem('color'))].text

    };

    return (
        <select id="selectColor" onChange = { changeBg } >
         <option value="change backgraund">CHANGE BACKGRAUND</option>
            <option>WHITE</option>
            <option>WHEAT</option>
            <option>KHAKI</option>
            <option>SILVER</option>
            <option>LIGHTGREEN</option>
            <option>TEAL</option>
            <option>LIGHTBLUE</option>
            <option>CORAL</option>
        </select>
    )
  }
}