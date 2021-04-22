import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../context/Context'
import Modal from 'react-modal'
import Item from './Item'
import DishForToday from './DishForToday'
import Home from '../../home'
import './style.scss';
import { QuantityLength } from "./style";


export default function Favorites() {
    const context = useContext(ApiContext)
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    const findItem = (arr, label) => arr.find((el) => el.recipe.label === label);
    const deleteItem = (label) => {
        let element = findItem(context.state.cart, label);
        const index = context.state.cart.indexOf(element);
        let copyOfItems = [...context.state.cart];
        copyOfItems.splice(index, 1);
        context.setState({
            ...context.state,
            cart: copyOfItems,
        });
    };


    const getQuantity = (arr, title) => arr.filter((el) => el.recipe.label == title)
    const renderItem = (arr) => {
        let obg = JSON.stringify(arr)
        localStorage.setItem('recipy', obg)
        //    let a= arr.filter((value,index,self)=> self.indexOf(value)==index)
        //    let b=a.map(el=>console.log('map',el.recipe.label))
        //    console.log(a)


        return arr
            .filter((value, index, self) => self.indexOf(value) == index)
            .map((el, i) => {
                return (
                    <>
                        <Item
                            key={i}
                            label={el.recipe.label}
                            image={el.recipe.image}
                            calories={el.recipe.calories}
                            ingredientLines={el.recipe.ingredientLines}
                            quantity={getQuantity(context.state.cart).length}
                            onClick={deleteItem} />

                    </>
                )
            })
    }
    return (
        <div >
            <div className='modal'>
                <Modal appElement={document.querySelector('#app')}
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog">
                    <button className='btn-modal' onClick={toggleModal}>Close</button>
                    {
                        !context.state.cart.length ? (
                            <h2>There is nothing</h2>
                        ) : (
                            renderItem(context.state.cart)
                            // renderItem(cookies.context.state.cart)

                        )
                    }

                </Modal>
            </div>
            <div className="recipes-btn-wrapper">
                <QuantityLength>{context.state.cart.length}</QuantityLength>
                {/* <QuantityLength>{cookies.context.state.cart.length}</QuantityLength> */}
                <button className='btn-wish' onClick={toggleModal}>Selected recipes</button>
            </div>

        </div>
    )
}



    //     useEffect(() => {
    // let cartFromStor=localStorage.getItem('recipy')


    //         let localRecipy = JSON.parse(cartFromStor)

    //         context.setState({
    //             ...context.state,
    //             cart: localRecipy
    //         })




    //     }, [])
    // let dataStore=JSON.parse(localStorage.getItem('dish'))
    // console.log(dataStore)
    //     const [state,setState] = useState([])
    //     console.log(context.state.cart)

