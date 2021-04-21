import React, {useState} from 'react';
import './changeScene.scss'
export default class ChangeScene extends React.Component {
  state={

  }
    render() {

        let changeBg = () => {
        let btn = document.querySelector( '#selectColor' )
        document.body.style.backgroundColor = btn.options[btn.selectedIndex].text

    };

    return (
        <select id="selectColor" onChange = { changeBg } >
         <option value="change backgraund">change backgraund</option>
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