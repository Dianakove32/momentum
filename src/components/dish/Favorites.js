import React, {useState,useEffect, useContext} from 'react'
import {ApiContext} from '../context/Context'
import Modal from 'react-modal'
import Item from './Item'
import DishForToday from './DishForToday'
import Home from '../../home'


export default function Favorites() {
    const context=useContext(ApiContext)
    const [isOpen, setIsOpen] = useState(false)
//     const [state,setState] = useState([])
//     console.log(context.state.cart)
//  useEffect(()=>{

//   const raw=localStorage.getItem('recipy') || []
//    setState(JSON.parse(raw));

//  },[])



//     useEffect(()=>{
//         localStorage.setItem('recipy', JSON.stringify(context.state ))

//     },[state])

    const toggleModal = ()=>{
        console.log('click')
        setIsOpen(!isOpen)
    }
     const findItem = (arr, label) => arr.find((el) =>el.recipe.label  === label );
     const deleteItem = (label) => {
         console.log('e',  )

       let element = findItem(context.state.cart, label);
       console.log('elem', element)
         const index = context.state.cart.indexOf(element);

       let copyOfItems = [...context.state.cart];
          copyOfItems.splice(index, 1);
       context.setState({
            ...context.state,
           cart: copyOfItems,
        });
        };

const getQuantity = (arr, title) => arr.filter((el)=> el.recipe.label == title)
    const renderItem = (arr)=>{
    //    let a= arr.filter((value,index,self)=> self.indexOf(value)==index)
    //    let b=a.map(el=>console.log('map',el.recipe.label))
    //    console.log(a)
        return arr
        .filter((value,index,self)=> self.indexOf(value)==index)
        .map((el, i)=>
       { return (
           <>
            <Item
            key={i}
            label={el.recipe.label}
            image={el.recipe.image}
            calories={el.recipe.calories}
            ingredientLines={el.recipe.ingredientLines}
            quantity={getQuantity(context.state.cart).length}
               onClick={deleteItem}/>

            </>
        )})
    }
    return (
        <div>
<Modal   appElement={document.querySelector('#app')}
    isOpen ={isOpen}
    onRequestClose = {toggleModal}
    contentLabel = "My dialog">
{
    !context.state.cart.length ? (
        <h2>There is nothing</h2>
    ) : (
        renderItem (context.state.cart)
    )
}
<button onClick={toggleModal}>Close</button>
</Modal>
<button onClick={ toggleModal}>Modal</button>



        </div>
    )
}
