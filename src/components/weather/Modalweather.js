import React, { Component } from 'react'
import Modal from 'react-modal';

export default function Modalweather(props){
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }

    // function afterOpenModal() {

    //   subtitle.style.color = '#f00';
    // }

    function closeModal(){
      setIsOpen(false);
    }
    const { city, country, temp,  sunrise, sunset } =  props
      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}

            onRequestClose={closeModal}  >

            <button onClick={closeModal}>close</button>
            <div>
            <p>City:{city   } Temp:  {temp} </p>
               <p>country: {country}</p>

<p>Sunrise: {sunrise}</p>
<p>Sunset: {sunset}</p>
            </div>

          </Modal>
        </div>
      );
  }
