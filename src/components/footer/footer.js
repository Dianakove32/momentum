import React, {useState} from "react";
import Modal from 'react-modal';

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        console.log('click')
        setIsOpen(!isOpen)
    }

    return(
        <div>
        <div className="icon-item"><div className="last" onClick={toggleModal} >+ </div></div>
            <div className="popup">
                <Modal  appElement={document.querySelector('#app')}
                    isOpen={isOpen}
                    onRequestClose={toggleModal}>
                     {/* style={customStyles} */}
                    <div className="modal">
                        <button className='btn-modal' onClick={toggleModal}>Close</button>
                  </div>
                   
                    </Modal>
                    </div>
                    </div>
    )
}