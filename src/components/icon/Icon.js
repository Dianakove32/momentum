import React, { useState, useEffect } from 'react';
import facebook from "./../../assets/icons/facebook.svg";
import instagram from "./../../assets/icons/instagram.svg";
import slack from "./../../assets/icons/slack.svg";
import twitter from "./../../assets/icons/twitter.svg";
import github from "./../../assets/icons/github.svg";
import ok from "./../../assets/icons/ok.svg";
import "./icon.scss";
import Modal from 'react-modal'
import ReactModal from 'react-modal';
import NewList from '../addCard/NewList';



let objIcon = [
    {
        id: 1,
        name: facebook,

    },
    {
        id: 2,
        name: instagram,
    },
    {
        id: 3,
        name: slack,
        href: "https://app.slack.com/",
    },
    {
        id: 4,
        name: twitter,
        href: "https://twitter.com/",
    },
    {
        id: 5,
        name: github,
        href: "https://github.com/",
    },
    {
        id: 6,
        name: ok,
        href: "https://ok.ru/ ",
    },


]
const initialState = {
    iconItem: [],

}

export default function Icon() {
    const [isOpen, setIsOpen] = useState(false)
    const [state, setState] = useState(initialState)

    const [newLink, setNewLink] = React.useState({
        name: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newLink.name, newLink.email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewLink((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    useEffect(() => {
        const raw = localStorage.getItem('icon') || []
        if (raw) {
            setState(JSON.parse(raw))
        }
        const raw1=localStorage.getItem('link')
        setNewLink(JSON.parse(raw1))
    }, [])

    useEffect(() => {

        localStorage.setItem('icon', JSON.stringify(state))
        localStorage.setItem('link', JSON.stringify(newLink))

    }, [state,newLink])

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
            zIndex: 100,
        },

    };


    const onClick = (e) => {
        const item = objIcon.find(el => el.id.toString() === e.target.id)
        console.log(item)
        let copyOfItems = [...state.iconItem]
        if (copyOfItems.includes(item)) {
            alert('You have added this icon already')
        } else {
            copyOfItems.push(item)
            setState({ iconItem: copyOfItems })
        }
    }


    const findItem = (arr, id) => arr.find((el) => el.id === id);
    const deleteItem = (id) => {
        let element = findItem(state.iconItem, id);
        const index = state.iconItem.indexOf(element);
        let copyOfItems = [...state.iconItem];
        copyOfItems.splice(index, 1);
        setState({
            ...state,
            iconItem: copyOfItems,
        });
    };

    const showAlert = () => {
        alert('You have added this icon already')
    }



    return (
        <div className="icons">

        <div className="icons-block">
             <div className="icon-item"><a href="https://www.facebook.com/"><img src={facebook} alt="facebook"></img></a> </div>
            <div className="icon-item"><a href="https://www.instagram.com/"><img src={instagram} alt="instagram"></img></a> </div>
            {/* <div className="icon-item"><a href="https://app.slack.com/"><img src={slack} alt="slack"></img></a> </div>
            <div className="icon-item"><a href="https://twitter.com/"><img src={twitter} alt="twitter"></img></a> </div> */}
            {/* <div className="icon-item"><a href="https://github.com/"><img src={github} alt="github"></img></a> </div> */}
            {state.iconItem.map(el => <div onDoubleClick={deleteItem} className="icon-item"><a href={el.href}><img src={el.name} alt={el.name} /></a> </div>)}
 <div className="icon-item"><div className="last" onClick={toggleModal} >+ </div></div>
        </div>

        <div className="own-icon"><a href={newLink.email}><p>{newLink.name}</p></a></div>

            <div className="popup">
                <Modal appElement={document.querySelector('#app')}
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    style={customStyles}>
                    <div className="modal">
                        <button className='btn-modal' onClick={toggleModal}>Close</button>
                    </div>
                    <h3 className='h3-icon'>Add icon</h3> <p className='h3-icon'>Double click to remove the icon from the card</p>
                    <div className="icons-m" >
                        <div onClick={showAlert} className="icon-item"><a href="#"><img id='1' src={facebook} alt="facebook"></img></a> </div>
                        <div onClick={showAlert} className="icon-item"><a href="#"><img id='2' src={instagram} alt="instagram"></img></a> </div>
                        <div onClick={onClick} className="icon-item"><a href="#"><img id='3' src={slack} alt="slack"></img></a> </div>
                        <div onClick={onClick} className="icon-item"><a href="#"><img id='4' src={twitter} alt="twitter"></img></a> </div>
                        <div onClick={onClick} className="icon-item"><a href="#"><img id='5' src={github} alt="github"></img></a> </div>
                        <div onClick={onClick} className="icon-item"><a href="#"><img id='6' src={ok} alt="ok"></img></a> </div>
                        {/* <div onClick={onClick} className="icon-item"><a href="#"><img id='7' src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959"></img></a></div> */}
                    </div>
                    <h3 className='h3-icon'>or make your oun</h3>
                    <form className='form-icon-add' onSubmit={handleSubmit}>
                        <label>Name</label>
                        <br />
                        <input className='form-icon-input'
                            type="text"
                            name="name"
                            placeholder="name of link"
                            value={newLink.name}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Link</label>
                        <br />
                        <input className='form-icon-input'
                            type="text"
                            placeholder="link"
                            onChange={handleChange}
                            name="email"
                            value={newLink.email}
                        />
                        <br />
                        <button className='form-icon-btn'>Submit</button>
                    </form>




                </Modal>
            </div>
        </div>
    )
}

