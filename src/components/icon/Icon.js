import React, { useState } from 'react';
import facebook from "./../../assets/icons/facebook.svg";
import instagram from "./../../assets/icons/instagram.svg";
import slack from "./../../assets/icons/slack.svg";
import twitter from "./../../assets/icons/twitter.svg";
import github from "./../../assets/icons/github.svg";
//import ok from "./../../assets/icons/ok.svg";
import "./icon.scss";
import Modal from 'react-modal'
import ReactModal from 'react-modal';



let objIcon=[
    {
        id: 1,
        name:facebook,
    },
    {
        id: 2,
        name:instagram,
    },
    {
        id: 3,
        name:slack,
    },
    {
        id: 4,
        name:twitter,
    },
    {
        id: 5,
        name:github,
    },
    // {
    //     id: 6,
    //     name:ok,
    // },
    {
        id: 7,
        name:"https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959",
    },

]
const initialState = {
    iconItem:[],

}

export default function Icon() {
    const [isOpen, setIsOpen] = useState(false)
const [state, setState] = useState(initialState)

    const toggleModal = () => {

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
      const onClick = ( e) =>{
        const item = objIcon.find(el => el.id.toString() === e.target.id)
        console.log(item)
       let copyOfItems = [...state.iconItem]

       copyOfItems.push(item)
       setState({iconItem:copyOfItems})
       }

    return (
        <div className="icons">
            <div  className="icon-item"><a href="https://www.facebook.com/"><img src={facebook} alt="facebook"></img></a> </div>
            <div className="icon-item"><a href="https://www.instagram.com/"><img src={instagram} alt="instagram"></img></a> </div>
            <div className="icon-item"><a href="https://app.slack.com/"><img src={slack} alt="slack"></img></a> </div>
            <div className="icon-item"><a href="https://twitter.com/"><img src={twitter} alt="twitter"></img></a> </div>
            {/* <div className="icon-item"><a href="https://github.com/"><img src={github} alt="github"></img></a> </div> */}
{state.iconItem.map(el=><div className="icon-item"><img src={el.name} alt="instagram"/> </div>)}

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
                    <div className="icons" >
                        <div  onClick={onClick}  className="icon-item"><a href="#"><img id='1' src={facebook} alt="facebook"></img></a> </div>
                        <div  onClick={onClick}  className="icon-item"><a href="#"><img id='2' src={instagram} alt="instagram"></img></a> </div>
                        <div  onClick={onClick}  className="icon-item"><a href="#"><img id='3' src={slack} alt="slack"></img></a> </div>
                        <div  onClick={onClick}  className="icon-item"><a href="#"><img id='4' src={twitter} alt="twitter"></img></a> </div>
                        <div  onClick={onClick}  className="icon-item"><a href="#"><img id='5' src={github} alt="github"></img></a> </div>
                       {/* <div onClick={onClick}  className="icon-item"><a href="#"><img id='6' src={ok} alt="ok"></img></a> </div> */}
                      <div onClick={onClick}  className="icon-item"><a href="#"><img id='7' src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959"></img></a></div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

