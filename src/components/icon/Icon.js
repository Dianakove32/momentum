import React, {useState} from 'react';
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
        setIsOpen(!isOpen)}
        
        
    return (
        <div className="icons">
        <div className="icon-item"><a href="https://www.facebook.com/"><img src={facebook} alt="facebook"></img></a> </div>
        <div className="icon-item"><a href="https://www.instagram.com/"><img src={instagram} alt="instagram"></img></a> </div>
        <div className="icon-item"><a href="https://app.slack.com/"><img src={slack} alt="slack"></img></a> </div>
        <div className="icon-item"><a href="https://twitter.com/"><img src={twitter} alt="twitter"></img></a> </div>
        <div className="icon-item"><a href="https://github.com/"><img src={github} alt="github"></img></a> </div>
        <div className="icon-item"><div className="last" onClick={toggleModal} >+ </div></div>
        <div className="popup">
        <Modal appElement={document.querySelector('#app')}
                    isOpen={isOpen}
                  
                    onRequestClose={toggleModal}>
                        <div className="modal">
                    <button className='btn-modal' onClick={toggleModal}>Close</button>
                           </div>            

                </Modal>
                </div>
       </div>
    )
}

