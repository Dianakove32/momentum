import React, { useState } from 'react';
import facebook from "./../../assets/icons/facebook.svg";
import instagram from "./../../assets/icons/instagram.svg";
import slack from "./../../assets/icons/slack.svg";
import twitter from "./../../assets/icons/twitter.svg";
import github from "./../../assets/icons/github.svg";
import "./icon.scss";
import Modal from 'react-modal'
import ReactModal from 'react-modal';

export default function Icon() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        console.log('click')
        setIsOpen(!isOpen)
    }
    const customStyles = {
        content: {
          top: '35%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '60%',
          transform: 'translate(-40%, -10%)',
        },

      };

    return (
        <div className="icons">
            <div className="icon-item"><a href="https://www.facebook.com/"><img src={facebook} alt="facebook"></img></a> </div>
            <div className="icon-item"><a href="https://www.instagram.com/"><img src={instagram} alt="instagram"></img></a> </div>
            <div className="icon-item"><a href="https://app.slack.com/"><img src={slack} alt="slack"></img></a> </div>
            <div className="icon-item"><a href="https://twitter.com/"><img src={twitter} alt="twitter"></img></a> </div>
            <div className="icon-item"><a href="https://github.com/"><img src={github} alt="github"></img></a> </div>
            <div className="icon-item"><div className="last" onClick={toggleModal} >+ </div></div>
            <div className="popup">
                <Modal  appElement={document.querySelector('#app')}
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    style={customStyles}>
                    <div className="modal">
                        <button className='btn-modal' onClick={toggleModal}>Close</button>
                    </div>
                    <h3 >Add icon</h3>
                    <div className="icons">
                        <div className="icon-item"><a href="#"><img src={facebook} alt="facebook"></img></a> </div>
                        <div className="icon-item"><a href="#"><img src={instagram} alt="instagram"></img></a> </div>
                        <div className="icon-item"><a href="#"><img src={slack} alt="slack"></img></a> </div>
                        <div className="icon-item"><a href="#"><img src={twitter} alt="twitter"></img></a> </div>
                        <div className="icon-item"><a href="#"><img src={github} alt="github"></img></a> </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

