import React, { useContext, useState } from "react";

import { ApiContext } from "../../components/context/Context";

import Dish from "./Dish.js";
import "./style.scss"


export default function DishList(props) {

    const context = useContext(ApiContext);

    const onChange = (e) => {
        context.setSearch(e.target.value)
    }
    const onClick = (title) => {

        const item = context.state.data.data.hits.find(el => el.recipe.label == title)
        let copyOfItems = [...context.state.cart]
        copyOfItems.push(item)
        context.setState({
            ...context.state,
            cart: copyOfItems
        })
    }

    console.log(context.state.data)
    return (
        <div>
            <button onClick={props.toggleModal}>Modal</button>

            <input className="input-dish" type='text' placeholder='find dish' autoComplete='on' onChange={onChange} />
            {context.state.isLoaded &&
                context.state.data.data.hits.map((el) => <Dish {...el.recipe} onClick={onClick} />)}

        </div>
    )
}
