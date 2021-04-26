
import React from 'react';
import './App.scss';
import './components/home/homeStyle.scss'
import Clock from './components/clock/clock';
import Randomizer from './components/randomizer/Randomizer'
import Form from './components/weather/Form';
import Weather from './components/weather/Weather';
import ToDo from './components/toDo/toDo';
import data from './components/dataWeather';

import { NavLink } from "react-router-dom";
import News from './components/news/news'

import Currency from './components/currency/currency'
import Icon from './components/icon/Icon';
import DishForToday from './components/dish/DishForToday';

import CardOneNew from './components/news/CardOneNew';
import ChangeScene from './components/changeScene/changeScene';
import RemoveCard from './components/removeCard/RemoveCard';
import Footer from './components/footer/footer';
import NewList from './components/addCard/NewList';
import Card2 from './components/CardForAdd/Card2';
import Card1 from './components/CardForAdd/Card1';
import Reset from './components/Reset';
import dataCardContent from './components/CardForAdd/dataCardContent'

// let dropObg = [];
// dropObg = JSON.parse(localStorage.getItem('cards'));
//     if(dropObg.length <= 0){
//       console.log(document)
//       let cards = Array.from(document.querySelectorAll('.card'));
//       console.log(cards)
//       localStorage.setItem('cards', JSON.stringify(cards));
//       dropObg = localStorage.getItem('cards');
//     }


// let dropObg = Array.from(document.querySelectorAll('.card'));
// let newDrop= dropObg.sort(sortCards).map((el,i)=> {return { id: i+1, cont:el, order:i+5}})



// console.log(newDrop);

const API_KEY = '8768da57bd891fa41359848c1665c9e4';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widgetItem: [],
      curentCard:null,
      cardList:dataCardContent ,

    }


  }

  dragStartHandler = (e, card) => {


    this.setState({
      ...this.state,
      curentCard: card
    })
    console.log('drug2', this.state.curentCard)
  }
  dragEndHandler = (e) => {

    e.target.style.opacity = 1;;

  }
  dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.opacity = .5;;


  }
  dropHandler = (e,  card) => {
  e.preventDefault();
    this.setState({
      ...this.state,
      cardList: dataCardContent.map(el => {
        if (el.id === card.id) {
          return { ...el, order: this.state.curentCard.order }
        } if (el.id === this.state.curentCard.id) {
          return { ...el, order: card.order }
        } return el
      }
      )
    })
    e.target.opacity='1'
  }
   sortCards = (a,b) =>{
    if(a.order>b.order){
      return 1
    }else {return -1}
  }

  render() {



    return (


      <div >

        <div className='wrapper'>

          {this.state.cardList.sort(this.sortCards).map(el => {
            return (
              <div
                onDragStart={(e) => this.dragStartHandler(e, el)}
                onDragLeave={(e) => this.dragEndHandler(e)} onDragEnd={(e) => this.dragEndHandler(e)} onDragOver={(e) => this.dragOverHandler(e)}
                onDrop={(e) => this.dropHandler(e, el)}
                draggable={true}
                id={el.id} order={el.order}>
                {el.component}
                {/* <RemoveCard id={el.id}/> */}
              </div>
            )
          })}


        </div>
        <div className="footer ">
        <div className="wrapper1">
        <div className="wrapper-footer">
<div className="title-card"><span>settings</span></div>
            <div className="footer-content">
              <div className='footer-setting'>
                <Footer />
                <ChangeScene />
                <Reset/>
              </div>

                <div className="contacts">

                <ul className="footer__contacts">

                  <li className="footer__contacts-item">
                    <span className="footer__contacts-name">Diana Kovaleva</span>
                    <div className="footer__contacts-list">
                      <a className="footer__contacts-github" href="https://github.com/Dianakove32" target="_blank" rel="noreferrer">GitHub</a>
                      <span role="separator">|</span>
                      <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/dziana-kavaleva-5347051aa/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  </li>
                  <li className="footer__contacts-item">
                    <span className="footer__contacts-name">Tatsiana Horbatsevich</span>
                    <div className="footer__contacts-list">
                      <a className="footer__contacts-github" href="https://github.com/gortatka" target="_blank" rel="noreferrer">GitHub</a>
                      <span role="separator">|</span>
                      <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/tatsiana-horbatsevich/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  </li>
                  <li className="footer__contacts-item">
                    <span className="footer__contacts-name">Natalia Lapitskaya</span>
                    <div className="footer__contacts-list">
                      <a className="footer__contacts-github" href="https://github.com/LapitskayaN" target="_blank" rel="noreferrer">GitHub</a>
                      <span role="separator">|</span>
                      <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/nataliya-lapitskaya-a61a96197/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  </li>
                </ul>
              </div>
        </div>


        <p className="footer__dev-desc"> Created by Wild CodeSchool Students </p>
              </div>
            </div>

          </div>
      </div>
    );
  }
}

export default Home;


