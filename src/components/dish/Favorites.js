import React, {useState,useEffect, useContext} from 'react'
import {ApiContext} from '../context/Context'
import Modal from 'react-modal'
import DishList from './DishList'

export default function Favorites() {
    const context=useContext(ApiContext)
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = ()=>{
        console.log('click')
        setIsOpen(!isOpen)
    }
    return (
        <div>
<Modal   appElement={document.querySelector('#app')}
    isOpen ={isOpen}
    onRequestClose = {toggleModal}
    contentLabel = "My dialog"

/>
<button onClick={ toggleModal}>Modal</button>



        </div>
    )
}
