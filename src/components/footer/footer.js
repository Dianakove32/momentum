import React, { useState } from "react";
import Modal from 'react-modal';
import AddCard from "../addCard/AddCard";
import Card1 from "../CardForAdd/Card1";
import Card2 from "../CardForAdd/Card2";
import RemoveCard from "../removeCard/RemoveCard";
import './footer.scss';


const initialState = {
    widgetItem: [],

}



export default function Footer({onClick}) {
    const [isOpen, setIsOpen] = useState(false)
    // const [state, setState] = useState(initialState)
    // const onClick = (e) => {
    //     const objWidget = Array.from(document.querySelectorAll('.card-modal'));
    //     const item = objWidget.find(el => el.id.toString() === e.target.id)
    //     let copyOfItems = [...state.widgetItem]
    //     if (copyOfItems.includes(item)) {
    //         alert('You have added this icon already')
    //     } else {
    //         copyOfItems.push(item)
    //         setState({ widgetItem: copyOfItems })
    //     }
    // }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className="icon-item"><div className="last" onClick={toggleModal} >+ </div></div>
            <div className="popup">
                <Modal appElement={document.querySelector('#app')}
                    isOpen={isOpen}
                    onRequestClose={toggleModal}>
                    {/* style={customStyles} */}
                    <div className="modal">
                        <div className="wrapper">
                            <div className="modal-header">
                                <button className='btn-modal' onClick={toggleModal}>Close</button>
                                <h3>Add a widget to your desktop</h3>
                            </div>

                            <div className='widget-container'>
                               <Card1   onClick={onClick}/>
                               <Card2   onClick={onClick}/>

                                <div id='13' onClick={onClick} className="news-container card-modal">
                                    <div className="title-card">Title</div>
                                    <AddCard />
                                    <RemoveCard />
                                </div>
                                <div id='14' onClick={onClick} className="weather-container card-modal">
                                    <div className="title-card">Title</div>
                                    <AddCard />
                                    <RemoveCard />
                                </div>
                                <div id='15' onClick={onClick} className="clock-container card-modal">
                                    <div className="title-card">Title</div>
                                    <AddCard />
                                    <RemoveCard />
                                </div>
                                <div className="news-container card-modal">
                                    <div className="title-card">Title</div>
                                    <AddCard />
                                    <RemoveCard />
                                </div>
                                <div className="weather-container card-modal">
                                    <div className="title-card">Title</div>
                                    <AddCard />
                                    <RemoveCard />
                                </div>
                                <div className="clock-container card-modal">
                                    <div className="title-card">Title</div>
                                    <AddCard />
                                    <RemoveCard />
                                </div>
                                <div className="news-container card-modal">
                                    <div className="title-card">Title</div>
                                    <AddCard />
                                    <RemoveCard />
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        </div>
    )
}